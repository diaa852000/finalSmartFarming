const signUpBtn = document.querySelector('#sign-up');
const signInBtn = document.querySelector('#sign-in');
const main = document.querySelector('#main');
const toSignUpBtn = document.querySelector('.txt-sm-signup');
const toSignInBtn =document.querySelector('.back-signin');
const authentcation = document.querySelector('.auth-container')
const signUp = document.querySelector('.sign-up');
const signIn = document.querySelector('.sign-in');

signUpBtn.addEventListener('click', ()=>{
    main.classList.add('right-panel-active');
});

signInBtn.addEventListener('click', ()=>{
    main.classList.remove('right-panel-active')
});

toSignUpBtn.addEventListener('click', ()=>{
    authentcation.classList.add('toggle-auth');
})

toSignInBtn.addEventListener('click', ()=>{
    authentcation.classList.remove('toggle-auth');
})