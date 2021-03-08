/*  menu */
const navButton = document.getElementById('nav-toggle');
const menu = document.querySelector('.nav__menu');
const link = document.querySelectorAll('.nav__link');
const getStarted = document.getElementById('get-started')

/* modals */
const modalButton = document.querySelectorAll('.button');
const modalContainer = document.querySelector('.modal-container')
const modalSelection = document.querySelector('.modal-selection')
const modalCloseButton = document.querySelector('.modal__close')
const modalSuccess = document.querySelector('.modal-success')
const modalSuccessButton = document.querySelector('.modal-success .button')

/*  modal stand */
const modalStand = document.querySelectorAll('.modal-stand')
const pledge = document.querySelectorAll('.pledge')
const pledgeButton = document.querySelectorAll('.pledge .button')
/* event listeners */
navButton.addEventListener('click', toggle);
link.forEach(n => n.addEventListener('click', linkAction)) 
getStarted.addEventListener('click', modalActive)

modalButton.forEach(n => n.addEventListener('click', modalActive)) 
modalCloseButton.addEventListener('click', close)

modalStand.forEach(n => n.addEventListener('click', standSelected))
pledgeButton.forEach(n => n.addEventListener('click', next))

modalSuccessButton.addEventListener('click', () => {modalContainer.classList.remove('active')
 modalSuccess.classList.remove('active')})

function toggle() {
  menu.classList.toggle('active');
}

function linkAction() {
  menu.classList.remove('active')
}

function modalActive() {
  modalContainer.classList.add('active')
  modalSelection.classList.add('active')
  modalStand.forEach(n => n.classList.remove('active'));
}

function close() {
  modalContainer.classList.remove('active')
  modalSelection.classList.remove('active')
  modalStand.forEach(n => n.classList.remove('active'));
}

function standSelected() {
  modalStand.forEach(n => n.classList.remove('active'));
  this.classList.toggle('active');
}

function next() {
  modalSelection.classList.remove('active');
  modalSuccess.classList.add('active');
}
