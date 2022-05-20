// №1 функция sumInput()

function sumInput() {

    let numbers = [];

    while (true) {
        let num = prompt("Введите число!");
        if (num === "" || num === null || !isFinite(num)) break;
        numbers.push(+num);
        numbers.sort(function (a, b) {
            return a - b;
        });
    }

    alert(`Отсортированный массив: ${numbers}`);

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

alert(`Cумма элементов массива: ${sumInput()}`);


// №3 Отфильтруйте массив от нежелательных значений, таких как false, undefined, 
// пустые строки, ноль, null с помощью метода filter.

// ======1======
let list = ['js', 'css', 'html'];

alert(list[0]);
// или
alert(list.shift());

// ======2======
let elements = [0, 1, false, 2, undefined, '', 3, null];
let filtered = elements.filter(function (el) { return el; });

alert(filtered);


// №4 Найдите индекс массива, длина которого > 3

let array = [[1, 2], [1, 2, 3], [1, 2, 3, 4]];
for (let i = 0; i < array.length; i++) {
    if (array[i].length > 3) {
        alert(i);
    }
}