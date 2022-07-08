// библиотека moment.js
const moment = require('moment');
require('moment/locale/ru');

const date = document.querySelector('.dashboard__data');
let now = moment();
moment.locale('ru');
date.innerHTML = now.format('llll');

// библиотека chart.js
const Chart = require('chart.js');

// диаграмма №1
const ctxFirst = document.getElementById('myChart-1').getContext('2d');

let dataJsonFirst = `{
    "labels": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    "label": "title",
    "data": [133, 198, 320, 591, 520, 354, 632]
}`
let objDataFirst = JSON.parse(dataJsonFirst);

const myChartFirst = new Chart(ctxFirst, {
    type: 'line',

    data: {
        labels: objDataFirst.labels,
        datasets: [{
            label: objDataFirst.label,
            data: objDataFirst.data,
            fill: 'origin',
            backgroundColor: [
                'rgba(8, 69, 166, 0.8)'],
            borderColor: [
                'rgba(23, 131, 241, 1)',
            ],
            tension: 0.4,
            borderWidth: 2
        }]
    }
});

// диаграмма №2
const ctxSecond = document.getElementById('myChart-2').getContext('2d');

let dataJsonSecond = `{
    "labels": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    "label": "title",
    "data": [12, 4, 3, 5, 2, 8, 19]
}`
let objDataSecond = JSON.parse(dataJsonSecond);

const myChartSecond = new Chart(ctxSecond, {
    type: 'bar',

    data: {
        labels: objDataSecond.labels,
        datasets: [{
            label: objDataSecond.label,
            data: objDataSecond.data,
            backgroundColor: [
                'rgba(249, 2, 141, 0.5)'],
            borderColor: [
                'rgba(249, 2, 141, 0.7)'
            ],
            borderWidth: 1
        }]
    }
});

// диаграмма №3
const ctxThird = document.getElementById('myChart-3').getContext('2d');

let dataJsonThird = `{
    "labels": ["Pink", "Blue", "Yellow", "Green", "Purple", "Orange"],
    "label": "title",
    "data": [112, 119, 53, 45, 122, 63]
}`
let objDataThird = JSON.parse(dataJsonThird);

const myChartThird = new Chart(ctxThird, {
    type: 'line',

    data: {
        labels: objDataThird.labels,
        datasets: [{
            label: objDataThird.label,
            data: objDataThird.data,
            fill: 'origin',
            backgroundColor: [
                'rgba(120,252,49, 0.4)'],
            borderColor: [
                'rgba(120,252,49, 1)',
            ],
            tension: 0.4,
            borderWidth: 2
        }]
    }
});

// диаграмма №4
const ctxFourth = document.getElementById('myChart-4').getContext('2d');

let dataJsonFourth = `{
    "labels": ["Green", "Pink", "Blue"],
    "label": "title",
    "data": [1200, 1900, 2500]
}`
let objDataFourth = JSON.parse(dataJsonFourth);

const myChartFourth = new Chart(ctxFourth, {
    type: 'polarArea',

    data: {
        labels: objDataFourth.labels,
        datasets: [{
            label: objDataFourth.label,
            data: objDataFourth.data,
            backgroundColor: [
                'rgba(120, 252, 49, 0.7)',
                'rgba(249, 2, 141, 0.7)',
                'rgba(23,131,241, 0.7)'
            ],
            borderColor: [
                'rgba(120, 252, 49, 0.7)',
                'rgba(249, 2, 141, 0.7)',
                'rgba(23,131,241, 0.7)'
            ],
        }]
    },
    options: {
        responsive: true,
    }
});

// диаграмма №5
const ctxFifth = document.getElementById('myChart-5').getContext('2d');

let dataJsonFifth = `{
    "labels": ["Grey", "Pink", "Green", "Orange", "Blue"],
    "label": "title",
    "data": [350, 30, 60, 50, 400]
}`
let objDataFifth = JSON.parse(dataJsonFifth);

const myChartFifth = new Chart(ctxFifth, {
    type: 'doughnut',

    data: {
        labels: objDataFifth.labels,
        datasets: [{
            label: objDataFifth.label,
            data: objDataFifth.data,
            backgroundColor: [
                'rgba(98, 97, 117, 0.7)',
                'rgba(249, 2, 141, 0.7)',
                'rgba(120, 252, 49, 0.7)',
                'rgba(248, 144, 2, 0.7)',
                'rgba(23, 131, 241, 0.7)'
            ],
            borderColor: [
                'rgba(98, 97, 117, 0.7)',
                'rgba(249, 2, 141, 0.7)',
                'rgba(120, 252, 49, 0.7)',
                'rgba(248, 144, 2, 0.7)',
                'rgba(23, 131, 241, 0.7)'
            ],
            hoverOffset: 4
        }]
    },
    options: {
        responsive: true,
    }
});

// диаграмма №6
const ctxSixth = document.getElementById('myChart-6').getContext('2d');

let dataJsonSixth = `{
    "labels": ["Grey", "Purple"],
    "label": "title",
    "data": [52, 48]
}`
let objDataSixth = JSON.parse(dataJsonSixth);

const myChartSixth = new Chart(ctxSixth, {
    type: 'pie',

    data: {
        labels: objDataSixth.labels,
        datasets: [{
            label: objDataSixth.label,
            data: objDataSixth.data,
            backgroundColor: [
                'rgba(98, 97, 117, 0.7)',
                'rgba(128,1,222, 0.7)'
            ],

            borderColor: [
                'rgba(98, 97, 117, 0.7)',
                'rgba(128,1,222, 0.7)'
            ],

            hoverOffset: 4
        }]
    },
});

// библиотека interact.js
const interact = require('interactjs');

// блок для диаграммы
interact('.draggable')
    .draggable({
        inertia: true,
        modifiers: [
            interact.modifiers.restrictRect({
                restriction: 'parent',
                endOnly: true
            })
        ],

        autoScroll: true,

        listeners: {
            move: dragMoveListener,

            end(event) {
                var textEl = event.target.querySelector('p')

                textEl && (textEl.textContent =
                    'moved a distance of ' +
                    (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                        Math.pow(event.pageY - event.y0, 2) | 0))
                        .toFixed(2) + 'px')
            }
        }
    })

function dragMoveListener(event) {
    var target = event.target
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
}

window.dragMoveListener = dragMoveListener

// блок для главных цифр
interact('.box')
    .draggable({
        inertia: true,

        modifiers: [
            interact.modifiers.restrictRect({
                restriction: 'parent',
                endOnly: true
            })
        ],

        autoScroll: true,

        listeners: {
            move: dragMoveListener,

            end(event) {
                var textEl = event.target.querySelector('p')

                textEl && (textEl.textContent =
                    'moved a distance of ' +
                    (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
                        Math.pow(event.pageY - event.y0, 2) | 0))
                        .toFixed(2) + 'px')
            }
        }
    })

function dragMoveListener(event) {
    var target = event.target
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
}

window.dragMoveListener = dragMoveListener