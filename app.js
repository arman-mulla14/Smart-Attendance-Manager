// --- Configuration: List of students (roll numbers or names) ---
let students = Array.from({length: 130}, (_, i) => (i + 1).toString());
// Optional names for rolls. Add here, e.g., {'1': 'Arman'} to show after roll
let studentNames = {
  '1': 'ADAKE PARAS RAHUL',
  '2': 'ADAKE SOURABH SADASHIV',
  '3': 'AMBEKARI SANIYA ISAK',
  '4': 'ATKIRE SNEHAL SUSHANT',
  '5': 'BARAWADE GOURI SURESH',
  '6': 'BAUCHKAR VAISHNAVI BABASAHEB',
  '7': 'BELKAR SUSMITA JANARDAN',
  '8': 'BHOSALE DIKSHA TANAJI',
  '9': 'CHILE AKANKSHA ANNADA',
  '10': 'CHOUGALE RAVJARDHAN BAJIRAO',
  '11': 'CHOUGALE SANCHI NILESH',
  '12': 'DABHOLE SUNIL SAMADHAN',
  '13': 'DABHOLKAR SALONI NAMDEV',
  '14': 'DESHMUKHAPATIL VEDA SANJAY',
  '15': 'DIVASE PRATIKSHA PADHARINATH',
  '16': 'DONGALE ADARSHA SAYAJI',
  '17': 'DUBAL AARTI ARJUN',
  '18': 'DUPADE ROHINI RAJENDRA',
  '19': 'GAVADE RAVINDRA NILAKANTH',
  '20': 'GHATAGE SONALI SHASHIKANT',
  '21': 'GHODE SANGRAM TANAJI',
  '22': 'GHOTANE VRUSHALI VASANT',
  '23': 'GONDKAR RUTUJA DINESH',
  '24': 'GURAV ROHAN RANJIT',
  '25': 'HALINGALE SANIKA SANJIVKUMAR',
  '26': 'INAMDAR VAISHNAVI AVADHUT',
  '27': 'JADHAV POOJA ARVIND',
  '28': 'JADHAV SAKSHI MANIK',
  '29': 'JADHAV SANIKA PRADEEP',
  '30': 'JADHAV SHIVAM VIJAY',
  '31': 'JADHAV VISHWAVADIT AKHIRAO',
  '32': 'JADHAV VISHWAJEET SANTOSH',
  '33': 'JOUNJAL ABHIJEET RAMCHANDRA',
  '34': 'KAMBLE DIKSHA DILIP',
  '35': 'KAMBLE VAISHNAVI RAJENDRA',
  '36': 'KARAPE MADHURI CHANDRAKANT',
  '37': 'KHADE SAMRUDDHI KRISHNATH',
  '38': 'KHARADE SHRENIKA SHARAD',
  '39': 'KHOT PRAJAKTA VIJAY',
  '40': 'KOKIL SHWETA SACHIN',
  '41': 'KOKATE NIKHIL VIKAS',
  '42': 'KOLHAPUR SHRVANI GAJANAN',
  '43': 'KOLI BHAKTI PRAKASH',
  '44': 'KOLI SANIKA SUNIL',
  '45': 'KORE JANHAVI VIJAY',
  '46': 'KORI ROHINI KALAPPA',
  '47': 'KULKARNI MANASVI SANJAY',
  '48': 'KUMBHAR SHRUTI DHONDIRAM',
  '49': 'KURANE AKANKSHA MARUTI',
  '50': 'LAD SWAPNALI SURESH',
  '51': 'LOHAR PURVA MAHADEV',
  '52': 'LOKARE ASHA PANDITRAO',
  '53': 'LOTEKAR SANKET KRISHNAJI',
  '54': 'MAGAR MRUNAL UMESH',
  '55': 'MALI OMAKAR MAHADEV',
  '56': 'MALI SHRUTIKA BALASO',
  '57': 'MANE AKANKSHA SUNIL',
  '58': 'MANE KETAN BALASO',
  '59': 'MANE SANIKA AVINASH',
  '60': 'MANE SANIKA JOTIRAM',
  '61': 'MANE SANIKA PRADEEP',
  '62': 'MANE SATYAJEEt SANJAY',
  '63': 'MANE SHREYASH SUNIL',
  '64': 'MANE VAISHNAVI RAMHARI',
  '65': 'METHE VAISHNAVI RAJENDRA',
  '66': 'MOHITE RUTUJA JAYKAR',
  '67': 'MOHITE SAKSHI RAJENDRA',
  '68': 'MORE TANVI PRAKASH',
  '69': 'MULLA ARMAN BASHIR',
  '70': 'MULLA KASHISH SHAKIL',
  '71': 'NADAF MUSKAN IMAMHUSEN',
  '72': 'NAIK PARIKSHIT PRAKASH',
  '73': 'NIKAM VAISHNAVI RAJENDRA',
  '74': 'PARALE SIDDHI KUMAR',
  '75': 'PASARE SUMIT RAJENDRA',
  '76': 'PATIL AKSHADA DATTATRAY',
  '77': 'PATIL AKSHATA SUKUMAR',
  '78': 'PATIL ANKITA VYUKA',
  '79': 'PATIL APARNA SHASHIKANT',
  '80': 'PATIL DHANASHRI ANKADRAO',
  '81': 'PATIL HARSHADA SAKHARAM',
  '82': 'PATIL JAYDEEP DAYANAND',
  '83': 'PATIL NISHA NAMDEV',
  '84': 'PATIL PRACHI ARVIND',
  '85': 'PATIL PRANITA RAJENDRA',
  '86': 'PATIL PRASAD MARUTI',
  '87': 'PATIL PUJA ANANDA',
  '88': 'PATIL RITESH RAJENDRA',
  '89': 'PATIL SAHIL SAJAN',
  '90': 'PATIL SAI VIKRAM',
  '91': 'PATIL SAKSHI SANTOSH',
  '92': 'PATIL SAKSHI SHAHAJI',
  '93': 'PATIL SANDHYARANI PRAKASH',
  '94': 'PATIL SANIKA MAHENDRA',
  '95': 'PATIL SANIKA SANJAY',
  '96': 'PATIL SHIVANI RAJSHEKHAR',
  '97': 'PATIL SHRADDHA SADASHIV',
  '98': 'PATIL SHREYA JAYSING',
  '99': 'PATIL SHREYA MAHAVIR',
  '100': 'PATIL SUYASH PRAKASH',
  '101': 'PATIL TEJASWINI VIJAY',
  '102': 'PATIL TRUPTI SANJAY',
  '103': 'PATSUPE ARATI KUMAR',
  '104': 'PAWAR ANKITA MOHAN',
  '105': 'PAWAR DARSHANA KRUSHNAJI',
  '106': 'PAWAR HARSHADA SANJAY',
  '107': 'PHALLE PRANOTI PRADIPKUMAR',
  '108': 'RANDIVE MRUDULA MAHADEV',
  '109': 'SALUNKHE ADITYA CHANDRASHEKHAR',
  '110': 'SALUNKHE PRIYANKA BABURAO',
  '111': 'SALUNKHE SHWETA VIJAYKUMAR',
  '112': 'SANGAVADEKAR SHREYA DEEPAK',
  '113': 'SARATE SHARVARI UMESH',
  '114': 'SASANE TUSHAR SAMBHAJI',
  '115': 'SAVANT PRATIK SHANKAR',
  '116': 'SAWANT YOGITA PARASHRAM',
  '117': 'SHAH MAITHILI MANOJ',
  '118': 'SHINDE BHAGYAT NIVAS',
  '119': 'SHINDE PRATIKSHA BHAGAWAN',
  '120': 'SONAVANE ABHIJEET SAWANT',
  '121': 'SUTAR NETRA NAMDEV',
  '122': 'SUTAR POOJA DADASO',
  '123': 'SUTAR SANJYOT DADASO',
  '124': 'TAMBEKAR TRUPTI SAGAR',
  '125': 'THOMBARE RUTUJA ASHOK',
  '126': 'TIKKA RAVINA DASHRATH',
  '127': 'TIKKA SONAM DUNDLIK',
  '128': 'UTHALE SANIYA SUBHASH',
  '129': 'VHATAKAR RITESH ARUN',
  '130': 'ZIRKANDE HARSH SHARAD'
};

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

