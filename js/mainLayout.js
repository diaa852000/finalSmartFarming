let toggleBtn = document.querySelector('#toggle-btn');
let navSide = document.querySelector('.nav-side');
let navTxt = document.querySelectorAll('.data-items');
let  pagesLis = document.querySelectorAll('.pages li');
let logout = document.querySelector('.logout');

// toggleBtn.addEventListener('click',()=>{
//     navSide.classList.toggle('shrink') 
//     pagesLis.forEach((li)=>{
//         li.classList.toggle('shrink-li');
//         li.classList.toggle('left-text');
//     })
//     logout.classList.toggle('logout')
//     navTxt.forEach((txt)=>{
//         txt.classList.toggle('hide-name')
//     })
//     if(window.innerWidth <= 500){
//         navSide.classList.toggle('show-sm')
//     }
// })



toggleBtn.onclick = ()=>{
    navSide.classList.toggle('shrink') 
    pagesLis.forEach((li)=>{
        li.classList.toggle('shrink-li');
        li.classList.toggle('left-text');
    })
    logout.classList.toggle('logout')
    navTxt.forEach((txt)=>{
        txt.classList.toggle('hide-name')
    })
    if(window.innerWidth <= 500){
        navSide.classList.toggle('show-sm')
    }
}

// pagesLis.forEach((li)=>{
//     li.addEventListener('click', (e)=>{
//         pagesLis.forEach((li)=>{
//             li.classList.remove('active');
//         })
//         e.currentTarget.classList.add('active')
//     })
// })

pagesLis.forEach((li)=>{
    li.onclick = function() {
        pagesLis.forEach((li)=>{
            li.classList.remove('active');
        })
        this.classList.add('active');
    };
});