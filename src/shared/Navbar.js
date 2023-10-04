import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';


const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const titleVariants = {
        home: {
            animation: `titleHome 0.5s ease-in-out forwards`
        },
        notHome: {
            animation: `titleNotHome 0.5s ease-in-out forwards`
        }
    };

    const navbarVariants = {
        home: {
            animation: `navbarHome 0.5s ease-in-out forwards`
        },
        notHome: {
            animation: `navbarNotHome 0.5s ease-in-out forwards`
        }
    };

    const setMenuVariants = {
        home: {
            animation: `setMenuHome 0.5s ease-in-out forwards`
        },
        notHome: {
            animation: `setMenuNotHome 0.5s ease-in-out forwards`
        }
    };

    const mainMenuVariants = {
        home: {
            animation: `
            mainMenuPositionHome 0.5s ease-in-out forwards
        `
        },
        notHome: {
            animation: `
            mainMenuPositionNotHome 0.5s ease-in-out forwards
        `
        }
    };

    return (
        <motion.nav
            className={"navbar"}
            initial={false}
            animate={isHomePage ? "home" : "notHome"}
            variants={navbarVariants}
        >
            <motion.div
                className={"title"}
                initial={false}
                animate={isHomePage ? "home" : "notHome"}
                variants={titleVariants}
            >
                {isHomePage ? (
                    <motion>Math Note</motion>
                ) : (
                    <Link to="/">Home</Link>
                )}
            </motion.div>

            <motion.div
                className={'main-menu'}
                initial={false}
                animate={isHomePage ? "home" : "notHome"}
                variants={mainMenuVariants}
            >
                <Link to="/story">Story</Link>
                <Link to="/games">Games</Link>
                <Link to="/terms">Terms</Link>
                <Link to="/minds">Minds</Link>
                <Link to="/tools">Tools</Link>
            </motion.div>

            <motion.div
                className={"set-menu"}
                initial={false}
                animate={isHomePage ? "home" : "notHome"}
                variants={setMenuVariants}
            >
                <Link to="/signin">Sign In</Link>
                <Link to="/signup">Sign Up</Link>
                <Link to="/settings">Settings</Link>
            </motion.div>
        </motion.nav>
    );
 }

export default Navbar;
