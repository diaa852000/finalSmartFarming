const signUpBtn = document.querySelector('#sign-up');
const signInBtn = document.querySelector('#sign-in');
const main = document.querySelector('#main');

signUpBtn.addEventListener('click', ()=>{
    main.classList.add('right-panel-active');
});

signInBtn.addEventListener('click', ()=>{
    main.classList.remove('right-panel-active')
});