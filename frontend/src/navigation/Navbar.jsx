import { Link } from "react-router-dom";
import "./Navbar.scss";

import logo from "../assets/images/logo.png";

function Navbar() {
    return(
        <div className="navbar">
            <div className="navbar-logo">
                <img
                    className="navbar-logo-image" 
                    src={logo} 
                    alt="logo"/>
            </div>
            <div className="navbar-links">
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/projects" className="navbar-link">Projects</Link>
                <Link to="/about" className="navbar-link">About</Link>
                <Link to="/contact" className="navbar-link">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar;