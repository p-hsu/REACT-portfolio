import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <ul className="sidenav sidenav-fixed white hide-on-small-only" id="main-nav">
            <li id="logo-container">
                <Link to="/" aria-label="Navigate to top of page" className="brand-logo">
                    <img className="circle" id="logo-photo" alt="Pamela Hsu" src="./assets/images/profile-photo-md.png" />
                    <h4 className="blue-grey-text text-darken-2">Pamela Hsu
                        <span className="teal-text text-darken-2">Fullstack Developer</span>
                    </h4>
                </Link>
            </li>  
            <li><Link aria-label="Navigate to About Me section" to="/about"><i className="fas fa-user-circle fa-lg"></i>About Me</Link></li>
            <li><Link aria-label="Navigate to Projects section" to="/projects"><i className="fas fa-project-diagram fa-sm"></i>Projects</Link></li>
            <li><Link aria-label="Navigate to Contact section" to="/contact"><i className="fas fa-paper-plane fa-lg"></i>Contact</Link></li>
            <li><a aria-label="Navigate to resume PDF download" href="./assets/PDF/Web Dev resume.pdf" download><i className="fas fa-file-download fa-lg"></i>Resume</a></li>
        </ul>
    );
}

export default Navbar;