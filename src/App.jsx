import { BrowserRouter, Routes, Route } from "react-router-dom"
import {WishlistProvider} from "./WishlistProvider.jsx";
import Navbar from "./Navbar.jsx"
import MovieList from './MovieList.jsx'
import MovieDetail from './MovieDetail.jsx'
import Wishlist from './Wishlist.jsx'


function App() {

  return (
    <>
      <WishlistProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<MovieList />}></Route>
            <Route path="/movie/:id" element={<MovieDetail />}></Route>
            <Route path="/wishlist" element={<Wishlist />}></Route>
          </Routes>

        </BrowserRouter>
      </WishlistProvider>
    </>
  )
}

export default App
