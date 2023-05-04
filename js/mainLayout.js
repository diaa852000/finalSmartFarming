const toggleBtn = document.querySelector('#toggle-btn');
const navSide = document.querySelector('#nav-side');
const navTxt = document.querySelectorAll('.data-name');
const  pagesLis = document.querySelectorAll('.pages .nav-li');
const pageLayer = document.querySelector('.page-layer');
const body = document.querySelector('body');



function showNav(){
    if(window.innerWidth <= 600){
        pageLayer.classList.toggle('shadow')
        body.classList.toggle('no-scroll');
    }

    navSide.classList.toggle('expand');
    
    let isOpend = navSide.classList.contains('expand');
    toggleBtn.classList = isOpend ? "fa-solid fa-angles-left" : "fa-solid fa-bars";

    pagesLis.forEach(function(li){
        li.classList.toggle('shrink-li');
        li.classList.toggle('left-text');
    }) 
    
    navTxt.forEach(function(txt){
        txt.classList.toggle('hide-name');
    })  
}

function removeNav(){
    if(window.innerWidth <= 600){
        pageLayer.classList.toggle('shadow')
        body.classList.toggle('no-scroll');
    }

    navSide.classList.toggle('expand')
    
    let isOpend = navSide.classList.contains('expand');
    toggleBtn.classList = isOpend ? "fa-solid fa-angles-left" : "fa-solid fa-bars";

    pagesLis.forEach(function(li){
        li.classList.toggle('shrink-li');
        li.classList.toggle('left-text');
    }) 

    navTxt.forEach(function(txt){
        txt.classList.toggle('hide-name');
    })  
}

pagesLis.forEach(function(li){
    li.onclick = function(){
        pagesLis.forEach(function(li){
            li.classList.remove('active');
        })
        this.classList.add('active');
    };
});