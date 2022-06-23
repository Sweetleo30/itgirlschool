// база супергероев Марвел.

let marvelJson = `[{
    "id": "01",
    "name": "Железный человек",
    "photo": "assets/img/iron_man.jpg",
    "universe": "Marvel Comics",
    "alterEgo": "Тони Старк",
    "occupation": "гений, миллиардер, плейбой, филантроп",
    "superpowers": "высокий уровень интеллекта, широкие познания науки и техники, связь со всемирной паутиной, бронекостюмы",
    "more": "Пожалуй, самый популярный современный супергерой. У него много общего с мрачной птицей ночи Бэтменом: оба потеряли \
    родителей в детстве, стали борцами с преступностью без особых сверхсил, невероятно богатые. Только если Бэтменом восхищаются, \
    то Тони Старка — обожают :) То ли дело в шикарной актерской игре Роберта Дауни мл., который выбил роль у Николаса Кейджа и Тома \
    Круза, то ли в хорошо прописанном персонаже.<br/><br/>Прототипом для героя послужили Илон Маск и изобретатель Говард Хьюз.<br/><br/>\
    Железный Человек не всегда ходил в красном модном костюме: в своих первых версиях 1963 года он был скромного серого цвета. \
    Увы, в киновоплощении бронекостюм даже не из металла — его делали из пластика и стекловолокна."
},
{
    "id": "02",
    "name": "Человек-паук",
    "photo": "assets/img/spiderman.webp",
    "universe": "Marvel Comics",
    "alterEgo": "Питер Паркер",
    "occupation": "борец за справедливость, студент, фотограф",
    "superpowers": "сверхчеловеческие рефлексы, «паучье чутье», способность прилепляться к твердым поверхностям, производство паутины",
    "more": "Человек-паук родился от потребности Marvel Comics создать героя-подростка. Другие супергерои вроде Бэтмена и Супермена \
    — взрослые мужчины, и целевая аудитория не видела в них примеры для подражания. Пятнадцатилетний Питер Паркер дал понять всем \
    тинейджерам Земли, что можно и злодеев уничтожить, и на красавице жениться. Для этого даже не обязательно быть суперкрасавчиком! \
    Всего лишь нужен укус паучка:)<br/><br/>Питер не сразу использовал свои силы во благо людей: изначально он хотел делать на них \
    деньги, участвуя в нелегальных боях без правил. Затем его любимый дядя Бен умер от рук грабителя, и подросток поклялся, что \
    очистит свой родной Нью-Йорк ото зла. Однако спустя время подросток понял, что одной клятвы недостаточно и что «с великой силой \
    приходит великая ответственность»."
},
{
    "id": "03",
    "name": "Халк",
    "photo": "assets/img/hulk.webp",
    "universe": "Marvel Comics",
    "alterEgo": "Брюс Беннер",
    "occupation": "супергерой, борец за справедливость, ученый-биохимик",
    "superpowers": "сверхчеловеческая сила искорость, выносливость, полет",
    "more": "Идею создания Халка как персонажа можно отнести к фантастической новелле «Странная история доктора Джекила и мистера \
    Хайда», в которой ученый не может примириться со своим демоническим альтер эго. Прошлое у Халка — хуже некуда: отец Брюса страдал \
    от алкоголизма и приступов ярости, а мать пыталась всеми силами уберечь сына от гнева своего мужа. Она погибла, защищая своего \
    единственного ребенка от его побоев.<br/><br/>Пронеся через все детство тяжелый психологический груз, Брюс вырос в чрезвычайно \
    одаренного, но замкнутого юношу. Хотя Брюс не мог уважать отца, но пошел в науке по его стопам и выбрал ядерную физику. Во время \
    эксперимента он ввел себе пробную сыворотку и подверг себя воздействию большого количества гамма-радиации. Беннер превратился в \
    мускулистого неуправляемого гиганта, который крушил все вокруг и не понимал, что происходит. Так имя Халка стало нарицательным \
    для людей, который не могут держать себя в руках."
}]`;

