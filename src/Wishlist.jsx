import { useState } from "react";

function Wishlist({ wishlist, removeFromWishlist }) {
    const [search, setSearch] = useState("");

    const filteredWishlist = wishlist.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <>
            <div>
                <input
                    type="search"
                    placeholder="Rechercher dans ma wishlist..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <p>Nombre de films dans ma wishlist : {wishlist.length}</p>
            <ul>
                {filteredWishlist.map((movie, index) => (
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