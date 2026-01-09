import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react";
import Navbar from "./Navbar.jsx"
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
      <BrowserRouter>
        <Navbar wishlistCount={wishlist.length} />

        <Routes>
          <Route path="/" element={<MovieList />}></Route>
          <Route path="/movie/:id" element={<MovieDetail
            addToWishlist={addToWishlist}
            removeFromWishlist={removeFromWishlist} />}>
          </Route>
          <Route path="/wishlist" element={<Wishlist
            wishlist={wishlist}
            removeFromWishlist={removeFromWishlist} />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
