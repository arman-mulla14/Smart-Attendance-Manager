// Utility: Consistent date formatting (MM-DD-YYYY)
function getTodayDateStr() {
  const now = new Date();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  const dd = String(now.getDate()).padStart(2, '0');
  const yyyy = now.getFullYear();
  return `${mm}-${dd}-${yyyy}`;
}

function getRecords() {
  return JSON.parse(localStorage.getItem('attendanceRecords') || '[]');
}
function saveRecords(records) {
  localStorage.setItem('attendanceRecords', JSON.stringify(records));
}

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

function renderRecords() {
  const records = getRecords();
  const recordsList = document.getElementById('records-list');
  recordsList.innerHTML = '';
  if (records.length === 0) {
    recordsList.innerHTML = '<div style="text-align:center;color:#888;padding:2rem 0;">No attendance records yet.</div>';
    return;
  }
  records.forEach((record, idx) => {
    const card = document.createElement('div');
    card.className = 'record-card';
    const date = document.createElement('span');
    date.className = 'record-date';
    date.textContent = record.date + (record.time ? ' ' + record.time : '');
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
    deleteBtn.onclick = () => {
      if (confirm('Are you sure you want to delete this record?')) {
        const recs = getRecords();
        recs.splice(idx, 1);
        saveRecords(recs);
        renderRecords();
        showPopup('Record deleted!');
      }
    };
    actions.appendChild(viewBtn);
    actions.appendChild(downloadBtn);
    actions.appendChild(deleteBtn);
    card.appendChild(date);
    card.appendChild(actions);
    recordsList.appendChild(card);
  });
}

function showRecordDetails(record) {
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
    document.querySelector('.container').appendChild(details);
  }
  let html = `<h3 style='margin-top:0;'>Present Students for ${record.date}${record.time ? ' ' + record.time : ''}</h3>`;
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

function downloadCSV(record) {
  const rows = [['Roll Number', 'Status']];
  record.students.forEach(roll => {
    const status = record.data[roll];
    if (status === 'Present') {
      rows.push([roll, status]);
    }
  });
  const dateStr = record.date;
  const timeStr = record.time ? record.time.replace(/:/g, '-') : '00-00';
  const filename = `mca-1_${dateStr}_${timeStr}.csv`;
  const csv = rows.map(r => r.join(',')).join('\n');
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

// Export all records as one CSV
function exportAllRecords() {
  const records = getRecords();
  let rows = [['Date', 'Time', 'Roll Number', 'Status']];
  records.forEach(record => {
    record.students.forEach(roll => {
      const status = record.data[roll];
      if (status === 'Present') {
        rows.push([record.date, record.time || '', roll, status]);
      }
    });
  });
  if (rows.length === 1) {
    showPopup('No present students to export!');
    return;
  }
  const csv = rows.map(r => r.join(',')).join('\n');
  const filename = `mca-1_all-records_${getTodayDateStr()}.csv`;
  const blob = new Blob([csv], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showPopup('All records exported!');
}

document.getElementById('export-all-btn').onclick = exportAllRecords;

// Initial render
renderRecords();