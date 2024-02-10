import { Link } from "react-router-dom";
import "./Navbar.scss";

import logo from "../assets/images/logo.png";
import { useCookie } from '../Cookie';

function Navbar() {
    const { cookie, setCookieValue } = useCookie();

    return(
        <div className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img
                        className="navbar-logo-image" 
                        src={logo} 
                        alt="logo"/>
                </Link>
            </div>
            <div className="navbar-links">
                <Link to="/" className="navbar-link">Home</Link>
                <Link to="/projects" className="navbar-link">Projects</Link>
                <Link to="/about" className="navbar-link">About</Link>
                <Link to="/contact" className="navbar-link">Contact</Link>


                {cookie === null && (
                    <Link to="/log-in" className="navbar-link">Log in</Link>
                )}
            </div>
        </div>
    )
}

export default Navbar;