// ПРЕОБРАЗОВАНИЯ ФИО
let button = document.querySelector('.fio__button');

button.addEventListener('click', function () {
    let arrFio = [];
    let firstName = document.getElementById('firstname');
    let lastName = document.getElementById('lastname');
    let patronymic = document.getElementById('patronymic');
    let selectFio = document.querySelector('.form-control').value;
    let strFio = selectFio.trim();

    strFio = strFio.split(' ').filter(function (n) { return n != '' });

    for (let word of strFio) {
        word = word.toLowerCase();
        word = word[0].toUpperCase() + word.substr(1);
        arrFio.push(word);
    }

    firstName.value = arrFio[1];
    lastName.value = arrFio[0];
    patronymic.value = arrFio[2];
});


// ИНТЕРФЕЙС ДЛЯ АНОНИМНЫХ КОММЕНТАРИЕВ
let block = document.querySelector(".spam__block-comments");
let inputComnt = document.querySelector(".spam__comments");
let btnSpam = document.querySelector(".spam__button");
let comments = [];

function checkSpam(str) {

    let spamCheck;

    spamCheck = str.replace(/viagra/ig, "***");
    spamCheck = spamCheck.replace(/XXX/ig, "***");
    return spamCheck;
}

function addComment() {

    let str = inputComnt.value;
    let strAdd = checkSpam(str);
    if (strAdd && strAdd !== " ") {
        comments.push(strAdd);
        inputComnt.value = '';
    }

    block.innerHTML = '';

    if (!comments.length) {
        return;
    }

    let html = '';

    comments.forEach((comment) => {
        html += `
            <div class="comment-block">${comment}</div>
        `;
    });

    block.innerHTML = html;
}

btnSpam.onclick = addComment;

inputComnt.addEventListener('keydown', event => {
    if (event.keyCode === 13) {
        addComment();
    }
});

// НАПИШИТЕ ФУНКЦИЮ formatDate(date)
let btnFirst = document.querySelector(".date__btn_first");
let btnSecond = document.querySelector(".date__btn_second");
let btnThird = document.querySelector(".date__btn_third");
let btnFourth = document.querySelector(".date__btn_fourth");

btnFirst.onclick = function () {
    alert(formatDate(new Date(new Date - 1)));
}

btnSecond.onclick = function () {
    alert(formatDate(new Date(new Date - 30 * 1000)));
}

btnThird.onclick = function () {
    alert(formatDate(new Date(new Date - 5 * 60 * 1000)));
}

btnFourth.onclick = function () {
    alert(formatDate(new Date(new Date - 86400 * 1 * 1000)));
}

function formatDate(date) {

    date = new Date(date);
    let now = new Date;
    let diff = now - date;

    let day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

    month = month < 10 ? `0${month}` : month;

    if (diff < 1000) {
        return 'прямо сейчас';
    }

    if (diff < 1000 * 60) {
        return `${Math.round(diff / 1000)} сек. назад`;
    }

    if (diff < 1000 * 3600) {
        return `${Math.round(diff / 1000 / 60)} мин. назад`;
    }

    return `${day}.${month}.${year} ${hour}:${minutes}`
}


// ГЕНЕРАТОР 10 СЛУЧАЙНЫХ ЧИСЕЛ
let btn = document.querySelector('.generator__button');
let message = document.querySelector(".generator-message");

btn.onclick = function () {

    let array = [];

    for (i = 0; i < 10; i++) {
        let num = randomInteger(-10, 10);
        array.push(num);
    };

    function randomInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    let sum = array.reduce((a, b) => a + b);
    let mul = array.reduce((a, b) => a * b);


    message.innerHTML = `Сгенерировали: ${array} <br>
        Минимальное: ${Math.min(...array)}<br>
        Максимальное: ${Math.max(...array)}<br>
        Среднее арифметическое: ${sum / array.length}<br>
        Сумма чисел: ${sum}<br>
        Произведение чисел: ${mul}<br>
    `;

    message.style.display = 'flex';
    document.getElementsByClassName('generator__title')[0].style.display = 'none';
    document.getElementsByClassName('generator__button')[0].style.display = 'none';
}


