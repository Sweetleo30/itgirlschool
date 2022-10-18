document.addEventListener('DOMContentLoaded', () => {

    const API_KEY = 'Spx2WM9XwOtesCKctADw2L1ibu7z7s4X';
    const PROTOCOL = 'https://'
    const ROUTE = 'api.giphy.com/';
    const VERSION = 'v1/';
    const GIFS = 'gifs/';
    const SEARCH = 'search';
    const LIMIT = 5;
    let offset = 0;

    const searchInput = document.querySelector('.gif__search-input');
    const searchBtn = document.querySelector('.gif__search-btn');

    searchInput.addEventListener('keyup', (event) => {
        if (event.key === 'Enter') {
            searchGifs();
        }
    })

    searchBtn.addEventListener('click', searchGifs);

    function appendHTML(gifs) {
        let html = '';

        if (!gifs.length) {
            html = '<p>Ничего не найдено</p>';
        } else {
            gifs.forEach((gif) => {
                html += `
            <div class="gallery-gif__img">
                <img src="${gif.images.original.url}" alt="${gif.title}">
            </div>`;
            })
        }
        const gifsGallery = document.querySelector('.gif__gallery');
        gifsGallery.innerHTML = html;
    }

    function searchGifs() {
        const searchValue = searchInput.value;
        if (!searchValue) {
            return;
        }

        const searchRoute = new URL(`${PROTOCOL}${ROUTE}${VERSION}${GIFS}${SEARCH}?api_key=${API_KEY}&q=${searchValue}&limit=${LIMIT}&offset=${offset}`);
        loadData(searchRoute);
    }

    function loadData(route) {
        fetch(route)
            .then(response => response.json())
            .then(response => {
                const gifs = response.data;
                appendHTML(gifs);
            })
            .catch(err => console.error(err));
    }
})