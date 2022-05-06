let inputIn = document.getElementsByClassName('welcome__input-in')[0];
let button = document.getElementsByClassName('welcome__button')[0];
let welcome = document.getElementsByClassName('welcome__title')[0];

button.onclick = function () {
    let name = inputIn.value;
    welcome.innerHTML = (`Привет, ${name}!`);
    inputIn.value = '';
}

/* калькулятор */

let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let times = document.getElementById('times');
let divide = document.getElementById('divide');
let result = document.getElementById('result');


plus.onclick = function () {
    let x = +num1.value;
    let y = +num2.value;
    result.innerHTML = (`${x} + ${y} = ${x + y}`);
    num1.value = '';
    num2.value = '';
}

minus.onclick = function () {
    let x = num1.value;
    let y = num2.value;
    result.innerHTML = (`${x} - ${y} = ${x - y}`);
    num1.value = '';
    num2.value = '';
}

times.onclick = function () {
    let x = num1.value;
    let y = num2.value;
    result.innerHTML = (`${x} × ${y} = ${x * y}`);
    num1.value = '';
    num2.value = '';
}

divide.onclick = function () {
    let x = num1.value;
    let y = num2.value;
    result.innerHTML = (`${x} ÷ ${y} = ${x / y}`);
    num1.value = '';
    num2.value = '';
}

/* цвет div'ов по клику */

let elem1 = document.getElementsByClassName('div__element')[0];
let elem2 = document.getElementsByClassName('div__element')[1];

elem1.onclick = function () {
    elem1.style.background = '#555353';
}

elem2.onclick = function () {
    elem2.style.background = "#343333";
}

/* слайдер */

let images = [
    'assets/slider/1.jpg',
    'assets/slider/2.jpg',
    'assets/slider/3.jpg'
];

let num = 0;

function next() {
    let slider = document.getElementById('slider');
    num++;
    if (num >= images.length) {
        num = 0;
    }
    slider.src = images[num];
}

function prev() {
    let slider = document.getElementById('slider');
    num--;
    if (num < 0) {
        num = images.length - 1;
    }
    slider.src = images[num];
}