const burgerIcon = document.querySelector('.header__burger-icon');
const asideIcon = document.querySelector('.aside__button');
const header = document.querySelector('.header');

burgerIcon.addEventListener('click', () => {
    header.classList.toggle('active');
    toggleBodyOverflow(header)
});
const aside = document.querySelector('.aside');

asideIcon.addEventListener('click', () => {
    aside.classList.toggle('active');
    toggleBodyOverflow(aside)
});

function toggleBodyOverflow(component) {
    const isActive = component.classList.contains('active');

    if (isActive) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
}

window.addEventListener('resize', () => {
    const screenWidth = window.innerWidth;

    if (screenWidth > 768) {
        header.classList.remove('active');
        aside.classList.remove('active');
    }
});