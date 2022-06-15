// 2. Напишите класс Cat со свойствами

let inputs = document.querySelectorAll('.survey__form-control');
let breed = document.querySelectorAll('.survey__form-select');
let radioCheck = document.querySelectorAll('.radio-control');
let food = document.querySelectorAll('.survey__form-checkbox');
let button = document.querySelector('.survey__btn');
let arr;

button.onclick = function () {

    arr = [];

    for (let input of inputs) {
        arr.push(input.value);
    }

    for (let i = 0; i < breed.length; i++) {
        let selecetedBreed = breed[i].options[breed[i].selectedIndex];
        arr.push(selecetedBreed.value);
    }

    for (let i = 0; radioCheck[i]; ++i) {
        if (radioCheck[i].checked) {
            arr.push(radioCheck[i].value);
        }
    }

    class Cat {
        constructor(petName, firstName, email, tel, breed, food, gender) {
            this.petName = petName;
            this.firstName = firstName;
            this.email = email;
            this.tel = tel;
            this.breed = breed;
            this.food = food;
            this.gender = gender;
        }
    }

    let cat = new Cat(arr[0], arr[1], arr[2], arr[3], arr[4], arr[5], arr[6]);

    console.log(cat);
};


// 3. Калькулятор

let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let plus = document.getElementById('plus');
let minus = document.getElementById('minus');
let times = document.getElementById('times');
let divide = document.getElementById('divide');
let result = document.getElementById('result');
let warning = document.getElementById('warning');

let x;
let y;

function clearInputs() {
    num1.value = '';
    num2.value = '';
}

function getValues() {
    x = +num1.value;
    y = +num2.value;
}

class Сalculator {

    static isPlus() {
        result.innerHTML = (`${x} + ${y} = ${x + y}`);
    }

    static isMinus() {
        result.innerHTML = (`${x} - ${y} = ${x - y}`);
    }

    static isTimes() {
        result.innerHTML = (`${x} × ${y} = ${x * y}`);
    }

    static isDivide() {
        if (y == 0) {
            return warning.innerHTML = ("На ноль делить нельзя!");
        }
        warning.innerHTML = "";
        result.innerHTML = (`${x} ÷ ${y} = ${x / y}`);
    }
}

plus.onclick = function () {
    Сalculator.isPlus(getValues());
    clearInputs();
}

minus.onclick = function () {
    Сalculator.isMinus(getValues());
    clearInputs();
}

times.onclick = function () {
    Сalculator.isTimes(getValues());
    clearInputs();
}

divide.onclick = function () {
    Сalculator.isDivide(getValues());
    clearInputs();
}





