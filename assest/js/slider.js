
// slider

var sliderSize = document.querySelector('.slider-container').clientWidth;

var photoTransfer = document.querySelector('.slider-container-app');

var sliderImg = photoTransfer.querySelectorAll('.slider-img')


var sliderAnimation = 0;

var fullImg = sliderSize * sliderImg.length;

fullImg -= sliderSize;


var sliderRight = document.querySelector('.slider__next')


function nextSlider() {
    if (sliderAnimation < fullImg) {
        sliderAnimation += sliderSize;
    } else {
        sliderAnimation = 0;
    }
    photoTransfer.style.marginLeft = '-' + sliderAnimation + 'px';
}

sliderRight.addEventListener('click', nextSlider);

setInterval(function () {
    nextSlider();
}, 4000)


var sliderLeft = document.querySelector('.slider__prev')

function prevSlider() {

    if (sliderAnimation == 0) {
        sliderAnimation = fullImg;
    } else {
        sliderAnimation -= sliderSize;
    }
    photoTransfer.style.marginLeft = '-' + sliderAnimation + 'px';
}

sliderLeft.addEventListener('click', prevSlider);

// Game slider

var sliderGame = document.querySelector('.game').clientWidth;

var photoGame = document.querySelector('.game-click')

var gameImg = document.querySelectorAll('.game-app-img')

var animationGame = 0;

var fullImgGame = sliderGame * gameImg.length;

fullImgGame -= sliderGame;

var gameLeft = document.querySelector('.game-click-next')

function nextGame() {
    if (animationGame < fullImgGame) {
        animationGame += sliderGame;
    } else {
        animationGame = 0;
    }

    photoGame.style.marginLeft = '-' + animationGame + 'px';
}

gameLeft.addEventListener('click', nextGame)

var gameRight = document.querySelector('.game-click-prev')

function prevGame() {
    if (animationGame == 0) {
        animationGame = fullImgGame;

    } else {
        animationGame -= sliderGame;
    }

    photoGame.style.marginLeft = '-' + animationGame + 'px';
}

gameRight.addEventListener('click', prevGame)

setInterval(function () {
    prevGame()
}, 6000)