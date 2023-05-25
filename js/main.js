const burgerIcon = document.querySelector('.header__burger-icon');
const asideIcon = document.querySelector('.aside__button');
const header = document.querySelector('.header');

burgerIcon.addEventListener('click', () => {
    header.classList.toggle('active');
});
const aside = document.querySelector('.aside');

asideIcon.addEventListener('click', () => {
    aside.classList.toggle('active');
});

window.addEventListener('resize', () => {
    const screenWidth = window.innerWidth;

    if (screenWidth > 768) {
        header.classList.remove('active');
    }
});