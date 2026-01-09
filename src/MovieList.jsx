import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

function MovieList() {
    const [moviesList, setMoviesList] = useState([]);
    const [category, setCategory] = useState("popular");
    const [search, setSearch] = useState("");


    const apiKey = import.meta.env.VITE_APP_TMDB_KEY
    useEffect(() => {
        const url = search 
        ? `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`
        : `https://api.themoviedb.org/3/movie/${category}?api_key=${apiKey}`
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setMoviesList(data.results);
            });
    }, [category, search]);

    const filteredMovies = moviesList.filter((movie) => movie.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
            <div>
                <input
                    type="search"
                    placeholder="Rechercher un film ..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <div>
                <button onClick={() => setCategory("popular")}>Populaires</button>
                <button onClick={() => setCategory("now_playing")}>A l'affiche</button>
                <button onClick={() => setCategory("top_rated")}>Les mieux notés</button>
                <button onClick={() => setCategory("upcoming")}>A venir</button>
            </div>
            <ul>{filteredMovies.map((movie, index) => (
                <li key={index}>
                    <img src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`} />
                    <h2>{movie.title}</h2>
                    <span>{movie.vote_average}</span>
                    <Link to={`/movie/${movie.id}`}>Voir les détails</Link> {/* Permet d'accéder à la page de détail de l'article */}
                </li>
            ))
            }
            </ul>
        </>
    )
}

export default MovieList