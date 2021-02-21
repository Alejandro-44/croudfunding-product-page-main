const navButton = document.getElementById('nav-toggle');
const menu = document.querySelector('.nav__menu')
const link = document.querySelectorAll('.nav__link')
/* event listeners */
navButton.addEventListener('click', toggle);
link.forEach(n => n.addEventListener('click', linkAction)) 


function toggle() {
  menu.classList.toggle('active');
}

function linkAction() {
  menu.classList.remove('active')
}

