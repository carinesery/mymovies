import { useState, useEffect } from "react";
import {useParams} from "react-router-dom";

function MovieDetail({addToWishlist, removeFromWishlist}) {
    const [movie, setMovie] = useState({});
    const [actors, setActors] = useState([]);
    const {id} = useParams();

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
    }, [id]);


    return (
        <ul>
            <li><img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} /></li>
            <li>{movie.title}</li>
            <li>{movie.release_date}</li>
            <li>{movie.vote_average}</li>
            <li>{movie.overview}</li>
            <li>
                <ul>{actors.map((actor, index) => (
                    <li key={index}>{actor.name}</li>
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