// --- Present/Absent filter toggles (top bar checkboxes) ---
let showPresentFilter = true;
let showAbsentFilter = true;
const presentToggleEl = document.getElementById('toggle-present');
const absentToggleEl = document.getElementById('toggle-absent');
if (presentToggleEl) {
  showPresentFilter = !!presentToggleEl.checked;
  presentToggleEl.addEventListener('change', (e) => {
    showPresentFilter = !!e.target.checked;
    renderList();
  });
}
if (absentToggleEl) {
  showAbsentFilter = !!absentToggleEl.checked;
  absentToggleEl.addEventListener('change', (e) => {
    showAbsentFilter = !!e.target.checked;
    renderList();
  });
}
const isAutoHideOn = () => true; // Always auto-hide after marking present

// Checkbox: Show all students (next to Present/Absent)
const showAllStudentsToggle = document.getElementById('toggle-show-all-students');
if (showAllStudentsToggle && !showAllStudentsToggle._wired) {
  showAllStudentsToggle._wired = true;
  showAllStudentsToggle.addEventListener('change', () => {
    if (showAllStudentsToggle.checked) {
      // Turn off "Show marked students" and enable both filters
      showMarked = false;
      updateShowMarkedToggle();
      showPresentFilter = true;
      showAbsentFilter = true;
      if (presentToggleEl) presentToggleEl.checked = true;
      if (absentToggleEl) absentToggleEl.checked = true;
    }
    renderList();
  });
}

