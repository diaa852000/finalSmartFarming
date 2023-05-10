const record = document.querySelector('#record');
const addRecord = document.querySelector('#add-record');
const tableBodyRecords = document.querySelector('.table-comp-body');

console.log(tableBodyRecords)
console.log(record)
console.log(addRecord);


function AddRecord(){
    let newRecord = record.cloneNode(true)
    tableBodyRecords.appendChild(newRecord);
}
