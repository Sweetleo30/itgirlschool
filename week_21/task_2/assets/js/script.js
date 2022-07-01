// 2. Написать POST-запрос. Реализовать через JSON.

postButton = document.getElementById('button');
checkbox = document.forms["form"]["accepted"];

checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
        postButton.disabled = false;
        postButton.style.background = "#ffd223";
    }
    else {
        postButton.disabled = true;
        postButton.style.background = "#585454";
    }
});

let form = document.querySelector('.registration__form');
let formInputs = document.querySelectorAll('.form-control');
let inputName = document.querySelector('.form-control-name');
let inputSurname = document.querySelector('.form-control-surname');
let inputLogin = document.querySelector('.form-control-login');
let inputPassword = document.querySelector('.form-control-password');
let inputPasswordConfirm = document.querySelector('.form-control-password-confirm');
let inputPhone = document.querySelector('.form-control-phone');
let errorMessage = document.getElementsByClassName('registration__error-message')[0];
let errors = [];

postButton.onclick = function (event) {
    event.preventDefault();

    let firstName = inputName.value;

    checkAll();

    if (errors.length == 0) {

        let user = {
            name: inputName.value,
            surname: inputSurname.value,
            login: inputLogin.value,
            password: inputPassword.value,
            repeatPassword: inputPasswordConfirm.value,
            phone: inputPhone.value,
        }

        fetch('https://httpbin.org/post',
            {
                method: 'POST',
                body: JSON.stringify(user),
                headers: {
                    'Content-Type': 'application/json;charset=utf-8'
                },
            })
            .then(response => response.json())
            .catch(err => console.log(err));

        document.getElementsByClassName('registration__message')[0].innerHTML = (`Добро пожаловать, ${firstName}!`);
        document.getElementsByClassName('registration__block')[0].style.display = 'none';
        document.getElementsByClassName('registration__title')[0].style.display = 'none';
        document.getElementsByClassName('registration__error-message')[0].style.display = 'none';
    } else {
        errorMessage.innerHTML = errors.join('<br><br>');
    }

    return false;
}

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
            errors.push(input.placeholder + ' не заполнено');

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
        errors.push('Недопустимый формат номера мобильного телефона');
        inputPhone.classList.add('error');
    }
}



