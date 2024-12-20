import { NavLink } from "react-router-dom";
import '../index.css';

function NavBar() {
    return (
        <nav>
            <NavLink to="/" className={({isActive})=> isActive? "active" : ""}>Home</NavLink>
            <NavLink to="/shop" className={({isActive})=> isActive? "active" : ""}>Webshop</NavLink> 
            <NavLink to="/about" className={({isActive})=> isActive? "active" : ""}>About</NavLink>
            <NavLink to="/contact" className={({isActive})=> isActive? "active" : ""}>Contact</NavLink>
            <NavLink to="/cart" className={({isActive})=> isActive? "active" : ""}>Cart</NavLink>
        </nav>
    );
}

export default NavBar;