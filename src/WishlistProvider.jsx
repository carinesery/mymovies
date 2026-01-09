import { createContext, useState } from "react";

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (movie) => {
    if (!wishlist.some((item) => item.id === movie.id)) {
      setWishlist([...wishlist, movie]);
    }
  };

  const removeFromWishlist = (movieId) => {
    setWishlist(wishlist.filter((item) => item.id !== movieId));
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }}>
      {children}
    </WishlistContext.Provider>
  );
}