// 2. Напишите класс Cat со свойствами

let inputs = document.querySelectorAll('.survey__form-control');
let inputBreed = document.querySelectorAll('.survey__form-select');
let radioCheck = document.querySelectorAll('.radio-control');
let button = document.querySelector('.survey__btn');
let arr;

button.onclick = function () {

    arr = [];

    for (let input of inputs) {
        arr.push(input.value);
    }

    for (let i = 0; i < inputBreed.length; i++) {
        let selecetedBreed = inputBreed[i].options[inputBreed[i].selectedIndex];
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

    let petName = arr[0];
    let firstName = arr[1];
    let email = arr[2];
    let tel = arr[3];
    let breed = arr[4];
    let food = arr[5];
    let gender = arr[6];

    let cat = new Cat(petName, firstName, email, tel, breed, food, gender);

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

class Сalculator {

    static addPlus() {
        result.innerHTML = (`${x} + ${y} = ${x + y}`);
    }

    static addMinus() {
        result.innerHTML = (`${x} - ${y} = ${x - y}`);
    }

    static addTimes() {
        result.innerHTML = (`${x} × ${y} = ${x * y}`);
    }

    static addDivide() {
        if (y == 0) {
            result.innerHTML = (`Ошибка`);
            return warning.innerHTML = ("На ноль делить нельзя!");
        }
        warning.innerHTML = "";
        result.innerHTML = (`${x} ÷ ${y} = ${x / y}`);
    }

    static getValues() {
        x = +num1.value;
        y = +num2.value;
    }

    static clearInputs() {
        num1.value = '';
        num2.value = '';
    }
}

plus.onclick = function () {
    Сalculator.addPlus(Сalculator.getValues());
    Сalculator.clearInputs();
}

minus.onclick = function () {
    Сalculator.addMinus(Сalculator.getValues());
    Сalculator.clearInputs();
}

times.onclick = function () {
    Сalculator.addTimes(Сalculator.getValues());
    Сalculator.clearInputs();
}

divide.onclick = function () {
    Сalculator.addDivide(Сalculator.getValues());
    Сalculator.clearInputs();
}





