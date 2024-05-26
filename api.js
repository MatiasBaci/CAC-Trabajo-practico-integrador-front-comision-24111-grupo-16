const botonApi = document.getElementById('llamar');
botonApi.addEventListener('click', llamarApi);

function llamarApi() {
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
    .then(data => dibujarDatos(data))
    .catch(err => console.error('Error fetching data:', err));
}

function dibujarDatos(data) {
    const filas = data.map(obj => fila(obj));
    document.getElementById('datos').innerHTML = filas.join('');
}

function fila(obj) {
    return `
        <tr>
            <td>${obj.id}</td>
            <td>${obj.title}</td>
            <td><img src="${obj.thumbnail}" alt="Game thumbnail"></td>
            <td>${obj.short_description}</td>
        </tr>
    `;
}



