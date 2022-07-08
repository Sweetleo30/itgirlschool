// Обработка ошибок

document.addEventListener("DOMContentLoaded", async function (event) {
    let cityVal = document.querySelector(".city");
    let tempVal = document.querySelector(".temp-value");
    let humidity = document.querySelector(".humidity");
    let pressure = document.querySelector(".pressure");
    let cloudiness = document.querySelector(".cloudiness");
    let wind = document.querySelector(".wind");
    let errorMessage = document.querySelector('.weather__error');
    let city = "Moscow";

    try {
        let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=d7cf4889cf9226d63e3fdc0dd50013fd&units=metric')
        let weather = await response.json();
        cityVal.innerText = weather.name;
        tempVal.innerText = Math.round(weather.main.temp) + " °";
        humidity.innerText = Math.round(weather.main.humidity) + " %";
        pressure.innerText = Math.round((weather.main.pressure) / 1.333);
        cloudiness.innerText = Math.round(weather.clouds.all) + " %";
        wind.innerText = Math.round(weather.wind.speed);
    }
    catch (error) {
        console.log(error);
        errorMessage.style.display = 'flex';
        errorMessage.innerHTML = (`Сервер не доступен`);
    }
});