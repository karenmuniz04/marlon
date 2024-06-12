let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-slide');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }

    const carouselContainer = document.querySelector('.carousel-container');
    const slideWidth = slides[0].clientWidth;
    carouselContainer.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}

function changeSlide(step) {
    showSlide(currentSlide + step);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
    document.querySelector('.next').addEventListener('click', () => changeSlide(1));
    document.querySelector('.prev').addEventListener('click', () => changeSlide(-1));
});
