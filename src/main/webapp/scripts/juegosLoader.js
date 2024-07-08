// common code to pages that load games dynamically
// juegoToHTMLCallback is a callback function that loads HTML specific to each page that will be passed to dibujarJuegos

function cargarJuegos(url, element, juegoToHTMLCallback) {
	fetch(url)
	.then(res => res.json())
	.then(data => dibujarJuegos(data, element, juegoToHTMLCallback))
	.catch(err => console.error('Error fetching data:', err));
}

function dibujarJuegos(json, element, juegoToHTMLCallback) {
	const juegos = json.map(juego => juegoToHTMLCallback(juego));
	document.getElementById(element).innerHTML = juegos.join('');
}