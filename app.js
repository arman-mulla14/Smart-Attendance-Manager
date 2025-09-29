// --- Configuration: List of students (roll numbers or names) ---
let students = Array.from({length: 130}, (_, i) => (i + 1).toString());

// --- State: Attendance ---
let attendance = {};
students.forEach(roll => attendance[roll] = 'Unmarked');

// --- Add Roll Feature ---
const addRollInput = document.getElementById('add-roll-input');
const addRollBtn = document.getElementById('add-roll-btn');
addRollBtn.addEventListener('click', () => {
  const val = addRollInput.value.trim();
  if (!val || students.includes(val)) {
    addRollInput.value = '';
    addRollInput.placeholder = val ? 'Already exists!' : 'Enter a roll number';
    setTimeout(() => addRollInput.placeholder = 'Add new roll number...', 1200);
    return;
  }
  students.push(val);
  attendance[val] = 'Unmarked';
  addRollInput.value = '';
  renderList();
});
addRollInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') addRollBtn.click();
});

// --- Navigation ---
const attendancePage = document.getElementById('attendance-page');
const recordsPage = document.getElementById('records-page');
const tabAttendance = document.getElementById('tab-attendance');
const tabRecords = document.getElementById('tab-records');

tabAttendance.addEventListener('click', () => {
  attendancePage.style.display = '';
  recordsPage.style.display = 'none';
  tabAttendance.classList.add('active');
  tabRecords.classList.remove('active');
});
tabRecords.addEventListener('click', () => {
  attendancePage.style.display = 'none';
  recordsPage.style.display = '';
  tabAttendance.classList.remove('active');
  tabRecords.classList.add('active');
  renderRecords();
});

// --- Show Marked Toggle ---
let showMarked = false;
function updateShowMarkedToggle() {
  const bar = document.getElementById('show-marked-bar');
  if (!bar) return;
  bar.querySelector('input').checked = showMarked;
}

// --- Render student list ---
const studentList = document.getElementById('student-list');
function renderList() {
  // Add show marked toggle above list
  let bar = document.getElementById('show-marked-bar');
  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'show-marked-bar';
    bar.style.display = 'flex';
    bar.style.justifyContent = 'flex-end';
    bar.style.margin = '0.5rem 1.2rem 0.2rem 1.2rem';
    bar.innerHTML = `<label style='font-size:1rem;'><input type='checkbox' id='show-marked-toggle' /> Show marked students</label>`;
    studentList.parentNode.insertBefore(bar, studentList);
    bar.querySelector('input').addEventListener('change', e => {
      showMarked = e.target.checked;
      renderList();
    });
  }
  updateShowMarkedToggle();
  studentList.innerHTML = '';
  students.forEach(roll => {
    const status = attendance[roll];
    if (!showMarked && status !== 'Unmarked') {
      return;
    }
    const card = document.createElement('div');
    card.className = 'student-card';
    if (status === 'Present') card.classList.add('present');
    card.setAttribute('data-roll', roll);
    // Card content: roll number left, status dot right, and button
    const rollSpan = document.createElement('span');
    rollSpan.textContent = roll;
    const dot = document.createElement('span');
    dot.className = 'status-dot';
    if (status === 'Present') dot.style.background = '#43e97b';
    else dot.style.background = '#bdbdbd';
    // Button
    const btnGroup = document.createElement('div');
    btnGroup.className = 'btn-group';
    if (status === 'Unmarked') {
      const presentBtn = document.createElement('button');
      presentBtn.className = 'mark-btn present';
      presentBtn.textContent = 'Present';
      presentBtn.onclick = (e) => {
        attendance[roll] = 'Present';
        renderList();
      };
      btnGroup.appendChild(presentBtn);
    }
    // Layout
    const left = document.createElement('div');
    left.style.display = 'flex';
    left.style.alignItems = 'center';
    left.appendChild(rollSpan);
    left.appendChild(dot);
    card.appendChild(left);
    card.appendChild(btnGroup);
    studentList.appendChild(card);
  });
}
renderList();

// --- Utility: Consistent date formatting (MM-DD-YYYY) ---
function getTodayDateStr() {
  const now = new Date();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const yyyy = now.getFullYear();
  return `${mm}-${dd}-${yyyy}`;
}

// --- Save and Load Attendance Records ---
function getRecords() {
  return JSON.parse(localStorage.getItem('attendanceRecords') || '[]');
}
function saveRecord(record) {
  let records = getRecords();
  // Remove any record with the same date
  records = records.filter(r => r.date !== record.date);
  records.push(record);
  localStorage.setItem('attendanceRecords', JSON.stringify(records));
  // If on Records page, re-render
  if (recordsPage.style.display !== 'none') {
    renderRecords();
  }
}
function deleteRecord(index) {
  if (!confirm('Are you sure you want to delete this record?')) return;
  const records = getRecords();
  records.splice(index, 1);
  localStorage.setItem('attendanceRecords', JSON.stringify(records));
  renderRecords();
}

