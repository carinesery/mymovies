import { useState } from "react";

function Wishlist({wishlist, removeFromWishlist}) {
    let countWishlist = wishlist.length;
    console.log(wishlist);
    // 
    return (
        <>
            <p>{countWishlist}</p>
            <ul>
                {wishlist.map((movie, index) => (
                    <li key={index}>
                        <img src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`} />
                        <h2>{movie.title}</h2>
                        <span>{movie.vote_average}</span>
                        <button onClick={() => removeFromWishlist(movie.id)}>Retirer de ma wishlist</button>
                    </li>
                ))}
            </ul>
        </>

    )
}

export default Wishlist