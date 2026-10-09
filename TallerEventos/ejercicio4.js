let accordions = document.querySelectorAll('.accordion');

for (let i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener('click', function () {
        let panel = this.nextElementSibling;

        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    });
}