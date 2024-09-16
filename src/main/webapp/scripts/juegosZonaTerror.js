document.addEventListener('DOMContentLoaded', (event) => {
  //cargarJuegos('scripts/juegosZonaTerror.json', 'juegos-terror-container');
  cargarJuegos('scripts/juegosZonaTerror.json', 'juegos-terror-container', juegoToHTML);
});

/* function cargarJuegos(url) {
    fetch(url)
    .then(res => res.json())
    .then(data => dibujarJuegos(data))
    .catch(err => console.error('Error fetching data:', err));
}

function dibujarJuegos(json, element) {

    const juegos = json.map(juego => juegoToHTML(juego));
    document.getElementById(element).innerHTML = juegos.join('');
} */

function juegoToHTML(juego) {
    return `
    <a href="videojuego.html" class="videojuego" data-aos="fade-up">
        <div class="movie_img_overlay">
            <img src="${juego.thumbnail}" alt="${juego.title}">
        </div>
        <div class="movie_box">
            <h3>${juego.title}</h3>
        </div>
    </a>`
};

