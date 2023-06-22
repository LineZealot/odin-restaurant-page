export function pageRender(page) {
    function createElement(type) {
        const element = document.createElement(type);
        return element;
    };

    const createHeading = (function createHeading(){
        const heading = createElement('h1');
        heading.className = 'page-heading';
        heading.id = 'page-heading';
        heading.textContent = 'A Restaurant';
        page.appendChild(heading);
    }());

    const createBox = (function createBox(){
        const box = createElement('div');
        box.className = 'content-box';
        page.appendChild(box);
        return {
            box,
        }
    }());

    const createText = (function createText(){
        const box = createElement('div');
        box.className = 'half-box';
        const text = createElement('p');
        text.className = 'page-text';
        text.id = 'page-text';
        text.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus feugiat in ante metus. Sollicitudin ac orci phasellus egestas tellus rutrum tellus pellentesque eu. Velit laoreet id donec ultrices tincidunt. Mauris in aliquam sem fringilla. Euismod nisi porta lorem mollis aliquam ut porttitor leo a. Tincidunt augue interdum velit euismod in pellentesque massa. Et odio pellentesque diam volutpat commodo sed egestas egestas. Justo laoreet sit amet cursus sit amet dictum sit. Orci a scelerisque purus semper eget duis at. Semper quis lectus nulla at volutpat diam ut venenatis. A arcu cursus vitae congue mauris rhoncus aenean vel elit. Nunc mi ipsum faucibus vitae aliquet nec ullamcorper sit. Tempor id eu nisl nunc mi ipsum faucibus vitae. Adipiscing bibendum est ultricies integer.';
        box.appendChild(text);
        createBox.box.appendChild(box);
    }());

    const createImg = (function createImg(){
        const box = createElement('div');
        box.className = 'half-box';
        const image = createElement('img');
        image.setAttribute('src', 'images/restaurant.jpg');
        image.className = 'page-image';
        image.id = 'page-image';
        box.appendChild(image);
        createBox.box.appendChild(box);
    }());
};