// --- Submit handler ---
function showPopup(msg) {
  const popup = document.getElementById('popup-message');
  popup.textContent = msg;
  popup.classList.add('show');
  setTimeout(() => {
    popup.classList.remove('show');
    setTimeout(() => { popup.style.display = 'none'; }, 300);
  }, 2000);
  popup.style.display = 'block';
}
document.getElementById('submit-btn').addEventListener('click', () => {
  const now = new Date();
  const date = getTodayDateStr();
  const time = now.toTimeString().slice(0,5);
  const record = {
    date,
    time,
    data: { ...attendance },
    students: [...students]
  };
  saveRecord(record);
  showPopup('Record saved!');
  document.getElementById('message').textContent = 'Attendance saved and backed up!';
  setTimeout(() => {
    document.getElementById('message').textContent = '';
  }, 2000);
});

// --- Download as CSV ---
document.getElementById('download-btn').addEventListener('click', () => {
  const now = new Date();
  const date = getTodayDateStr();
  const time = now.toTimeString().slice(0,5);
  const record = {
    date,
    time,
    data: { ...attendance },
    students: [...students]
  };
  saveRecord(record);
  downloadCSV(record);
  document.getElementById('message').textContent = 'Attendance downloaded and backed up!';
  setTimeout(() => {
    document.getElementById('message').textContent = '';
  }, 2000);
});

// Add Download Present button
const actionsDiv = document.querySelector('.actions');
let downloadPresentBtn = document.getElementById('download-present-btn');
if (!downloadPresentBtn) {
  downloadPresentBtn = document.createElement('button');
  downloadPresentBtn.id = 'download-present-btn';
  downloadPresentBtn.className = 'main-btn';
  downloadPresentBtn.textContent = 'Download Present';
  actionsDiv.appendChild(downloadPresentBtn);
}
downloadPresentBtn.onclick = () => {
  const now = new Date();
  const date = getTodayDateStr();
  const time = now.toTimeString().slice(0,5);
  const record = {
    date,
    time,
    data: { ...attendance },
    students: [...students]
  };
  saveRecord(record);
  downloadPresentOnly(record);
  document.getElementById('message').textContent = 'Present students downloaded and backed up!';
  setTimeout(() => {
    document.getElementById('message').textContent = '';
  }, 2000);
};

