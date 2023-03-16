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