// If user toggles Present/Absent or Show Marked, uncheck Show all students
if (presentToggleEl) {
  presentToggleEl.addEventListener('change', () => {
    const el = document.getElementById('toggle-show-all-students');
    if (el) el.checked = false;
  });
}
if (absentToggleEl) {
  absentToggleEl.addEventListener('change', () => {
    const el = document.getElementById('toggle-show-all-students');
    if (el) el.checked = false;
  });
}
document.addEventListener('change', (e) => {
  if (e.target && e.target.id === 'show-marked-toggle') {
    const el = document.getElementById('toggle-show-all-students');
    if (el) el.checked = false;
  }
});

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

  // Ensure attendance summary bar exists (shows counts of present/absent)
  let attSummary = document.getElementById('attendance-summary');
  if (!attSummary) {
    attSummary = document.createElement('div');
    attSummary.id = 'attendance-summary';
    attSummary.style.margin = '0.4rem 1.2rem 0.2rem 1.2rem';
    attSummary.style.background = '#fff';
    attSummary.style.borderRadius = '12px';
    attSummary.style.boxShadow = '0 1px 6px rgba(44,62,80,0.04)';
    attSummary.style.padding = '0.6rem 0.9rem';
    attSummary.style.fontSize = '0.98rem';
    studentList.parentNode.insertBefore(attSummary, studentList);
  }
  students.forEach(roll => {
    const status = attendance[roll];
    // If toggle is ON, show only marked (Present)
    if (showMarked && status !== 'Present') {
      return;
    }
    // Apply Present/Absent filters (treat non-Present as Absent/Unmarked)
    if (!showMarked) {
      if (status === 'Present' && !showPresentFilter) return;
      if (status !== 'Present' && !showAbsentFilter) return;
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
    // Name appears after the circle
    const nameSpan = document.createElement('span');
    if (studentNames[roll]) {
      nameSpan.textContent = ' ' + studentNames[roll];
      nameSpan.className = 'student-name';
      nameSpan.style.marginLeft = '0.5rem';
    }
    // Button
    const btnGroup = document.createElement('div');
    btnGroup.className = 'btn-group';
    if (status === 'Unmarked') {
      const presentBtn = document.createElement('button');
      presentBtn.className = 'mark-btn present';
      presentBtn.textContent = 'Present';
      presentBtn.onclick = (e) => {
        attendance[roll] = 'Present';
        // If auto-hide is on, hide marked by unchecking Present filter
        if (isAutoHideOn()) {
          showPresentFilter = false;
          if (presentToggleEl) presentToggleEl.checked = false;
        }
        renderList();
      };
      btnGroup.appendChild(presentBtn);
    } else if (status === 'Present') {
      const undoBtn = document.createElement('button');
      undoBtn.className = 'mark-btn';
      undoBtn.textContent = 'Unmark';
      undoBtn.onclick = () => {
        attendance[roll] = 'Unmarked';
        if (isAutoHideOn()) {
          // When unmarking, ensure Present filter is visible again
          showPresentFilter = true;
          if (presentToggleEl) presentToggleEl.checked = true;
        }
        renderList();
      };
      btnGroup.appendChild(undoBtn);
    }
    // Layout
    const left = document.createElement('div');
    left.style.display = 'flex';
    left.style.alignItems = 'center';
    left.appendChild(rollSpan);
    left.appendChild(dot);
    if (studentNames[roll]) left.appendChild(nameSpan);
    card.appendChild(left);
    card.appendChild(btnGroup);
    studentList.appendChild(card);
  });

  // Update attendance summary counts
  const totalPresent = students.reduce((acc, roll) => acc + (attendance[roll] === 'Present' ? 1 : 0), 0);
  const totalStudents = students.length;
  const totalAbsent = totalStudents - totalPresent;
  attSummary.innerHTML = `<strong>Present:</strong> ${totalPresent} &nbsp; | &nbsp; <strong>Absent:</strong> ${totalAbsent} &nbsp; | &nbsp; <strong>Total:</strong> ${totalStudents}`;
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
    students: [...students],
    names: { ...studentNames }
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
    students: [...students],
    names: { ...studentNames }
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
    students: [...students],
    names: { ...studentNames }
  };
  saveRecord(record);
  downloadPresentOnly(record);
  document.getElementById('message').textContent = 'Present students downloaded and backed up!';
  setTimeout(() => {
    document.getElementById('message').textContent = '';
  }, 2000);
};

