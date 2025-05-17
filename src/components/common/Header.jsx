// src/components/common/Header.jsx
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle'; // We'll create this
import '../../styles/header.css'; // Assuming styles are in src/styles/header.css
// You might want to use icons for the hamburger menu
// import { FiMenu, FiX } from 'react-icons/fi'; // Example

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsHeaderScrolled(true);
            } else {
                setIsHeaderScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header className={`site-header ${isHeaderScrolled ? 'scrolled' : ''} ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`}>
            <div className="container header-container">
                <Link to="/" className="logo" onClick={closeMobileMenu}>
                    AIONXDEV
                </Link>

                <nav className={`main-nav ${isMobileMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li><NavLink to="/" end onClick={closeMobileMenu} className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink></li>
                        <li><NavLink to="/about" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "active" : ""}>About</NavLink></li>
                        <li><NavLink to="/projects" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink></li>
                        <li><NavLink to="/services" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "active" : ""}>Services</NavLink></li>
                        <li><NavLink to="/skills" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "active" : ""}>Skills</NavLink></li>
                        <li><NavLink to="/blog" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "active" : ""}>Blog</NavLink></li>
                        <li><NavLink to="/contact" onClick={closeMobileMenu} className={({ isActive }) => isActive ? "active" : ""}>Contact</NavLink></li>
                    </ul>
                    <div className="header-actions">
                        <DarkModeToggle />
                    </div>
                </nav>

                <div className="header-meta-actions">
                    <div className="mobile-dark-mode-toggle">
                        <DarkModeToggle />
                    </div>
                    <button
                        className="mobile-menu-toggle"
                        onClick={toggleMobileMenu}
                        aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMobileMenuOpen}
                    >
                        {/* Basic Hamburger Icon (can be replaced with SVG or react-icons) */}
                        {/* {isMobileMenuOpen ? <FiX /> : <FiMenu />} */}
                        <span className="hamburger-icon">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;