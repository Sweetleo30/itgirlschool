/* калькулятор */

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

plus.onclick = function () {
    getValues();
    result.innerHTML = (`${x} + ${y} = ${x + y}`);
    clearInputs();
}

minus.onclick = function () {
    getValues();
    result.innerHTML = (`${x} - ${y} = ${x - y}`);
    clearInputs();
}

times.onclick = function () {
    getValues();
    result.innerHTML = (`${x} × ${y} = ${x * y}`);
    clearInputs();
}

divide.onclick = function () {
    getValues();
    if (y == 0) {
        warning.innerHTML = ("На ноль делить нельзя!");
    }
    result.innerHTML = (`${x} ÷ ${y} = ${x / y}`);
    clearInputs();
}

/* Смена цветовой темы страницы */

let page = document.getElementById('page');
let themeSelection = document.getElementById('theme');

themeSelection.onclick = function () {

    if (themeSelection.value == 'light-theme') {
        page.style.background = "#b6b3bb";
        themeSelection.style.background = "#b6b3bb";
    } else {
        page.style.background = "#000000";
        themeSelection.style.background = "#000000";
    }
}

/* Валидация формы */

btn = document.getElementById('button');
checkbox = document.forms["form"]["accepted"];

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        btn.disabled = false;
        btn.style.background = "#ffd223";
    }
    else {
        btn.disabled = true;
        btn.style.background = "#585454";
    }
});

function validate() {

    let a = document.forms["form"]["firstname"].value;
    if (a == "") {
        document.getElementsByClassName('error-message')[0].innerHTML = ("Пожалуйста, укажите имя");
    }


    let b = document.forms["form"]["lastname"].value;
    if (b == "") {
        document.getElementsByClassName('error-message')[1].innerHTML = ("Пожалуйста, укажите фамилию");
    }

    let c = document.forms["form"]["login"].value;
    let c_len = c.length;
    if (c_len == 0 || c_len >= 20 || c_len < 6) {
        document.getElementsByClassName('error-message')[2].innerHTML =
            ("Логин должен состоять не менее чем из " + 6 + " символов и не более чем из " + 20 + " символов");
    }

    let d = document.forms["form"]["password"].value;
    let d_len = d.length;
    if (d_len == 0 || d_len >= 12 || d_len < 7) {
        document.getElementsByClassName('error-message')[3].innerHTML =
            ("Пароль должен состоять не менее чем из " + 7 + " символов и не более чем из " + 12 + " символов");
    }

    let e = document.forms["form"]["password_confirm"].value;
    if (e !== d || e == "") {
        document.getElementsByClassName('error-message')[4].innerHTML = ("Подтверждение не совпадает с паролем");
    }

    let f = document.forms["form"]["phone"].value;
    let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    if (!regex.test(f)) {
        document.getElementsByClassName('error-message')[5].innerHTML = ('Недопустимый формат номера');
    }

    return false;
}





