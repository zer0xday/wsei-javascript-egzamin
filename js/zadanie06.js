document.addEventListener('DOMContentLoaded', () => {
    const btn1 = document.querySelector('#button-1');
    const btn2 = document.querySelector('#button-2');
    const btn3 = document.querySelector('#button-3');
    const list = document.querySelector('#shopping-list');

    btn1.addEventListener('click', () => {
        let bread = createProduct("Chleb");
        list.appendChild(bread);
    });

    btn2.addEventListener('click', () => {
        let products = list.children;
        let lastElement = products.item(products.length - 1);
        
        lastElement.remove();
    });

    btn3.addEventListener('click', () => {
        let secondEl = getSecondElement();
        let clone = createProduct(secondEl.innerHTML);
        list.appendChild(clone);
    });

    function createProduct(name) {
        let el = document.createElement('li');
        el.innerHTML = name;
        return el;
    }

    function getSecondElement() {
        if (list.children.length > 1) {
            let secondElement = list.children.item(1);
            return secondElement;
        }
    }
});