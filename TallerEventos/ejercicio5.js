function myFunction() {
    // 1. Seleccionamos el checkbox y el texto por su ID
    let checkBox = document.querySelector('#myCheck');
    let text = document.querySelector('#text');

    // 2. Evaluamos si el checkbox está marcado
    if (checkBox.checked === true) {
        text.style.display = 'block'; // Muestra el texto
    } else {
        text.style.display = 'none';  // Oculta el texto
    }
}