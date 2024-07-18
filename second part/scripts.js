const carousel = document.querySelector('.carousel');
const items = document.querySelectorAll('.carousel-item');
const itemCount = items.length;
const itemsPerRow = 6; // Number of items per row
let carouselIndex = 0;

function moveCarousel() {
    carouselIndex++;
    if (carouselIndex >= Math.ceil(itemCount / itemsPerRow)) {
        carouselIndex = 0;
        carousel.style.transition = 'none'; // Disable transition to reset position instantly
        carousel.style.transform = `translateY(0)`;
        setTimeout(() => {
            carousel.style.transition = 'transform 0.5s linear'; // Re-enable transition for next move
        }, 20); // Re-enable transition after a short delay
    } else {
        carousel.style.transform = `translateY(${-carouselIndex * 220}px)`;
    }
}

setInterval(moveCarousel, 2000);
