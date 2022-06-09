var bannerItem = document.getElementsByClassName('banner-show')[0];
var showBanner = document.getElementsByClassName('banner-item')[1];
var appBanner = document.getElementsByClassName('banner')[0]


var banner = 0;

function nextBanner() {
    banner += bannerItem;
    showBanner.classList.toggle('show')
    appBanner.classList.toggle('next-JS')
    appBanner.classList.remove('prev-JS')
}

setInterval(function () {
    nextBanner()
}, 3000)

function PrevBanner() {
    banner += bannerItem;
    showBanner.classList.toggle('show')
    appBanner.classList.toggle('prev-JS')
    appBanner.classList.remove('next-JS')
}

