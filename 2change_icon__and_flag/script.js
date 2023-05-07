function change_icon() {


    const oldSVG = document.querySelector('#svg'); // выбираем старый SVG по его id
    const newSVG = document.createElementNS("http://www.w3.org/2000/svg", "svg"); // создаем новый SVG элемент
    
    // задаем атрибуты для нового SVG элемента
    newSVG.setAttribute("width", "1.5em");
    newSVG.setAttribute("height", "1.5em");
    newSVG.innerHTML = '<path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0zm-5.904-2.803a.5.5 0 1 1 .707.707L6.707 10h2.768a.5.5 0 0 1 0 1H5.5a.5.5 0 0 1-.5-.5V6.525a.5.5 0 0 1 1 0v2.768l4.096-4.096z"/>'
    
    // заменяем старый SVG на новый
    oldSVG.parentNode.replaceChild(newSVG, oldSVG);

}

const button = document.querySelector('button'); // выбираем кнопку по селектору
button.addEventListener('click', change_icon); // привязываем функцию к событию "click" на кнопке