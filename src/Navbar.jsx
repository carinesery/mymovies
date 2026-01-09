import {Link} from "react-router-dom";

function Navbar({wishlistCount}) {
    return(
        <nav>
            <Link to="/">Films</Link>
            <Link to="/wishlist">Ma wishlist ({wishlistCount})</Link>
        </nav>
    )
}

export default Navbar