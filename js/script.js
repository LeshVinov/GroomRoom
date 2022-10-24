const modal = document.querySelector('.modal');
const buttonClosed = document.querySelector('.cross');
const buttonOpened = document.querySelector('.button-signIn')
const buttonRequestAdd = document.querySelector('.user__button')

const toggleModal = function() {
    modal.classList.toggle('open');
}

const removeOfModal = function(event) {
    if (event.target.classList === modal.classList) {
        modal.classList.remove('open')
    }
}

buttonClosed.addEventListener('click', toggleModal)
buttonOpened.addEventListener('click', toggleModal)
buttonRequestAdd.addEventListener('click', toggleModal)