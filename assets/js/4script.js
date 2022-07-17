let div1 = document.querySelector("#num1");
let div2 = document.querySelector("#num2");
let div3 = document.querySelector("#num3");
let div4 = document.querySelector("#num4");

div1.style.cssText = 'width: 200px; height: 200px; background-color: yellow;';
div2.style.cssText = 'width: 200px; height: 200px; background-color: red;';
div3.style.cssText = 'width: 200px; height: 200px; background-color: blue;';
div4.style.cssText = 'width: 200px; height: 200px; background-color: orange;';


let color = "yellow";

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        color = "red";
    } else if (event.key === 's') {
        color = "blue";  
    } else if (event.key === 'd') {
        color = "orange";  
    }
    });


div1.addEventListener ('click', () => div1.style.backgroundColor = color);
div2.addEventListener ('click', () => div2.style.backgroundColor = color);
div3.addEventListener ('click', () => div3.style.backgroundColor = color);
div4.addEventListener ('click', () => div4.style.backgroundColor = color);