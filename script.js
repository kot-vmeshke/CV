
const menuButton = document.querySelector('.menu-adaptive');
const nav = document.querySelector('.nav');
const menu = document.querySelector('.header-nav-list');
const menuLink = document.querySelectorAll('.header-nav-link');

menuButton.addEventListener('click', () => {
    nav.style.display = 'block';
    nav.classList.add('adaptive');
    menu.classList.add('nav-adaptive');
})

for (let i = 0; i < menuLink.length; i++) {
    menuLink[i].addEventListener('click', () => {
        nav.style.display = 'none';
    })
}
document.addEventListener('click', (event) => {
    if (!event.target.classList.contains('header-nav-list') && !event.target.classList.contains('menu-adaptive')) {
        nav.style.display = 'none';
        console.log(event.target);
    }
})
