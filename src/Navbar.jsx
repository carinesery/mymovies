import {useContext} from "react";
import {Link} from "react-router-dom";
import {WishlistContext} from "./WishlistProvider.jsx";

function Navbar() {
    const {wishlist} = useContext(WishlistContext);
    return(
        <nav>
            <Link to="/">Films</Link>
            <Link to="/wishlist">Ma wishlist ({wishlist.length})</Link>
        </nav>
    )
}

export default Navbar