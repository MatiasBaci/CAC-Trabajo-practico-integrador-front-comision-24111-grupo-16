const botonLlamadaAPI = document.getElementById('botonLlamadaAPI');
botonLlamadaAPI.addEventListener('click', llamarAPI);

function llamarAPI() {
    const apiJuegos = fetch('https://www.freetogame.com/api/games')
        .then(response => response.json())
        .then(data => dibujarJuegos(data));
}

function dibujarJuegos(json) {

    const juegos = json.map(juego => juegoToHTML(juego));
    const contenedorJuegos = document.getElementById('contenedor-juegos');
    contenedorJuegos.innerHTML = juegos.join('');
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

