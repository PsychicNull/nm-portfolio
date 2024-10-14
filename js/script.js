// JavaScript to toggle the menu
const mobileMenu = document.getElementById('mobile-menu');
const navList = document.getElementById('nav-list');

const dropdownToggle = document.querySelector('.dropbtn');
const dropdownContent = document.querySelector('.dropdown-content');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});

dropdownToggle.addEventListener('click', function(event) {
    event.preventDefault();
    dropdownContent.classList.toggle('show');
});