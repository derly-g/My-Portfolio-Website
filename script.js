let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x'); 
  navbar.classList.toggle('active');
}   

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
