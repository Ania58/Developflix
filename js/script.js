import peliculas from './peliculas.js'

console.log(peliculas);

function filtraPeliculasGenero(peliculas,generoId) {
    return peliculas.filter(pelicula =>pelicula.genre_ids.includes(generoId));
}

const peliculasDeAccion = filtraPeliculasGenero(peliculas,28);
const peliculasDeThriller = filtraPeliculasGenero(peliculas,53);
const peliculasDeAventura = filtraPeliculasGenero(peliculas, 12);

console.log(peliculasDeAccion);
console.log(peliculasDeThriller);
console.log(peliculasDeAventura);

function agregarPeliculas(peliculas,contenedorId) {
    const contenedor = document.getElementById(contenedorId);
    peliculas.forEach(pelicula=> {
        const peliculaElement = document.createElement('div');
        peliculaElement.classList.add('pelicula');

        const imgElement = document.createElement('img');
        imgElement.src = `https://image.tmdb.org/t/p/w500${pelicula.poster_path}`;
        imgElement.alt = pelicula.title;

        const tituloElement = document.createElement('h3');
        tituloElement.textContent = pelicula.title;

        peliculaElement.appendChild(imgElement);
        peliculaElement.appendChild(tituloElement);
        contenedor.appendChild(peliculaElement);
    });
}
agregarPeliculas(peliculasDeAccion,"genero-28");
agregarPeliculas(peliculasDeThriller,"genero-53");
agregarPeliculas(peliculasDeAction,"genero-12");