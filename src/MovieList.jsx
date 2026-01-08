import {useState, useEffect} from "react"; 

function MovieList() {
    const [moviesList, setMoviesList] = useState([]);
    const apiKey = import.meta.env.VITE_APP_TMDB_KEY
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            setMoviesList(data.results);
        });
    }, []);
    
    return(
        <ul>{moviesList.map((movie, index) => (
            <li key={index}>
                <img src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`} />
                <h2>{movie.title}</h2>
                <span>{movie.vote_average}</span>
                <button>Voir les détails</button> {/* Permet d'accéder à la page de détail de l'article */}
            </li>
        ))
        }
        </ul>
    )
}

export default MovieList