import {useState, useContext} from "react";
import {WishlistContext} from "./WishlistProvider.jsx";
import styles from "./Wishlist.module.css";

function Wishlist() {
    const { wishlist, removeFromWishlist } = useContext(WishlistContext);
    const [search, setSearch] = useState("");

    const filteredWishlist = wishlist.filter((movie) =>
        movie.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className={styles.container}>
            <div className={styles.search}>
                <input
                    type="search"
                    placeholder="Rechercher dans ma wishlist..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            <p className={styles.count}>Nombre de films dans ma wishlist : {wishlist.length}</p>
            <ul className={styles.list}>
                {filteredWishlist.map((movie, index) => (
                    <li key={index} className={styles.card}>
                        <img src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`} alt={movie.title}/>
                        <h2>{movie.title}</h2>
                        <span>⭐ {movie.vote_average}</span>
                        <button onClick={() => removeFromWishlist(movie.id)}>Retirer de ma wishlist</button>
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default Wishlist