const record = document.querySelector('#record');
const addRecord = document.querySelector('#add-record');
const tableBodyRecords = document.querySelector('.table-comp-body');

function AddRecord(){
    let newRecord = record.cloneNode(true)
    tableBodyRecords.appendChild(newRecord);
}
