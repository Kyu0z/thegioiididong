// Modal Submit

const submitBtn = document.querySelector('.js-submitBtn')
const modalSubmit = document.querySelector('.modal-submit')
const modalSubmitContainer = document.querySelector('.modal-submit--container')
const modalSubmitClose = document.querySelector('.js-modal-submit--close')


submitBtn.addEventListener('click', showEnquire)


function showEnquire() {
    modalSubmit.classList.add('open')
}


modalSubmitClose.addEventListener('click', hideEnquire)

function hideEnquire() {
    modalSubmit.classList.remove('open')
}


modalSubmit.addEventListener('click', hideEnquire)

modalSubmitContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})

// Modal Support

const supportBtn = document.querySelector('.js-supportBtn')
const modalSupport = document.querySelector('.modal-support')
const modalSupportContainer = document.querySelector('.modal-support--container')
const modalSupportClose = document.querySelector('.js-modal-support--close')


supportBtn.addEventListener('click', showSupport)


function showSupport() {
   modalSupport.classList.add('open')
}


modalSupportClose.addEventListener('click', hideSupport)

function hideSupport() {
   modalSupport.classList.remove('open')
}


modalSupport.addEventListener('click', hideSupport)

modalSupportContainer.addEventListener('click', function (event) {
    event.stopPropagation()
})