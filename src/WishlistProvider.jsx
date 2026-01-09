import { createContext, useState, useEffect } from "react";

export const WishlistContext = createContext();

export function WishlistProvider({ children }) {
  const [wishlist, setWishlist] = useState(() => {
    const wishlistSaved = localStorage.getItem("wishlist");
    return wishlistSaved ? JSON.parse(wishlistSaved) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

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