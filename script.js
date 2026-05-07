let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.ClassList.toggle('bx-x')
  navbar.ClassList.toggle('active');
}
