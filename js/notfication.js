const notfications = document.querySelectorAll('.notfication');



const notficationsContent = document.querySelectorAll('.card .list-group-item');
const notficationsArray = Array.from(notficationsContent);
const deleteBtn = document.querySelectorAll('.icon #delete');
const recentlyMark = document.querySelectorAll('.icon #recently');


// const popupActions = document.querySelectorAll('.popup-actions-btn');
// const unReadNotficationBtn = document.querySelector('#unread-notfication');
// const allNotficationBtn = document.querySelector('#all-notfication');
// const allNotfications = document.querySelectorAll('.notfication')
// const allNotficationsArray = Array.from(allNotfications)
// const unReadPage = document.querySelector('.card .list-group');


notfications.forEach((notfication)=>{
    notfication.onclick = function(){
        notfication.classList.toggle('new-notfication')
    }
})



// const myElement = document.querySelector('.my-element');

// myElement.addEventListener('mouseover', () => {
//   myElement.classList.add('my-class');
// });




// set notficationId for detecte them
// for(let i=0; i< allNotficationsArray.length; i++){
//     _notficationID = i + 1 ;
//    allNotficationsArray[i].setAttribute('notficationID', `${_notficationID}`)
// }

// cerntain that active class applied for one specefic ele at a time.
// actionBtns.forEach(function(btn){
//     btn.onclick = function(){
//         let modal = btn.getAttribute("data-modal");
//         const popupEl = document.getElementById(modal);

//         if (popupEl.classList.contains('active-popup')) {
//             popupEl.classList.remove('active-popup');
//         } else {
//             popupActions.forEach(function(popupAction) {
//                 popupAction.classList.remove('active-popup');
//             });
//             popupEl.classList.add('active-popup');
//         }
//     }
// });

// indecate if the notfication had seen.
// function handleRead(){
//         notficationsArray.forEach((notfication)=>{
//             notfication.addEventListener('click', ()=>{
//             if(notfication.getAttribute('isread') === 'false'){
//                 notfication.setAttribute('isread', 'true');
//             }
//         });
        
//     });
// }


// display unread notfication.
// unReadNotficationBtn.addEventListener('click', ()=>{
//     unReadPage.innerHTML = '';
//     console.log(notficationsArray)
//     let readNotfications = notficationsArray.filter(notfication => notfication.getAttribute('isread') === 'true');
//     console.log(readNotfications)
//     // console.log(Array.from(readNotfications))

//     for(let i; i < Array.from(readNotfications); i++){
//         console.log(readNotfications[i])
//         let createdEL = document.createElement('div');
//         createdEL.append(readNotfications[i]);
//         unReadPage.appendChild(createdEL);
//     }
// })




// handleRead()


