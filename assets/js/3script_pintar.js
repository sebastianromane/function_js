let ele = document.querySelector('#ele1');

let paint = function(color){
 ele.style.backgroundColor = color;
 }
ele.addEventListener ('click', () => paint('yellow'));