function downloadPresentOnly(record) {
  const rows = [['Roll Number', 'Status']];
  record.students.forEach(roll => {
    const status = record.data[roll];
    if (status === 'Present') {
      rows.push([roll, status]);
    }
  });
  const csv = rows.map(r => r.join(',')).join('\n');
  const now = new Date();
  const dateStr = getTodayDateStr();
  const timeStr = now.toTimeString().slice(0,5).replace(/:/g, '-');
  const filename = `mca-1_${dateStr}_${timeStr}.csv`;
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function downloadCSV(record) {
  const rows = [['Roll Number', 'Status']];
  record.students.forEach(roll => {
    const status = record.data[roll];
    if (status === 'Present') {
      rows.push([roll, status]);
    }
  });
  const dateStr = getTodayDateStr();
  const now = new Date();
  const timeStr = now.toTimeString().slice(0,5).replace(/:/g, '-');
  const filename = `mca-1_${dateStr}_${timeStr}.csv`;
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

// --- Records Page ---
function renderRecords() {
  const records = getRecords();
  const recordsList = document.getElementById('records-list');
  recordsList.innerHTML = '';

  // --- Month/Year Filter ---
  let filterBar = document.getElementById('records-filter-bar');
  if (!filterBar) {
    filterBar = document.createElement('div');
    filterBar.id = 'records-filter-bar';
    filterBar.style.display = 'flex';
    filterBar.style.justifyContent = 'flex-end';
    filterBar.style.alignItems = 'center';
    filterBar.style.gap = '0.7rem';
    filterBar.style.margin = '1.2rem 1.2rem 0.2rem 1.2rem';
    // Get all years and months from records
    const months = ["All", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"];
    const years = ["All", ...Array.from(new Set(records.map(r => (r.date.split('-')[2])))).sort((a, b) => b - a)];
    filterBar.innerHTML = `
      <label for='filter-month' style='font-size:1rem;'>Month:</label>
      <select id='filter-month' style='font-size:1rem;padding:0.3rem 0.7rem;border-radius:8px;'>
        ${months.map(m => `<option value='${m}'>${m === "All" ? "All" : m}</option>`).join('')}
      </select>
      <label for='filter-year' style='font-size:1rem;'>Year:</label>
      <select id='filter-year' style='font-size:1rem;padding:0.3rem 0.7rem;border-radius:8px;'>
        ${years.map(y => `<option value='${y}'>${y}</option>`).join('')}
      </select>
    `;
    recordsPage.insertBefore(filterBar, recordsList);
    filterBar.querySelector('#filter-month').addEventListener('change', renderRecords);
    filterBar.querySelector('#filter-year').addEventListener('change', renderRecords);
  }
  // Get selected month/year
  const selectedMonth = document.getElementById('filter-month')?.value || 'All';
  const selectedYear = document.getElementById('filter-year')?.value || 'All';
  // Filter records
  let filteredRecords = [...records];
  if (selectedMonth !== 'All') {
    filteredRecords = filteredRecords.filter(r => (r.date.split('-')[0].padStart(2, '0') === selectedMonth));
  }
  if (selectedYear !== 'All') {
    filteredRecords = filteredRecords.filter(r => (r.date.split('-')[2] === selectedYear));
  }

  // --- Sort controls (keep existing sort bar if present) ---
  let sortBar = document.getElementById('records-sort-bar');
  if (!sortBar) {
    sortBar = document.createElement('div');
    sortBar.id = 'records-sort-bar';
    sortBar.style.display = 'flex';
    sortBar.style.justifyContent = 'flex-end';
    sortBar.style.alignItems = 'center';
    sortBar.style.gap = '0.7rem';
    sortBar.style.margin = '0.2rem 1.2rem 0.2rem 1.2rem';
    sortBar.innerHTML = `
      <label for='sort-type' style='font-size:1rem;'>Sort by:</label>
      <select id='sort-type' style='font-size:1rem;padding:0.3rem 0.7rem;border-radius:8px;'>
        <option value='date'>Date (Newest)</option>
        <option value='month'>Month</option>
        <option value='year'>Year</option>
      </select>
    `;
    recordsPage.insertBefore(sortBar, recordsList);
  }
  const sortType = document.getElementById('sort-type')?.value || 'date';
  let sortedRecords = [...filteredRecords];
  if (sortType === 'date') {
    sortedRecords.sort((a, b) => new Date(b.date) - new Date(a.date));
  } else if (sortType === 'month') {
    sortedRecords.sort((a, b) => {
      const [am, ay] = a.date.split('-').slice(0,2).map(Number);
      const [bm, by] = b.date.split('-').slice(0,2).map(Number);
      return by - ay || bm - am;
    });
  } else if (sortType === 'year') {
    sortedRecords.sort((a, b) => {
      const ay = Number(a.date.split('-')[2]);
      const by = Number(b.date.split('-')[2]);
      return by - ay;
    });
  }
  if (sortedRecords.length === 0) {
    recordsList.innerHTML = '<div style="text-align:center;color:#888;padding:2rem 0;">No attendance records for this period.</div>';
    return;
  }
  sortedRecords.forEach((record, idx) => {
    const card = document.createElement('div');
    card.className = 'record-card';
    const date = document.createElement('span');
    date.className = 'record-date';
    date.textContent = record.date;
    const actions = document.createElement('div');
    actions.className = 'record-actions';
    // View button
    const viewBtn = document.createElement('button');
    viewBtn.className = 'icon-btn';
    viewBtn.title = 'View';
    viewBtn.innerHTML = '👁️';
    viewBtn.onclick = () => showRecordDetails(record);
    // Download button
    const downloadBtn = document.createElement('button');
    downloadBtn.className = 'icon-btn';
    downloadBtn.title = 'Download';
    downloadBtn.innerHTML = '⬇️';
    downloadBtn.onclick = () => downloadCSV(record);
    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'icon-btn delete';
    deleteBtn.title = 'Delete';
    deleteBtn.innerHTML = '🗑️';
    deleteBtn.onclick = () => deleteRecord(records.indexOf(record));
    actions.appendChild(viewBtn);
    actions.appendChild(downloadBtn);
    actions.appendChild(deleteBtn);
    card.appendChild(date);
    card.appendChild(actions);
    recordsList.appendChild(card);
  });
  document.getElementById('sort-type').onchange = renderRecords;
}

// --- View Record Details ---
function showRecordDetails(record) {
  // Show below the records list as a simple table
  let details = document.getElementById('record-details');
  if (!details) {
    details = document.createElement('div');
    details.id = 'record-details';
    details.style.margin = '1.2rem';
    details.style.background = '#fff';
    details.style.borderRadius = '12px';
    details.style.boxShadow = '0 1px 6px rgba(44,62,80,0.04)';
    details.style.padding = '1rem';
    details.style.overflowX = 'auto';
    document.getElementById('records-page').appendChild(details);
  }
  let html = `<h3 style='margin-top:0;'>Present Students for ${record.date}</h3>`;
  html += '<table style="width:100%;border-collapse:collapse;font-size:1rem;">';
  html += '<tr><th style="text-align:left;padding:4px 8px;">Roll Number</th><th style="text-align:left;padding:4px 8px;">Status</th></tr>';
  record.students.forEach(roll => {
    if (record.data[roll] === 'Present') {
      html += `<tr><td style='padding:4px 8px;'>${roll}</td><td style='padding:4px 8px;'>${record.data[roll]}</td></tr>`;
    }
  });
  html += '</table>';
  details.innerHTML = html;
  details.scrollIntoView({ behavior: 'smooth' });
}