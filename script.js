let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x'); 
  navbar.classList.toggle('active');
}   
///I adjusted the navbar to be a little menu icon and for it to be able to close and open//
const projectBox = document.querySelector('.project-box');
const cards = document.querySelectorAll('.project-card');

let currentIndex = 0;

function updateCarousel() {
  const cardWidth = cards[0].offsetWidth + 48;

  projectBox.scrollTo({
    left: currentIndex * cardWidth,
    behavior: 'smooth'
  });
}
///adjusting the project cards to carousel to be able to transition smoothly//
document.querySelector('.next').addEventListener('click', () => {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }

  updateCarousel();
});

document.querySelector('.prev').addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = cards.length - 1;
  }

  updateCarousel();
});
