import {useContext} from "react";
import {Link} from "react-router-dom";
import {WishlistContext} from "./WishlistProvider.jsx";
import styles from "./Navbar.module.css";

function Navbar() {
    const {wishlist} = useContext(WishlistContext);
    return(
        <nav className={styles.nav}>
            <Link className={styles.link} to="/">Films</Link>
            <Link className={styles.link} to="/wishlist">Ma wishlist ({wishlist.length})</Link>
        </nav>
    )
}

export default Navbar