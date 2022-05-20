let selectBrand = document.getElementById('brand');
let selectModel = document.getElementById('model');
let selectYear = document.getElementById('year');
let selectModification = document.getElementById('modification');
let selectEquipment = document.getElementById('equipment');
let button = document.querySelector('button');
let select = document.querySelectorAll('.form-calc-select');
let сolour = document.querySelectorAll('.radio-control');
let checkbox = document.querySelectorAll('.checkbox-control');

selectBrand.onchange = function () {
    selectModel.disabled = false;
    let models = [];
    let html = '';

    switch (selectBrand.value) {

        case "100":
            models = ["Creta", "Elantra", "Solaris"];
            prices = [1850000, 2150000, 1410000];
            createArr(models, prices);
            break;

        case "200":
            models = ["Rio", "Rio X", "Soul"];
            prices = [1450000, 1600000, 1830000];
            createArr(models, prices);
            break;

        case "300":
            models = ["Granta", "Vesta", "X-Ray"];
            prices = [720000, 1120000, 1110000];
            createArr(models, prices);
            break;

        case "400":
            models = ["Auris", "Corolla"];
            prices = [2000000, 1900000];
            createArr(models, prices);
            break;
    }

    function createArr(x, y) {
        for (let i = 0; i < x.length; i++) {
            html += `<option value="${y[i]}">${x[i]}</option>`;
            selectModel.innerHTML = html;
        }
    }
}

selectModel.onchange = function () {
    selectYear.disabled = false;
}

selectYear.onchange = function () {
    selectModification.disabled = false;
}

selectModification.onchange = function () {
    selectEquipment.disabled = false;
}

button.addEventListener('click', function () {
    let arr = [];

    // проверка options
    for (let i = 0; i < select.length; i++) {
        arr.push(parseInt((select[i].options[select[i].selectedIndex].value), 10));
    }

    // проверка radio
    for (let i = 0; сolour[i]; ++i) {
        if (сolour[i].checked) {
            arr.push(parseInt(сolour[i].value));
        }
    }

    // проверка checkbox   
    for (let i = 0; checkbox[i]; ++i) {
        if (checkbox[i].checked) {
            arr.push(parseInt(checkbox[i].value));
        }
    }

    function arraySum(array) {
        let sum = 0;
        for (let i = 0; i < array.length; i++) {
            sum += array[i];
        }
        document.getElementsByClassName('calculator__message')[0].style.display = 'flex';
        document.getElementsByClassName('calculator__message')[0].innerHTML = (`Стоимость автомобиля ${sum}₽`);
        document.getElementsByClassName('calculator__block')[0].style.display = 'none';
        console.log(sum);
    }
    arraySum(arr);
});
