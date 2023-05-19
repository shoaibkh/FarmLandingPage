
var slides = document.querySelectorAll('.slide');
var progressBar = document.querySelector('.progress-bar');
var sliderImages = document.querySelectorAll('.slider-container .slide img');
var buttonImage = document.getElementById('button-image');
document.getElementById('number-total').innerHTML = `0${slides.length}`;
var currentSlide = 0;
var nextSlide = 1;
buttonImage.src = sliderImages[nextSlide].src;
document.getElementById('number-current').innerHTML = `0${currentSlide + 1}`;

function nextSlides() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide active';
    nextSlide = (nextSlide + 1) % sliderImages.length;
    buttonImage.src = sliderImages[nextSlide].src;
    document.getElementById('number-current').innerHTML = `0${currentSlide + 1}`;
}

var timer = setInterval(nextSlides, 3000);

function changeSlide() {
    // Update the current slide index
    slides[currentSlide].className = 'slide';
    currentSlide = nextSlide
    document.getElementById('number-current').innerHTML = `0${currentSlide + 1}`;
    slides[currentSlide].className = 'slide active';
    nextSlide = (nextSlide + 1) % sliderImages.length;

    // Update the button image
    buttonImage.src = sliderImages[nextSlide].src;
    clearInterval(timer);
    timer = setInterval(nextSlides, 3000);
    console.log(progressBar)
    progressBar.style.animation = 'none';
    progressBar.offsetHeight;
    progressBar.style.animation = 'bar 3s infinite';
}