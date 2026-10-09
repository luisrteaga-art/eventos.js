let btnAbrir = document.querySelector('.openbtn');
let sidebar = document.querySelector('#mySidebar');
let btnCerrar = document.querySelector('.closebtn');

btnAbrir.addEventListener('click', function() {
    sidebar.style.width = '270px';
});

btnCerrar.addEventListener('click', function() {
    sidebar.style.width = '0';
});
