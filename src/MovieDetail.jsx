import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { WishlistContext } from "./WishlistProvider"

function MovieDetail() {
    const { addToWishlist, removeFromWishlist } = useContext(WishlistContext);
    const [movie, setMovie] = useState({});
    const [actors, setActors] = useState([]);
    const [similarFilms, setSimilarFilms] = useState([]);
    const { id } = useParams();

    const apiKey = import.meta.env.VITE_APP_TMDB_KEY

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setMovie(data)
            })

        fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                console.log(data.cast);
                setActors(data.cast.slice(0, 10))
            })

        fetch(`https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setSimilarFilms(data.results)
            })
    }, [id]);


    return (
        <ul>
            <li><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} /></li>
            <li>{movie.title}</li>
            <li>{movie.release_date}</li>
            <li>{movie.vote_average}</li>
            <li>{movie.overview}</li>
            <li>
                <h2>Acteurs : </h2>
                <ul>{actors.map((actor, index) => (
                    <li key={index}>{actor.name}</li>
                ))}
                </ul>
            </li>
            <li>
                <h2>Films similaires : </h2>
                <ul>{similarFilms.map((similarFilm, index) => (
                    <li key={index}>{similarFilm.title}</li>
                ))}
                </ul>
            </li>
            <li>
                <button onClick={() => addToWishlist(movie)}>Ajouter à ma wihslist</button> {/** Ajout à la wihslist */}
                <button onClick={() => removeFromWishlist(movie.id)}>Retirer de ma wihslist</button> {/** Suppression à la wihslist */}
            </li>

        </ul>
    )

}

export default MovieDetail


