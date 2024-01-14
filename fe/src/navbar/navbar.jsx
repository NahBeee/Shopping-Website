import { Link } from "react-router-dom";
import "./navbar.css";


const NavBar = () => {
    return (
        <>
            <nav className="navbar">
                <Link to="/">Home</Link>
                <Link to="/fruits">Product</Link>
                <Link to="/cart">Checkout</Link>
            </nav>
        </>
    );
}
 
export default NavBar;