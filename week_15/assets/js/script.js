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
    let b = document.forms["form"]["lastname"].value;
    let c = document.forms["form"]["login"].value;
    let d = document.forms["form"]["password"].value;
    let e = document.forms["form"]["password_confirm"].value;
    let f = document.forms["form"]["phone"].value;

    if (firstNameValidation(a)) {
        if (lastNameValidation(b)) {
            if (loginValidation(c)) {
                if (passwordValidation(d)) {
                    if (passwordConfirmValidation(e)) {
                        if (phoneValidation(f)) {
                            document.getElementsByClassName('registration__message')[0].innerHTML = (`Добро пожаловать, ${a}!`);
                            document.getElementsByClassName('registration__block')[0].style.display = 'none'
                        }
                    }
                }
            }
        }
    }
    return false;
}


function firstNameValidation(a) {
    let errorMessage = document.getElementsByClassName('error-message')[0];
    if (a == "") {
        errorMessage.innerHTML = ("Пожалуйста, укажите имя");
        return false;
    } else {
        return true;
    }
}

function lastNameValidation(b) {
    let errorMessage = document.getElementsByClassName('error-message')[1];
    if (b == "") {
        errorMessage.innerHTML = ("Пожалуйста, укажите фамилию");
        return false;
    } else {
        return true;
    }
}

function loginValidation(c) {
    let errorMessage = document.getElementsByClassName('error-message')[2];
    let c_len = c.length;
    if (c_len == 0 || c_len >= 20 || c_len < 6) {
        errorMessage.innerHTML =
            ("Логин должен состоять не менее чем из " + 6 + " символов и не более чем из " + 20 + " символов");
        return false;
    } else {
        return true;
    }
}

function passwordValidation(d) {
    let errorMessage = document.getElementsByClassName('error-message')[3];
    let d_len = d.length;
    if (d_len == 0 || d_len >= 12 || d_len < 7) {
        errorMessage.innerHTML =
            ("Пароль должен состоять не менее чем из " + 7 + " символов и не более чем из " + 12 + " символов");
        return false;
    } else {
        return true;
    }
}

function passwordConfirmValidation(e) {
    let errorMessage = document.getElementsByClassName('error-message')[4];
    let d = document.forms["form"]["password"].value;
    if (e !== d || e == "") {
        errorMessage.innerHTML = ("Подтверждение не совпадает с паролем");
        return false;
    } else {
        return true;
    }
}

function phoneValidation(f) {
    let errorMessage = document.getElementsByClassName('error-message')[5];
    let regex = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    if (!regex.test(f)) {
        errorMessage.innerHTML = ('Недопустимый формат номера');
        return false;
    } else {
        return true;
    }
}