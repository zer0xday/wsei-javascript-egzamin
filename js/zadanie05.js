document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button');
    const container = document.querySelector('#container');

    buttons.forEach((btn) => {
        btn.addEventListener('click', function() {
            container.innerHTML += this.getAttribute('data-text');
        });
    });
});