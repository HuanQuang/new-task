const menuBtn = document.querySelector('.menuBtn')
const closeBtn = document.querySelector('.fa-xmark')
const menu = document.querySelector('.header__nav')

menuBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(0)'
})
closeBtn.addEventListener('click', () => {
    menu.style.transform = 'translateX(100%)'
    
})