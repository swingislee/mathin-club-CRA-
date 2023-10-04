//src/shared/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';

    return (
        
        <nav className={isHomePage ? "navbar home" : "navbar notHome"}>
            <div className={isHomePage ? "title home" : "title notHome"}>
                {isHomePage ? (
                    <span>Math Note</span>
                ) : (
                    <Link to="/">Home</Link>
                )}
            </div>

            <div className={isHomePage ? "main-menu home" : "main-menu notHome"}>
                <Link to="/story">Story</Link>
                <Link to="/games">Games</Link>
                <Link to="/terms">Terms</Link>
                <Link to="/minds">Minds</Link>
                <Link to="/tools">Tools</Link>
            </div>

            <div className={isHomePage ? "set-menu home" : "set-menu notHome"}>
                <Link to="/signin">Sign In</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/settings">Settings</Link>
            </div>
            </nav>
       
    );
}

export default Navbar;
