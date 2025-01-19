import chroma from 'https://cdn.jsdelivr.net/npm/chroma-js@2.4.2/+esm';
const body = document.body;
body.style.backgroundColor = "#000000";
body.style.color = 'white';


const gearIcon = document.getElementById('gear-icon');
gearIcon.addEventListener('click', function(e) {
    const colorContainer = document.createElement('div');
    colorContainer.id = "color-container";
    body.appendChild(colorContainer);
    if(colorContainer.style.display === "block") {
        colorContainer.style.display === 'none';
    } else {
        colorContainer.innerHTML = `
        <p>Background color</p>
        <input id="input-color" type="color">
        <div id="boxes">
            <div class="box" id="box1"></div>
            <div class="box" id="box2"></div>
            <div class="box" id="box3"></div>
            <div class="box" id="box4"></div>
            <div class="box" id="box5"></div>
            <div class="box" id="box6"></div>
            <div class="box" id="box7"></div>
        </div>
        <button id="random-color">Generate random color</button>
        <i id="fa-xmark-icon" class="fa-solid fa-xmark"></i>
    `;
    }
    colorContainer.style.backgroundColor = "lightyellow";
    colorContainer.style.padding = "20px";
    colorContainer.style.maxWidth = "400px";
    colorContainer.style.margin = 'auto';
    colorContainer.style.position = 'absolute';
    colorContainer.style.top = '30px';
    colorContainer.style.left = '0';
    colorContainer.style.right = '0';

    const inputColor = colorContainer.querySelector('input');
    const randomBtn = colorContainer.querySelector('button');
    const boxes = colorContainer.querySelectorAll('.box');
    const xmarkBtn = colorContainer.querySelector("#fa-xmark-icon");
    
    xmarkBtn.addEventListener('click', function() {
        colorContainer.style.display = "none";
    });

    inputColor.addEventListener('input', function(e) {
        const color = e.target.value;
        body.style.backgroundColor = color;
    });

    const randomColorsArr = ['red', 'purple', 'brown', 'darkgreen', 'green', 'violet', 'crimson'];

    randomBtn.addEventListener('click', function() {
        const randomIndex = Math.floor(Math.random() * randomColorsArr.length);
        body.style.backgroundColor = randomColorsArr[randomIndex];
    });

    Array.from(boxes).forEach((box, index) => {
        box.style.backgroundColor = randomColorsArr[index];
        box.style.cursor = 'pointer';

        box.addEventListener('click', function() {
            body.style.backgroundColor = box.style.backgroundColor;
        })
    })
})