/*  menu */
const navButton = document.getElementById('nav-toggle');
const menu = document.querySelector('.nav__menu');
const link = document.querySelectorAll('.nav__link');

/* modals */
const modalButton = document.querySelectorAll('.button');
const modalContainer = document.querySelector('.modal-container')
const modalSelection = document.querySelector('.modal-selection')
const modalCloseButton = document.querySelector('.modal__close')

/*  modal stand */
const modalStand = document.querySelectorAll('.modal-stand')
const pledge = document.querySelectorAll('.pledge')

/* event listeners */
navButton.addEventListener('click', toggle);
link.forEach(n => n.addEventListener('click', linkAction)) 

modalButton.forEach(n => n.addEventListener('click', modalActive)) 
modalCloseButton.addEventListener('click', close)

modalStand.forEach(n => n.addEventListener('click', standSelected)) 



function toggle() {
  menu.classList.toggle('active');
}

function linkAction() {
  menu.classList.remove('active')
}

function modalActive() {
  modalContainer.classList.add('active')
  modalSelection.classList.add('active')
}

function close() {
  modalContainer.classList.remove('active')
  modalSelection.classList.remove('active')
}

function standSelected() {
  modalStand.forEach(n => n.classList.remove('active')) 
  this.classList.toggle('active');
}