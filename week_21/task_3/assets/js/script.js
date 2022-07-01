// 3. Написать POST-запрос. Реализовать через FormData.

const postButton = document.querySelector('.survey__btn');

postButton.onclick = function (event) {
    event.preventDefault();

    fetch('https://httpbin.org/post',
        {
            method: 'POST',
            body: new FormData(form),
        })
        .then(response => response.json())
        .then(interview => {
            console.log(interview);
        })
        .catch(error => console.log(error));
}

