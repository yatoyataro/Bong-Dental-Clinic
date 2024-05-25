//this script is for the carousel slides/ wala kayong need galawin dito to use the main page

const carousel = document.querySelector('.carousel');
const slides = document.querySelector('.carousel__slides');
const leftButton = document.querySelector('.carousel__button--left');
const rightButton = document.querySelector('.carousel__button--right');

let currentSlide = 0;
const slideWidth = slides.querySelector('.carousel__slide').offsetWidth;

function goToSlide(index) {
  slides.style.transform = `translateX(-${index * slideWidth}px)`;
  currentSlide = index;
}

leftButton.addEventListener('click', () => {
  currentSlide = (currentSlide - 1 + slides.children.length) % slides.children.length;
  goToSlide(currentSlide);
});

rightButton.addEventListener('click', () => {
  currentSlide = (currentSlide + 1) % slides.children.length;
  goToSlide(currentSlide);
});

//this part refreshes the page if the user resize the page to fix the carousel 
window.addEventListener('resize', function () { 
  window.location.reload(); 
});