// --- Excel export utilities (mobile-friendly .xls) ---
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

function rowsToExcelBlob(rows) {
  const tableRowsHtml = rows
    .map(row => `<tr>${row.map(cell => `<td>${escapeHtml(cell)}</td>`).join('')}</tr>`) 
    .join('');
  const html = `<!DOCTYPE html><html><head><meta charset="UTF-8" />
  <!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet>
  <x:Name>Sheet1</x:Name><x:WorksheetOptions><x:DisplayGridlines/>
  </x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]-->
  </head><body><table>${tableRowsHtml}</table></body></html>`;
  return new Blob([html], { type: 'application/vnd.ms-excel' });
}

function downloadBlob(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function downloadPresentOnly(record) {
  const rows = [['Roll Number', 'Name', 'Status']];
  record.students.forEach(roll => {
    const status = record.data[roll];
    if (status === 'Present') {
      const nameVal = (record.names && record.names[roll]) || '';
      rows.push([roll, nameVal, status]);
    }
  });
  const now = new Date();
  const dateStr = getTodayDateStr();
  const timeStr = now.toTimeString().slice(0,5).replace(/:/g, '-');
  const filename = `mca-1_${dateStr}_${timeStr}.xls`;
  const blob = rowsToExcelBlob(rows);
  downloadBlob(blob, filename);
}

function downloadCSV(record) {
  const rows = [['Roll Number', 'Name', 'Status']];
  record.students.forEach(roll => {
    const status = record.data[roll];
    if (status === 'Present') {
      const nameVal = (record.names && record.names[roll]) || '';
      rows.push([roll, nameVal, status]);
    }
  });
  const dateStr = getTodayDateStr();
  const now = new Date();
  const timeStr = now.toTimeString().slice(0,5).replace(/:/g, '-');
  const filename = `mca-1_${dateStr}_${timeStr}.xls`;
  const blob = rowsToExcelBlob(rows);
  downloadBlob(blob, filename);
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
    filterBar.querySelector('#filter-month').addEventListener('change', () => {
      const showAllToggle = document.getElementById('toggle-show-all-records');
      if (showAllToggle) showAllToggle.checked = false;
      renderRecords();
    });
    filterBar.querySelector('#filter-year').addEventListener('change', () => {
      const showAllToggle = document.getElementById('toggle-show-all-records');
      if (showAllToggle) showAllToggle.checked = false;
      renderRecords();
    });
  }
  // Hook up the Show all records checkbox
  const showAllToggle = document.getElementById('toggle-show-all-records');
  if (showAllToggle && !showAllToggle._wired) {
    showAllToggle._wired = true;
    showAllToggle.addEventListener('change', () => {
      const mSel = document.getElementById('filter-month');
      const ySel = document.getElementById('filter-year');
      if (showAllToggle.checked) {
        if (mSel) mSel.value = 'All';
        if (ySel) ySel.value = 'All';
      }
      renderRecords();
    });
  }
  // Get selected month/year (or override with Show all toggle)
  const showAllChecked = document.getElementById('toggle-show-all-records')?.checked;
  const selectedMonth = showAllChecked ? 'All' : (document.getElementById('filter-month')?.value || 'All');
  const selectedYear = showAllChecked ? 'All' : (document.getElementById('filter-year')?.value || 'All');
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
  // Summary totals for currently displayed records
  let summaryBar = document.getElementById('records-summary');
  if (!summaryBar) {
    summaryBar = document.createElement('div');
    summaryBar.id = 'records-summary';
    summaryBar.style.display = 'flex';
    summaryBar.style.justifyContent = 'space-between';
    summaryBar.style.alignItems = 'center';
    summaryBar.style.margin = '0.6rem 1.2rem';
    summaryBar.style.padding = '0.6rem 0.9rem';
    summaryBar.style.background = '#fff';
    summaryBar.style.borderRadius = '12px';
    summaryBar.style.boxShadow = '0 1px 6px rgba(44,62,80,0.04)';
    recordsPage.insertBefore(summaryBar, recordsList);
  }
  let totalPresent = 0;
  let totalAbsent = 0;
  sortedRecords.forEach(record => {
    record.students.forEach(roll => {
      const isPresent = record.data[roll] === 'Present';
      if (isPresent) totalPresent += 1; else totalAbsent += 1;
    });
  });
  summaryBar.innerHTML = `<div><strong>Total records:</strong> ${sortedRecords.length}</div><div><strong>Total presents:</strong> ${totalPresent}</div><div><strong>Total absents:</strong> ${totalAbsent}</div>`;
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
  html += '<tr><th style="text-align:left;padding:4px 8px;">Roll Number</th><th style="text-align:left;padding:4px 8px;">Name</th><th style="text-align:left;padding:4px 8px;">Status</th></tr>';
  record.students.forEach(roll => {
    if (record.data[roll] === 'Present') {
      const nameVal = (record.names && record.names[roll]) || '';
      html += `<tr><td style='padding:4px 8px;'>${roll}</td><td style='padding:4px 8px;'>${nameVal}</td><td style='padding:4px 8px;'>${record.data[roll]}</td></tr>`;
    }
  });
  html += '</table>';
  details.innerHTML = html;
  details.scrollIntoView({ behavior: 'smooth' });
}