import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WishlistProvider } from "./WishlistProvider.jsx";
import Navbar from "./Navbar.jsx";
import MovieList from './MovieList.jsx';
import MovieDetail from './MovieDetail.jsx';
import Wishlist from './Wishlist.jsx';
import styles from "./App.module.css";


function App() {

  return (
    <div className={styles.appContainer}>
      <WishlistProvider>
        <BrowserRouter>
          <Navbar />
          <div className={styles.content}>
            <Routes>
              <Route path="/" element={<MovieList />}></Route>
              <Route path="/movie/:id" element={<MovieDetail />}></Route>
              <Route path="/wishlist" element={<Wishlist />}></Route>
            </Routes>

          </div>

        </BrowserRouter>
      </WishlistProvider>
    </div>
  )
}

export default App