document.addEventListener("DOMContentLoaded", function (event) {

    let objRatings = {};

    if (localStorage.getItem("ratingHero") != null) {
        objRatings = JSON.parse(localStorage.getItem("ratingHero"));
    }

    addContent();

    for (let key in objRatings) {
        document.querySelector(`#${key}`).checked = true;
    }

    checkRadio();

    function checkRadio() {
        let ratings = document.querySelectorAll("input[type=radio]");

        for (let i = 0; i < ratings.length; i++) {
            ratings[i].addEventListener("change", function () {
                objRatings[ratings[i].id] = ratings[i].checked;
                localStorage.setItem("ratingHero", JSON.stringify(objRatings));
            })
        }
    }

    function addContent() {
        let marvel = JSON.parse(marvelJson);

        let marvelContent = "";
        for (let hero of marvel) {

            marvelContent +=
                `<div class="gallery__content-block">
            <div class="gallery__photo-block">
                <img class="photo" src="${hero.photo}" alt=""></img>
            </div>
            <div class="gallery__text-block text-block">
                <div class="text-block__item">
                    <span class="name">${hero.name}</span>
                </div>
                <div class="text-block__item">Вселенная:
                    <span class="universe">${hero.universe}</span>
                </div>
                <div class="text-block__item">Альтер эго:
                    <span class="alter-ego">${hero.alterEgo}</span>
                </div>
                <div class="text-block__item">Род деятельности:
                    <span class="occupation">${hero.occupation}</span>
                </div>
                <div class="text-block__item">Суперсилы:
                    <span class="superpowers">${hero.superpowers}</span>
                </div>
                <div class="text-block__item">
                    <div class="text-block__rating">
                        <div class="rating-area">
                            <input type="radio" class="rating-control" id="star${hero.id}-10" name="rating${hero.id}" value="10">
                            <label for="star${hero.id}-10" title="Оценка «10»"></label>
                            <input type="radio" class="rating-control" id="star${hero.id}-9" name="rating${hero.id}" value="9">
                            <label for="star${hero.id}-9" title="Оценка «9»"></label>
                            <input type="radio" class="rating-control" id="star${hero.id}-8" name="rating${hero.id}" value="8">
                            <label for="star${hero.id}-8" title="Оценка «8»"></label>
                            <input type="radio" class="rating-control" id="star${hero.id}-7" name="rating${hero.id}" value="7">
                            <label for="star${hero.id}-7" title="Оценка «7»"></label>
                            <input type="radio" class="rating-control" id="star${hero.id}-6" name="rating${hero.id}" value="6">
                            <label for="star${hero.id}-6" title="Оценка «6»"></label>
                            <input type="radio" class="rating-control" id="star${hero.id}-5" name="rating${hero.id}" value="5">
                            <label for="star${hero.id}-5" title="Оценка «5»"></label>
                            <input type="radio" class="rating-control" id="star${hero.id}-4" name="rating${hero.id}" value="4">
                            <label for="star${hero.id}-4" title="Оценка «4»"></label>
                            <input type="radio" class="rating-control" id="star${hero.id}-3" name="rating${hero.id}" value="3">
                            <label for="star${hero.id}-3" title="Оценка «3»"></label>
                            <input type="radio" class="rating-control" id="star${hero.id}-2" name="rating${hero.id}" value="2">
                            <label for="star${hero.id}-2" title="Оценка «2»"></label>
                            <input type="radio" class="rating-control" id="star${hero.id}-1" name="rating${hero.id}" value="1">
                            <label for="star${hero.id}-1" title="Оценка «1»"></label>
                        </div>
                    </div>
                </div>
                <div class="text-block__item">Подробнее:
                    <p class="more">${hero.more}</p>
                </div>
            </div>
        </div>`;
        }
        document.querySelector(".gallery__content").innerHTML = marvelContent;
    }
});


// Получение данных с сервера

document.addEventListener("DOMContentLoaded", function (event) {
    getWeather("Moscow");
});

function getWeather(city) {

    let cityVal = document.querySelector(".city");
    let tempVal = document.querySelector(".temp-value");
    let humidity = document.querySelector(".humidity");
    let pressure = document.querySelector(".pressure");
    let cloudiness = document.querySelector(".cloudiness");
    let wind = document.querySelector(".wind");

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=d7cf4889cf9226d63e3fdc0dd50013fd&units=metric')
        .then(response => response.json())
        .then(weather => {
            cityVal.innerText = weather.name;
            tempVal.innerText = Math.round(weather.main.temp) + " °";
            humidity.innerText = Math.round(weather.main.humidity) + " %";
            pressure.innerText = Math.round((weather.main.pressure) / 1.333);
            cloudiness.innerText = Math.round(weather.clouds.all) + " %";
            wind.innerText = Math.round(weather.wind.speed);
        })
        .catch(err => console.log(err));
}
