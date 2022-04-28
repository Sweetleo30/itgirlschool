function getName() {
    let name = prompt('Как тебя зовут?');
    if (name === null) {
        name = 'незнакомец';
    }
    alert(`Привет, ${name}!`);
}

function getAddition() {
    let num1 = prompt("Введите число!");
    let num2 = prompt("Введите число!");
    alert(Number(num1) + Number(num2));
}

function getSubtraction() {
    let num1 = prompt("Введите число!");
    let num2 = prompt("Введите число!");
    alert(Number(num1) - Number(num2));
}

function getMultiplication() {
    let num1 = prompt("Введите число!");
    let num2 = prompt("Введите число!");
    alert(Number(num1) * Number(num2));
}

function getDivision() {
    let num1 = prompt("Введите число!");
    let num2 = prompt("Введите число!");
    alert(Number(num1) / Number(num2));
}



