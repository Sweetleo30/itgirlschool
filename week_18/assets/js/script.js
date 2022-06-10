// ВАЛИДАЦИЯ РЕГИСТРАЦИИ ЧЕРЕЗ JS

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

let form = document.querySelector('.registration__form');
let formInputs = document.querySelectorAll('.form-control');
let inputsName = document.querySelector('.form-control-name');
let inputLogin = document.querySelector('.form-control-login');
let inputPassword = document.querySelector('.form-control-password');
let inputPasswordConfirm = document.querySelector('.form-control-password-confirm');
let inputPhone = document.querySelector('.form-control-phone');
let errorMessage = document.getElementsByClassName('error-message')[6];
let errors = [];

function checkValidate(input) {
    let validity = input.validity;
    if (validity.valueMissing) { errors.push('Поле ' + input.placeholder + ' не заполнено'); }
}

function validateLogin(login) {
    let re = /^[a-zA-z]{1}[a-zA-Z1-9]{4,16}$/;
    return re.test(login);
}

function validatePassword(password) {
    let re = /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
    return re.test(password);
}

function validatePasswordConfirm(password) {
    let passwordVal = inputPassword.value;
    if (password === passwordVal)
        return true;
}

function validatePhone(phone) {
    let re = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/;
    return re.test(String(phone));
}

function checkAll() {

    errors = [];

    let loginVal = inputLogin.value;
    let passwordVal = inputPassword.value;
    let passwordConfirmVal = inputPasswordConfirm.value;
    let phoneVal = inputPhone.value;

    formInputs.forEach(function (input) {
        if (input.value === '') {
            input.classList.add('error');
            errors.push('Поле ' + input.placeholder + ' не заполнено');

        } else {
            input.classList.remove('error');
        }
    });

    if (loginVal !== '' && !validateLogin(loginVal)) {
        errors.push('Логин должен состоять от 5 до 16 символов латинского алфавита и начинаться с буквы');
        inputLogin.classList.add('error');
    }

    if (passwordVal !== '' && !validatePassword(passwordVal)) {
        errors.push('Пароль должен состоять из 8 или более символов латинского алфавита, содержать заглавные и строчные буквы, цифры и специальные символы');
        inputPassword.classList.add('error');
    }

    if (passwordConfirmVal !== '' && !validatePasswordConfirm(passwordConfirmVal)) {
        errors.push('Подтверждение не совпадает с паролем');
        inputPasswordConfirm.classList.add('error');
    }

    if (phoneVal !== '' && !validatePhone(phoneVal)) {
        errors.push('Недопустимый формат номера');
        inputPhone.classList.add('error');
    }
}

form.onsubmit = function () {

    let firstName = inputsName.value;

    checkAll()

    if (errors == "") {
        document.getElementsByClassName('registration__message')[0].innerHTML = (`Добро пожаловать, ${firstName}!`);
        document.getElementsByClassName('registration__block')[0].style.display = 'none';
        document.getElementsByClassName('registration__title')[0].style.display = 'none';
    } else {
        errorMessage.innerHTML = errors.join('<br>');
    }

    return false;
}

// ИНТЕРФЕЙС ДЛЯ АНОНИМНЫХ КОММЕНТАРИЕВ

let block = document.querySelector(".spam__block-comments");
let inputComnt = document.querySelector(".spam__comments");
let inputName = document.querySelector(".spam__name");
let avatars = document.querySelectorAll(".spam__avatar");
let btnSpam = document.querySelector(".spam__button");
let inputText = document.querySelector("#spam__comments");
let comments = [];

let cmtPast = localStorage.getItem('cmt');

document.addEventListener('DOMContentLoaded', function (event) {
    let name = localStorage.getItem('name');
    let avatar = localStorage.getItem('avatar');
    inputText.value = localStorage.getItem('text');

    inputText.oninput = () => {
        localStorage.setItem('text', inputText.value)
    };

    if (name != null) {
        document.getElementById('comment-name').value = name;
    }

    block.innerHTML = cmtPast;


    for (let i = 0; i < avatars.length; i++) {

        if (avatars[i].value == avatar) {
            avatars[i].checked = true;
        }
    }

    inputText.value = '';
});

function checkSpam(str) {
    let spamCheck;

    spamCheck = str.replace(/viagra/ig, "***");
    spamCheck = spamCheck.replace(/XXX/ig, "***");
    return spamCheck;
}

function addComment() {
    let str = inputComnt.value;
    let nameVal = inputName.value;
    let strAdd = checkSpam(str);

    if (strAdd && strAdd !== " ") {
        comments.push(strAdd);
        inputComnt.value = '';
    }

    let html = "";

    block.innerHTML = '';

    if (!comments.length) {
        return;
    }

    let avatarVal;
    let avatarRes;

    for (let avatar of avatars) {
        if (avatar.checked) {
            avatarVal = avatar.value;
        }
    }

    if (localStorage.getItem('name') == null) {
        localStorage.setItem('name', nameVal);
    }

    if (localStorage.getItem('avatar') == null) {
        localStorage.setItem('avatar', avatarVal);
    }

    switch (avatarVal) {
        case "1":
            avatarRes = `<img src="assets/img/woman.png" alt="woman" class="avatar-icon">`;
            break;

        case "2":
            avatarRes = `<img src="assets/img/man1.png" alt="man1" class="avatar-icon">`;
            break;

        case "3":
            avatarRes = `<img src="assets/img/man2.png" alt="man2" class="avatar-icon">`;
            break;
    }

    comments.forEach((comment) => {
        html += `
            <div class="comment-block"><span>${avatarRes}</span><span class='comment-block-name'>${nameVal}: </span><span class='comment-block-comment'>${comment}</span></div>
        `;
    });

    if (cmtPast != undefined || cmtPast != null) {
        block.innerHTML = cmtPast;
        block.innerHTML += html;
    } else {
        block.innerHTML += html;
    }

    localStorage.setItem('cmt', block.innerHTML);
    inputText.value = "";

    console.log(cmtBlock);
    console.log(block);
}

btnSpam.onclick = addComment;

inputComnt.addEventListener('keydown', event => {
    if (event.keyCode === 13) {
        addComment();
    }
});
