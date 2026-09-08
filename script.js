import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-app.js";
        import { getDatabase, ref, get, set, update, remove, child, onValue } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-database.js";

        const firebaseConfig = {
            apiKey: "AIzaSyCtJUVNr5iqadfwSpOd4sTrS0mrreHJJSk",
            authDomain: "odafactory-5.firebaseapp.com",
            projectId: "odafactory-5",
            storageBucket: "odafactory-5.firebasestorage.app",
            messagingSenderId: "925340298374",
            appId: "1:925340298374:web:0b5ba55daedb1f22be3507",
            databaseURL: "https://odafactory-5-default-rtdb.firebaseio.com"
        };

        const app = initializeApp(firebaseConfig);
        const db = getDatabase(app);

        const INITIAL_EMPLOYEES = [
            { name: "كريم محمد محمد عبده", fingerprint: "779", dept: "مصنع 5", totalBalance: 30, carriedBalance: 0 },
            { name: "احمد عصمت صادق ابراهيم", fingerprint: "715", dept: "مصنع 5", totalBalance: 30, carriedBalance: 0 },
            { name: "محمود نادي كامل محمد", fingerprint: "1830", dept: "مصنع 5", totalBalance: 30, carriedBalance: 0 },
            { name: "محمد سعيد محمدي", fingerprint: "1171", dept: "مصنع 5", totalBalance: 30, carriedBalance: 0 },
            { name: "محمد صلاح صميده عبد الرزاق", fingerprint: "1240", dept: "مصنع 5", totalBalance: 30, carriedBalance: 0 },
            { name: "ايمن عبد التواب احمد", fingerprint: "1510", dept: "مصنع 5", totalBalance: 30, carriedBalance: 0 },
            { name: "ايمن حسين عبد الغني", fingerprint: "1170", dept: "مصنع 5", totalBalance: 30, carriedBalance: 0 },
            { name: "وائل محمد محمد", fingerprint: "1169", dept: "مصنع 5", totalBalance: 30, carriedBalance: 0 },
            { name: "مخلوف فوزي صالح", fingerprint: "1159", dept: "مصنع 5", totalBalance: 30, carriedBalance: 0 },
            { name: "محسن ديب كامل", fingerprint: "1220", dept: "مصنع 5", totalBalance: 45, carriedBalance: 0 },
            { name: "يوسف حسين يوسف", fingerprint: "2061", dept: "مصنع 5", totalBalance: 45, carriedBalance: 0 },
            { name: "محمد محمد محمود مسعود", fingerprint: "1156", dept: "مصنع 5", totalBalance: 30, carriedBalance: 0 },
            { name: "محمد احمد يوسف", fingerprint: "2396", dept: "مصنع 5", totalBalance: 21, carriedBalance: 0 },
            { name: "مصطفي محمد مجاهد", fingerprint: "2232", dept: "مصنع 5", totalBalance: 21, carriedBalance: 0 },
            { name: "محمود عبد الرؤوف محمد", fingerprint: "2281", dept: "مصنع 5", totalBalance: 21, carriedBalance: 0 },
            { name: "رمضان سيد سليم", fingerprint: "2280", dept: "مصنع 5", totalBalance: 21, carriedBalance: 0 },
            { name: "احمد ممدوح محمد", fingerprint: "2503", dept: "مصنع 5", totalBalance: 21, carriedBalance: 0 },
            { name: "شريف انيس توفيق", fingerprint: "1004", dept: "مصنع 5", totalBalance: 45, carriedBalance: 0 },
            { name: "خالد محمد ابو سريع", fingerprint: "2433", dept: "مصنع 5", totalBalance: 21, carriedBalance: 0 },
            { name: "عمرو فتحي محمد", fingerprint: "1057", dept: "مصنع 5", totalBalance: 30, carriedBalance: 0 },
            { name: "صابر حسن علي الراوي", fingerprint: "1157", dept: "مصنع 5", totalBalance: 30, carriedBalance: 0 },
            { name: "السيد هاني السيد", fingerprint: "2323", dept: "مصنع 5", totalBalance: 21, carriedBalance: 0 },
            { name: "احمد حسين محمود", fingerprint: "1583", dept: "مصنع 5", totalBalance: 30, carriedBalance: 0 },
            { name: "محمد عبد الحفيظ عبد الرسول", fingerprint: "2231", dept: "مصنع 5", totalBalance: 21, carriedBalance: 0 },
            { name: "احمد رمضان علي", fingerprint: "1838", dept: "مصنع 5", totalBalance: 21, carriedBalance: 0 },
            { name: "احمد نبيل عبد العاطي", fingerprint: "2394", dept: "مصنع 5", totalBalance: 21, carriedBalance: 0 },
            { name: "عمر فتحي كمال محمد", fingerprint: "1083", dept: "مصنع 5", totalBalance: 30, carriedBalance: 0 },
            { name: "محمد عصمت زينهم", fingerprint: "1239", dept: "مصنع 5", totalBalance: 30, carriedBalance: 0 },
            { name: "ايهاب السيد الغريب", fingerprint: "1832", dept: "مصنع 5", totalBalance: 30, carriedBalance: 0 },
            { name: "احمد بركات المتوالي", fingerprint: "2516", dept: "مصنع 5", totalBalance: 21, carriedBalance: 0 },
            { name: "محمود محمد احمد ابوبكر", fingerprint: "2325", dept: "مصنع 5", totalBalance: 21, carriedBalance: 0 },
            { name: "محمد احمد محمد عبدة", fingerprint: "2473", dept: "مصنع 5", totalBalance: 21, carriedBalance: 0 },
            { name: "احمد سید احمد", fingerprint: "2359", dept: "مصنع 5", totalBalance: 21, carriedBalance: 0 },
            { name: "صبری احمد محمد", fingerprint: "2011", dept: "مصنع 5", totalBalance: 21, carriedBalance: 0 },
            { name: "محمد جمال حامد", fingerprint: "2358", dept: "مصنع 5", totalBalance: 21, carriedBalance: 0 },
            { name: "احمد حسين عبد المنعم", fingerprint: "2435", dept: "مصنع 5", totalBalance: 21, carriedBalance: 0 },
            { name: "معتز خلیفه محمد", fingerprint: "2360", dept: "مصنع 5", totalBalance: 21, carriedBalance: 0 },
            { name: "محمد احمد فتحي", fingerprint: "2492", dept: "مصنع 5", totalBalance: 21, carriedBalance: 0 },
            { name: "محمود محمد عبد الظاهر", fingerprint: "2395", dept: "مصنع 5", totalBalance: 21, carriedBalance: 0 },
            { name: "حسن حسين عجمي", fingerprint: "2233", dept: "مصنع 5", totalBalance: 21, carriedBalance: 0 },
            { name: "عوض مسلم عيد حسن", fingerprint: "1740", dept: "مصنع 5", totalBalance: 30, carriedBalance: 0 },
            { name: "محمد يوسف محمد عبد الحميد", fingerprint: "1103", dept: "مصنع 5", totalBalance: 30, carriedBalance: 0 }
        ];

        const SUPERVISORS_LIST = ["محمد سعيد محمدي", "محمد عصمت زينهم", "عمر فتحي كمال", "محمد صلاح صميده"];

        window.toggleMobileMenu = function() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('sidebarOverlay');
            sidebar.classList.toggle('mobile-open');
            overlay.classList.toggle('active');
        }

        async function checkAndInitDB() {
            const dbRef = ref(db);
            const snap = await get(child(dbRef, 'employees_2027'));
            if (!snap.exists()) {
                await set(ref(db, 'employees_2027'), INITIAL_EMPLOYEES);
            }
            
            // استعادة الصفحة النشطة السابقة عند عمل Refresh لمنع الخروج للصفحة الرئيسية
            const savedView = localStorage.getItem('current_view') || 'dashboard';
            switchView(savedView, true);
            
            initRealtimeListeners();
        }

        window.switchView = function(viewId, skipStorage) {
            document.querySelectorAll('.view').forEach(v => v.classList.remove('active-view'));
            document.querySelectorAll('aside nav ul li a').forEach(a => a.classList.remove('active'));
            
            const targetView = document.getElementById('view-' + viewId);
            const targetNav = document.getElementById('nav-' + viewId);
            
            if (targetView && targetNav) {
                targetView.classList.add('active-view');
                targetNav.classList.add('active');
                if (!skipStorage) {
                    localStorage.setItem('current_view', viewId);
                }
            } else {
                document.getElementById('view-dashboard').classList.add('active-view');
                document.getElementById('nav-dashboard').classList.add('active');
                localStorage.setItem('current_view', 'dashboard');
            }
        }

        window.tryOpenView = function(viewId) {
            let pass = "";
            if (viewId === 'supervisor') {
                pass = prompt("أدخل كلمة مرور صفحة طلبات المشرف:");
                if (pass === "255166") switchView('supervisor');
                else if (pass !== null) alert("كلمة المرور غير صحيحة!");
            } else if (viewId === 'department') {
                pass = prompt("أدخل كلمة مرور صفحة رئيس القسم:");
                if (pass === "kareem150140") switchView('department');
                else if (pass !== null) alert("كلمة المرور غير صحيحة!");
            } else if (viewId === 'approved' || viewId === 'employees') {
                pass = prompt("أدخل كلمة المرور:");
                if (pass === "0125260775mM##") switchView(viewId);
                else if (pass !== null) alert("كلمة المرور غير صحيحة!");
            }
        }

        window.updateTotalBalance = async function(fingerprint, val) {
            const empsSnap = await get(child(ref(db), 'employees_2027'));
            if (empsSnap.exists()) {
                let emps = empsSnap.val();
                let index = emps.findIndex(e => e.fingerprint === fingerprint);
                if (index !== -1) {
                    emps[index].totalBalance = Number(val) || 0;
                    await set(ref(db, 'employees_2027'), emps);
                }
            }
        }

        window.updateCarriedBalance = async function(fingerprint, val) {
            const empsSnap = await get(child(ref(db), 'employees_2027'));
            if (empsSnap.exists()) {
                let emps = empsSnap.val();
                let index = emps.findIndex(e => e.fingerprint === fingerprint);
                if (index !== -1) {
                    emps[index].carriedBalance = Number(val) || 0;
                    await set(ref(db, 'employees_2027'), emps);
                }
            }
        }

        let currentActiveEmployee = null;
        window.searchEmployee = async function() {
            const fp = document.getElementById('appFingerprint').value.trim();
            const empsSnap = await get(child(ref(db), 'employees_2027'));
            const infoBox = document.getElementById('employeeInfoBox');
            const applyForm = document.getElementById('applyForm');

            if (!empsSnap.exists()) {
                alert('لا توجد بيانات للعاملين!');
                return;
            }
            let emps = empsSnap.val();
            currentActiveEmployee = emps.find(e => e.fingerprint === fp);

            if (!currentActiveEmployee) {
                alert('رقم البصمة غير موجود!');
                infoBox.style.display = 'none';
                applyForm.style.display = 'none';
                return;
            }

            infoBox.innerHTML = `<b>الاسم:</b> ${currentActiveEmployee.name} | <b>القسم:</b> ${currentActiveEmployee.dept} | <b>الرصيد الأساسي:</b> ${currentActiveEmployee.totalBalance} يوم | <b>المرحل:</b> ${currentActiveEmployee.carriedBalance} يوم`;
            infoBox.style.display = 'block';
            applyForm.style.display = 'block';
        }

        window.checkDashboardEmployee = async function() {
            const fp = document.getElementById('dashFingerprint').value.trim();
            const empsSnap = await get(child(ref(db), 'employees_2027'));
            const reqsSnap = await get(child(ref(db), 'requests_2027'));
            const resultBox = document.getElementById('dashEmpResult');

            if (!empsSnap.exists()) return;
            let emps = empsSnap.val();
            let emp = emps.find(e => e.fingerprint === fp);
            if (!emp) {
                resultBox.style.display = 'block';
                resultBox.innerHTML = `<span style="color: var(--danger);">رقم البصمة غير موجود في النظام!</span>`;
                return;
            }

            let reqs = reqsSnap.exists() ? Object.values(reqsSnap.val()) : [];
            let empExecutedReqs = reqs.filter(r => r.fingerprint === fp && r.status === 'تم تنفيذ الإجازة');

            let statsByType = {};
            empExecutedReqs.forEach(r => {
                let typeName = r.type || 'أخرى';
                let days = r.daysCount !== undefined ? (Number(r.daysCount) || 0) : 1;
                if (!statsByType[typeName]) {
                    statsByType[typeName] = { count: 0, totalDays: 0 };
                }
                statsByType[typeName].count += 1;
                statsByType[typeName].totalDays += days;
            });

            let detailsHtml = '';
            if (Object.keys(statsByType).length === 0) {
                detailsHtml = `<div style="color: #64748b; font-size: 0.9rem; margin-top: 5px;">لا توجد إجازات منفذة مسجلة لهذا العامل.</div>`;
            } else {
                detailsHtml = `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 10px; margin-top: 10px;">`;
                for (let key in statsByType) {
                    detailsHtml += `<div style="background:#fff; padding:8px 12px; border:1px solid var(--border); border-radius:4px;"><b>${key}:</b> ${statsByType[key].totalDays} يوم (عدد المرات: ${statsByType[key].count})</div>`;
                }
                detailsHtml += `</div>`;
            }

            resultBox.style.display = 'block';
            resultBox.innerHTML = `
                <h4 style="color: var(--primary); margin-bottom: 8px;">بيانات العامل: ${emp.name} (بصمة: ${emp.fingerprint})</h4>
                <hr style="margin: 8px 0; border:0; border-top:1px solid var(--border);">
                <div style="display: flex; gap: 15px; font-size: 0.95rem; margin-top: 5px; flex-wrap: wrap;">
                    <div><b>الرصيد الأساسي المتبقي:</b> <span style="color:var(--success); font-weight:bold;">${emp.totalBalance} يوم</span></div>
                    <div><b>الرصيد المرحل المتبقي:</b> <span style="color:var(--secondary); font-weight:bold;">${emp.carriedBalance} يوم</span></div>
                </div>
                <div style="margin-top: 15px; font-weight: bold; color: var(--primary);">تفصيل الإجازات والأذونات المنفذة حسب النوع:</div>
                ${detailsHtml}`;
        }

        window.submitVacation = async function(e) {
            e.preventDefault();
            let vacType = document.getElementById('vacType').value;
            let startDate = document.getElementById('vacStart').value;
            let endDate = document.getElementById('vacEnd').value;

            let d1 = new Date(startDate);
            let d2 = new Date(endDate);
            let diffDays = Math.round((d2 - d1) / (1000 * 60 * 60 * 24)) + 1;
            if (isNaN(diffDays) || diffDays < 1) diffDays = 1;

            if (vacType === 'نصف يوم') diffDays = 0.5;
            if (vacType === 'إذن ساعتين') diffDays = 0;
            // الزواج والوفاة والمرضية تُسجل بعدد الأيام الفعلي من التواريخ، لكن لا تُخصم من الرصيد.
            // هذا يجعل سجل الإجازات والاستعلام يظهران 4 أيام مثلاً للزواج بدلاً من 0.
            if (vacType === 'إجازة زواج' || vacType === 'إجازة وفاة' || vacType === 'إجازة مرضية') diffDays = Math.max(1, diffDays);

            const reqsSnap = await get(child(ref(db), 'requests_2027'));
            let reqs = reqsSnap.exists() ? Object.values(reqsSnap.val()) : [];

            let initialStatus = currentActiveEmployee.fingerprint === '779' ? 'في انتظار موافقة رئيس القسم' : 'في انتظار موافقة المشرف';
            let initialSupName = currentActiveEmployee.fingerprint === '779' ? 'مباشر (استثناء الكود 779)' : '-';

            let newReq = {
                id: 'REQ-' + Math.floor(1000 + Math.random() * 9000),
                name: currentActiveEmployee.name,
                fingerprint: currentActiveEmployee.fingerprint,
                type: vacType,
                start: startDate,
                end: endDate,
                daysCount: diffDays,
                status: initialStatus,
                supervisorName: initialSupName
            };

            reqs.push(newReq);
            await set(ref(db, 'requests_2027'), reqs);
            alert('تم تقديم الطلب بنجاح سحابياً!');

            document.getElementById('applyForm').reset();
            document.getElementById('employeeInfoBox').style.display = 'none';
            document.getElementById('applyForm').style.display = 'none';
        }

        // استخدام onValue لتحديث البيانات تلقائياً وفورياً لجميع الصفحات والمشرفين دون الحاجة لعمل Refresh
        function initRealtimeListeners() {
            onValue(ref(db, 'employees_2027'), (snapshot) => {
                updateUI();
            });
            onValue(ref(db, 'requests_2027'), (snapshot) => {
                updateUI();
            });
        }

        function renderExecutedLeaves(list) {
            const body = document.getElementById('dashboardExecutedBody');
            if (!body) return;
            const rows = Array.isArray(list) ? list : [];
            body.innerHTML = rows.length === 0
                ? `<tr><td colspan="7" style="text-align:center; color:#64748b;">لا توجد إجازات منفذة مطابقة للبحث</td></tr>`
                : rows.map(r => `<tr><td>${r.id ?? ''}</td><td>${r.name ?? ''}</td><td>${r.fingerprint ?? ''}</td><td>${r.type ?? ''}</td><td>${r.start ?? ''} لـ ${r.end ?? ''}</td><td><b>${r.daysCount ?? 0} يوم</b></td><td><span class="badge badge-s">منفذة</span></td></tr>`).join('');
        }

        window.filterExecutedLeaves = function() {
            const input = document.getElementById('executedLeaveSearch');
            const info = document.getElementById('executedLeaveSearchInfo');
            const q = String(input?.value || '').trim().toLowerCase();
            const all = Array.isArray(window.executedLeavesData) ? window.executedLeavesData : [];
            if (!q) {
                renderExecutedLeaves(all);
                if (info) info.style.display = 'none';
                return;
            }
            const filtered = all.filter(r => [r.fingerprint, r.code, r.employeeCode, r.workerCode]
                .some(v => String(v ?? '').toLowerCase().includes(q)));
            renderExecutedLeaves(filtered);
            if (info) {
                info.style.display = 'block';
                info.textContent = `نتيجة البحث: ${filtered.length} سجل من إجمالي ${all.length}`;
            }
        };

        window.clearExecutedLeaveSearch = function() {
            const input = document.getElementById('executedLeaveSearch');
            if (input) input.value = '';
            const info = document.getElementById('executedLeaveSearchInfo');
            if (info) info.style.display = 'none';
            renderExecutedLeaves(window.executedLeavesData || []);
        };

        async function updateUI() {
            const empsSnap = await get(child(ref(db), 'employees_2027'));
            const reqsSnap = await get(child(ref(db), 'requests_2027'));

            let emps = empsSnap.exists() ? empsSnap.val() : [];
            let reqs = reqsSnap.exists() ? Object.values(reqsSnap.val()) : [];

            document.getElementById('statEmp').innerText = emps.length;
            document.getElementById('statPending').innerText = reqs.filter(r => r.status.includes('انتظار')).length;
            document.getElementById('statApproved').innerText = reqs.filter(r => r.status === 'معتمد').length;
            document.getElementById('statExecuted').innerText = reqs.filter(r => r.status === 'تم تنفيذ الإجازة').length;
            document.getElementById('statRejected').innerText = reqs.filter(r => r.status.includes('مرفوض')).length;

            let dashExecBody = document.getElementById('dashboardExecutedBody');
            let executedReqs = reqs.filter(r => r.status === 'تم تنفيذ الإجازة');
            window.executedLeavesData = executedReqs;
            renderExecutedLeaves(executedReqs);

            let dashRejBody = document.getElementById('dashboardRejectedBody');
            let rejectedReqs = reqs.filter(r => r.status.includes('مرفوض'));
            dashRejBody.innerHTML = rejectedReqs.length === 0 ? `<tr><td colspan="7" style="text-align: center; color: #64748b;">لا توجد طلبات مرفوضة</td></tr>` : '';
            rejectedReqs.forEach(r => {
                dashRejBody.innerHTML += `<tr><td>${r.id}</td><td>${r.name}</td><td>${r.fingerprint}</td><td>${r.type}</td><td>${r.start} لـ ${r.end}</td><td><b>${r.daysCount} يوم</b></td><td><span class="badge badge-r">${r.status}</span></td></tr>`;
            });

            let supBody = document.getElementById('supTableBody');
            supBody.innerHTML = '';
            let pendingSup = reqs.map((r, index) => ({...r, originalIndex: index})).filter(r => r.status === 'في انتظار موافقة المشرف');
            if (pendingSup.length === 0) supBody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: #64748b;">لا توجد طلبات معلقة للمشرف</td></tr>`;
            pendingSup.forEach(r => {
                let supervisorOptions = SUPERVISORS_LIST.map(name => `<option value="${name}">${name}</option>`).join('');
                supBody.innerHTML += `<tr><td>${r.id}</td><td>${r.name}</td><td>${r.fingerprint}</td><td>${r.type}</td><td>${r.start} لـ ${r.end}</td><td><b>${r.daysCount} يوم</b></td><td><span class="badge badge-p">${r.status}</span></td><td><div style="display:flex; flex-direction:column; gap:5px;"><select id="supSelect-${r.originalIndex}"><option value="">اختر المشرف...</option>${supervisorOptions}</select><div style="display:flex; gap:5px;"><button class="btn btn-success" onclick="supAction(${r.originalIndex}, 'approve')">موافقة</button><button class="btn btn-danger" onclick="supAction(${r.originalIndex}, 'reject')">رفض</button></div></div></td></tr>`;
            });

            let deptBody = document.getElementById('deptTableBody');
            deptBody.innerHTML = '';
            let pendingDept = reqs.map((r, index) => ({...r, originalIndex: index})).filter(r => r.status === 'في انتظار موافقة رئيس القسم');
            if (pendingDept.length === 0) deptBody.innerHTML = `<tr><td colspan="8" style="text-align: center; color: #64748b;">لا توجد طلبات لرئيس القسم</td></tr>`;
            pendingDept.forEach(r => {
                deptBody.innerHTML += `<tr><td>${r.id}</td><td>${r.name}</td><td>${r.fingerprint}</td><td>${r.type}</td><td>${r.start} لـ ${r.end}</td><td><b>${r.daysCount} يوم</b></td><td><span class="badge badge-p">بواسطة مشرف: ${r.supervisorName}</span></td><td><button class="btn btn-success" onclick="deptAction(${r.originalIndex}, 'approve')">اعتماد</button> <button class="btn btn-danger" onclick="deptAction(${r.originalIndex}, 'reject')">رفض</button></td></tr>`;
            });

            let appBody = document.getElementById('approvedTableBody');
            appBody.innerHTML = '';
            let activeList = reqs.map((r, index) => ({...r, originalIndex: index})).filter(r => r.status === 'معتمد' || r.status === 'تم تنفيذ الإجازة' || r.status.includes('مرفوض'));
            if (activeList.length === 0) appBody.innerHTML = `<tr><td colspan="7" style="text-align: center; color: #64748b;">لا توجد سجلات</td></tr>`;
            activeList.forEach(r => {
                let isDone = r.status === 'تم تنفيذ الإجازة';
                let isRejected = r.status.includes('مرفوض');
                appBody.innerHTML += `<tr><td>${r.id}</td><td>${r.name}</td><td>${r.type}</td><td>${r.start} لـ ${r.end}</td><td><b>${r.daysCount} يوم</b></td><td><span class="badge ${isDone?'badge-s':(isRejected?'badge-r':'badge-p')}">${r.status}</span></td><td>${!isDone && !isRejected ? `<button class="btn btn-success" onclick="executeVac(${r.originalIndex})">تنفيذ وخصم</button> ` : ''}<button class="btn btn-danger" onclick="deleteRequest(${r.originalIndex})">حذف</button></td></tr>`;
            });

            let empBody = document.getElementById('empTableBody');
            empBody.innerHTML = '';
            emps.forEach(e => {
                empBody.innerHTML += `<tr>
                    <td>${e.fingerprint}</td>
                    <td>${e.name}</td>
                    <td>${e.dept}</td>
                    <td><input type="number" value="${e.totalBalance}" style="width: 100px; padding: 5px; font-weight: bold;" onchange="updateTotalBalance('${e.fingerprint}', this.value)"> يوم</td>
                    <td><input type="number" min="0" value="${e.carriedBalance}" style="width: 100px; padding: 5px;" onchange="updateCarriedBalance('${e.fingerprint}', this.value)"></td>
                </tr>`;
            });
        }

        window.supAction = async function(i, action) {
            let selectedSup = document.getElementById(`supSelect-${i}`).value;
            if (!selectedSup) { alert('اختر اسم المشرف أولاً!'); return; }
            const reqsSnap = await get(child(ref(db), 'requests_2027'));
            let reqs = reqsSnap.val();
            reqs[i].supervisorName = selectedSup;
            reqs[i].status = action === 'approve' ? 'في انتظار موافقة رئيس القسم' : `مرفوض من المشرف (${selectedSup})`;
            await set(ref(db, 'requests_2027'), reqs);
        }

        window.deptAction = async function(i, action) {
            const reqsSnap = await get(child(ref(db), 'requests_2027'));
            let reqs = reqsSnap.val();
            reqs[i].status = action === 'approve' ? 'معتمد' : 'مرفوض من رئيس القسم';
            await set(ref(db, 'requests_2027'), reqs);
        }

        window.executeVac = async function(i) {
            const reqsSnap = await get(child(ref(db), 'requests_2027'));
            const empsSnap = await get(child(ref(db), 'employees_2027'));
            let reqs = reqsSnap.val();
            let emps = empsSnap.val();
            let req = reqs[i];

            let emp = emps.find(e => e.fingerprint === req.fingerprint);
            if (emp) {
                let days = req.daysCount || 0;
                if (!['إذن ساعتين', 'إجازة زواج', 'إجازة وفاة', 'إجازة مرضية'].includes(req.type) && days > 0) {
                    if (emp.totalBalance >= days) {
                        emp.totalBalance -= days;
                    } else {
                        alert('الرصيد لا يكفي للخصم!');
                        return;
                    }
                }
                await set(ref(db, 'employees_2027'), emps);
            }

            reqs[i].status = 'تم تنفيذ الإجازة';
            await set(ref(db, 'requests_2027'), reqs);
            alert('تم التنفيذ بنجاح وتحديث الرصيد سحابياً!');
        }

        window.deleteRequest = async function(i) {
            if (!confirm('هل أنت متأكد من الحذف؟')) return;
            const reqsSnap = await get(child(ref(db), 'requests_2027'));
            const empsSnap = await get(child(ref(db), 'employees_2027'));
            let reqs = reqsSnap.val();
            let emps = empsSnap.val();
            let req = reqs[i];

            if (req.status === 'تم تنفيذ الإجازة' && !['إذن ساعتين', 'إجازة زواج', 'إجازة وفاة', 'إجازة مرضية'].includes(req.type) && req.daysCount > 0) {
                let emp = emps.find(e => e.fingerprint === req.fingerprint);
                if (emp) {
                    emp.totalBalance += req.daysCount;
                    await set(ref(db, 'employees_2027'), emps);
                }
            }

            reqs.splice(i, 1);
            await set(ref(db, 'requests_2027'), reqs);
            alert('تم الحذف بنجاح.');
        }

        window.resetApprovedRejectedLeaves = async function() {
            if (!confirm('⚠️ سيتم حذف جميع الإجازات المعتمدة والمنفذة والمرفوضة نهائياً، مع الإبقاء على الطلبات المعلقة. هل تريد المتابعة؟')) return;

            const reqsSnap = await get(child(ref(db), 'requests_2027'));
            if (!reqsSnap.exists()) {
                alert('لا توجد سجلات إجازات للحذف.');
                return;
            }

            const reqs = Object.values(reqsSnap.val());
            const remaining = reqs.filter(r => {
                const status = String(r.status || '');
                return status !== 'معتمد' && status !== 'تم تنفيذ الإجازة' && !status.includes('مرفوض');
            });

            const deletedCount = reqs.length - remaining.length;
            if (deletedCount === 0) {
                alert('لا توجد إجازات معتمدة أو منفذة أو مرفوضة لتصفيرها.');
                return;
            }

            await set(ref(db, 'requests_2027'), remaining);
            alert(`تم تصفير السجل بنجاح وحذف ${deletedCount} طلب/طلبات. الطلبات المعلقة لم تتأثر.`);
        }

        checkAndInitDB();
