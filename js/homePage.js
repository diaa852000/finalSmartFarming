// responsive navbar
const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropDownList = document.querySelector('.dropdown-list');

toggleBtn.onclick = ()=>{
    dropDownList.classList.toggle('open')
    let isOpen = dropDownList.classList.contains('open');
    toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars'
}

// display cards in navlinks
const navItems = document.querySelectorAll(".nav-items li");
const hiddenCard = document.querySelectorAll(".hidden-card");

navItems.forEach((li)=>{
    li.addEventListener('mouseover', ()=>{
        navItems.forEach((li)=>{
            li.nextElementSibling.classList.remove('active')
        })
        li.nextElementSibling.classList.add('active')
    })
    li.addEventListener('mouseleave', ()=>{
        let closeMenu = setTimeout(()=>{
            li.nextElementSibling.classList.remove('active')
        },130)
        li.nextElementSibling.addEventListener('mouseenter', ()=>{
            clearTimeout(closeMenu)
        })
    })
    li.nextElementSibling.addEventListener('mouseleave', ()=>{
        li.nextElementSibling.classList.remove('active')
    })
})

/* Adding a class to the navbar when the user scrolls down 600px. */
window.addEventListener('scroll', ()=>{
    let navbar = document.querySelector(".custom-nav");
    navbar.classList.toggle('sticky-nav', window.scrollY > 200)
})

//motion mobile card


