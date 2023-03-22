const toggleBtn = document.querySelector('#toggle-btn');
const navSide = document.querySelector('.nav-side');
const navTxt = document.querySelectorAll('.data-items');
const  pagesLis = document.querySelectorAll('.pages li');
const logout = document.querySelector('.logout');

toggleBtn.addEventListener('click',()=>{
    navSide.classList.toggle('shrink') 
    pagesLis.forEach((li)=>{
        li.classList.toggle('shrink-li');
        li.classList.toggle('left-text');
    })
    logout.classList.toggle('left-text')
    navTxt.forEach((txt)=>{
        txt.classList.toggle('show-name')
    })
    if(window.innerWidth <= 500){
        navSide.classList.toggle('show-sm')
    }
})

