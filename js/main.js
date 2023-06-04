const burgerIcon = document.querySelector('.header__burger-icon');
const asideIcon = document.querySelector('.aside__button');
const header = document.querySelector('.header');
const headerTop = document.querySelector('.header__top__lang'); // select the parent element
const languages = headerTop.querySelectorAll('.header__top-en, .header__top-ru, .header__top-kg'); // select all language elements

const search = document.querySelector('.header__top__search');
const langs = document.querySelector('.header__top__lang');
const searchClose = document.querySelector('.header__top-close');
const langOpen = document.querySelector('.header__top-open');



const faqBox = document.querySelectorAll(".faqPage__box");
faqBox.forEach((box) => {
    box.addEventListener("click", () => {
        box.classList.toggle("active");
    });
});

searchClose.addEventListener('click', e => {
    e.preventDefault();
    search.classList.remove('active');
    langs.classList.add('active');
});

langOpen.addEventListener('click', e => {
    e.preventDefault();
    langs.classList.remove('active');
    search.classList.add('active');
});

languages.forEach(language => {
    language.addEventListener('click', function () {
        languages.forEach(lang => lang.classList.remove('active')); // remove active class from all language elements
        this.classList.add('active'); // add active class to the clicked language element
    });
});


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