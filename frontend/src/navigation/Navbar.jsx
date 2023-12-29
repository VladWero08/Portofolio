import "./Navbar.scss";

import logo from "../images/logo.png";

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
                <div className="navbar-link">Home</div>
                <div className="navbar-link">Projects</div>
                <div className="navbar-link">About</div>
                <div className="navbar-link">Contact</div>
            </div>
        </div>
    )
}

export default Navbar;