import { useState } from "react";
import MovieList from './MovieList.jsx'
import MovieDetail from './MovieDetail.jsx'
import Wishlist from './Wishlist.jsx'


function App() {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (movie) => {
    const alreadyInWishlist = wishlist.some((item) => item.id === movie.id);

    if (!alreadyInWishlist) {
      setWishlist([...wishlist, movie]);
    }
  };

  const removeFromWishlist = (movieId) => {
    setWishlist(
      wishlist.filter((item) => item.id !== movieId)
    );
  }



  return (
    <>
      <Wishlist
        wishlist={wishlist}
        removeFromWishlist={removeFromWishlist} />
      {/* <MovieList /> */}
      <MovieDetail
        addToWishlist={addToWishlist}
        removeFromWishlist={removeFromWishlist} />
    </>
  )
}

export default App
