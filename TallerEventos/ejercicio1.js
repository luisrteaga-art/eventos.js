let icon = document.querySelector('.icon');
let navbar = document.querySelector('#myNavbar');

icon.addEventListener('click', function () {
    navbar.classList.toggle('responsive');
});