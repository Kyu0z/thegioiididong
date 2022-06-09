
// sale prodcut

var productSale = document.querySelector('.product_sale-frameProduct')

var salePrev = document.querySelector('.product-prev')

function salePrevLeft() {
    productSale.classList.toggle('sale-prev')
}

salePrev.addEventListener('click', salePrevLeft)


var saleNext = document.querySelector('.product-next')

function saleNextLeft() {
    productSale.classList.toggle('sale-prev')
}

saleNext.addEventListener('click', saleNextLeft)

setInterval(function () {
    saleNextLeft()
}, 3500)


// LAPTOP, TABLET NỔI BẬT NHẤT  

var highlights = document.querySelector('.product_laptop-frameProduct')

var prevHighlights = document.querySelector('.product_laptop-prev')

function prevHighlightsLeft() {
    highlights.classList.toggle('sale-prev')
}

prevHighlights.addEventListener('click', prevHighlightsLeft)


var nextHighlights = document.querySelector('.product_laptop-next')

function nextHighlightsRight() {
    highlights.classList.toggle('sale-prev')
}

nextHighlights.addEventListener('click', nextHighlightsRight)

setInterval(function () {
    nextHighlightsRight()
}, 4500)


// Phụ kiện nổi bật nhất 

var highlightsItem = document.querySelector('.product_bluetooth-frameProduct')

var prevHighlightsLink = document.querySelector('.product_bluetooth-prev')


function prevHighlightsSetup() {
    highlightsItem.classList.toggle('sale-prev')
}

prevHighlightsLink.addEventListener('click', prevHighlightsSetup)


var nextHighlightsLink = document.querySelector('.product_bluetooth-next')

function nextHighlightsItem() {
    highlightsItem.classList.toggle('sale-prev')
}

nextHighlightsLink.addEventListener('click', nextHighlightsItem)

setInterval(function () {
    nextHighlightsItem()
}, 6000)


// Selector clock

var tabsItem = document.querySelectorAll('.product_block-head--item')

var tabsProducts = document.querySelectorAll('.product_block-frameProduct')

tabsItem.forEach(function (tab, index) {

    var tabsProduct = tabsProducts[index]

    tab.onclick = function () {

        document.querySelector('.product_block-head--item.active-selector').classList.remove('active-selector')
        document.querySelector('.product_block-frameProduct.active-product').classList.remove('active-product')

        this.classList.add('active-selector')
        tabsProduct.classList.add('active-product')
    }
})

//  Đồng hồ thông minh

var product = document.querySelector('.product_block-frameProduct')

var nextProductLeft = document.querySelector('.product_clock-next')

var prevProductRight = document.querySelector('.product_clock-prev')

function nextProduct() {

    product.classList.toggle('sale-prev1')
}

nextProductLeft.addEventListener('click', nextProduct)


function prevProduct() {
    product.classList.toggle('sale-prev1')
}

prevProductRight.addEventListener('click', prevProduct)

setInterval(function () {
    prevProduct()
}, 5000)


// Đồng hồ thời trang nam 

var productTwo = document.querySelector('.product_block-frameProduct--setTime_Men')

var nextProductLeft = document.querySelector('.product_clock_men--next')

var prevProductRight = document.querySelector('.product_clock_men--prev')

function nextProducttwo() {
    productTwo.classList.toggle('sale-prev2')

}

nextProductLeft.addEventListener('click', nextProducttwo)


function prevProducttwo() {
    productTwo.classList.toggle('sale-prev2')
}

prevProductRight.addEventListener('click', prevProducttwo)

setInterval(function () {
    nextProducttwo()
}, 5000)

// đồng hồ thời trang nữ clock-watch-full-three

var productThree = document.querySelector('.product_block-frameProduct--setTime_Women')


var nextProductLeft = document.querySelector('.product_clock_women--next')

var prevProductRight = document.querySelector('.product_clock_women--prev')

function nextProductThree() {
    productThree.classList.toggle('sale-prev2')

}

nextProductLeft.addEventListener('click', nextProductThree)


function prevProductThree() {
    productThree.classList.toggle('sale-prev2')
}

prevProductRight.addEventListener('click', prevProductThree)

setInterval(function () {
    nextProductThree()
}, 5000)

//  Định vị trẻ em  clock-watch-full-four

var productFour = document.querySelector('.product_block-frameProduct--setTime_Child')


var nextProductLeft = document.querySelector('.product_clock_child--next')

var prevProductRight = document.querySelector('.product_clock_child--prev')

function nextProductFour() {
    productFour.classList.toggle('sale-prev2')

}

nextProductLeft.addEventListener('click', nextProductFour)


function prevProductFour() {
    productFour.classList.toggle('sale-prev2')
}

prevProductRight.addEventListener('click', prevProductFour)

setInterval(function () {
    nextProductFour()
}, 5000)
