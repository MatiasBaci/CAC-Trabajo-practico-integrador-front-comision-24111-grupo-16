document.addEventListener('DOMContentLoaded', (event) => {
  llamarAPI();
});

function llamarAPI() {
    const url = 'https://free-to-play-games-database.p.rapidapi.com/api/filter?tag=3d.mmorpg.fantasy.pvp&platform=pc';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '40eae54f70msh55c3f47dc79bab7p1f1bbejsnff6441f703f2',
            'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
        }
    };
    fetch(url, options)
    .then(res => res.json())
    .then(data => dibujarJuegos(data))
    .catch(err => console.error('Error fetching data:', err));
}

function dibujarJuegos(json) {

    const juegos = json.map(juego => juegoToHTML(juego));
    document.getElementById('contenedor-juegos').innerHTML = juegos.join('');
}

function juegoToHTML(juego) {
    return `
    <a href="${juego.game_url}" class="videojuego" data-aos="fade-up">
        <div class="movie_img_overlay">
            <img src="${juego.thumbnail}" alt="${juego.title}">
        </div>
        <div class="movie_box">
            <h3>${juego.title}</h3>
        </div>
    </a>`
};

