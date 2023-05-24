const burgerIcon = document.querySelector('.header__burger-icon');
const header = document.querySelector('.header');

burgerIcon.addEventListener('click', () => {
    header.classList.toggle('active');
});

window.addEventListener('resize', () => {
    const screenWidth = window.innerWidth;

    if (screenWidth > 768) {
        header.classList.remove('active');
    }
});