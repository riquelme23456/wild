const slides = document.querySelector('.slides');
let counter = 1;

setInterval(() => {
    slides.style.transition = 'transform 0.5s ease-in-out';
    slides.style.transform = `translateX(${-counter * 100}%)`;

    counter++;

    if (counter === slides.children.length) {
        counter = 0;
    }
}, 5000);