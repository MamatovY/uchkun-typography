const swiper = new Swiper(".galleryPage__swiper", {
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
    },
    mousewhell: true,
    keyboard: true,
    loop: true,
    loopAdditionalSlides: 1,
    autoplay: {
        delay: 5000, // Задержка между автоматическими свайпами в миллисекундах
        disableOnInteraction: true, // Автоматический свайп будет продолжаться после взаимодействия пользователя
    },
})