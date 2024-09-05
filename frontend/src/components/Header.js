import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faUserCircle } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);

    // Close the navigation menu when navigating to a new page
    useEffect(() => {
        const closeNav = () => setIsNavOpen(false);
        window.addEventListener('popstate', closeNav); // Close nav on back/forward navigation
        return () => window.removeEventListener('popstate', closeNav);
    }, []);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const toggleContact = () => {
        setIsContactOpen(!isContactOpen);
    };

    return (
        <header className="header">
            <div className="logo-container">
                <img src="https://preview.colorlib.com/theme/justlaw/assets/img/logo/logo.png" alt="Logo" className="logo" />
            </div>

            <div className="contact-icon-container" onClick={toggleContact}>
                <FontAwesomeIcon icon={faUserCircle} className="contact-icon" />
            </div>

            <div className={`contact-details ${isContactOpen ? 'show' : ''}`}>
                <div className="contact-item">
                    <FontAwesomeIcon icon={faPhone} className="icon" />
                    <a href="tel:+8445150766">8445150766</a>
                </div>
                <div className="contact-item">
                    <FontAwesomeIcon icon={faEnvelope} className="icon" />
                    <a href="mailto:neerajkumar@test.com">neerajkumar@test.com</a>
                </div>
            </div>

            <button className="nav-toggle" onClick={toggleNav}>
                ☰
            </button>
            <nav className={`nav ${isNavOpen ? 'nav-open' : ''}`}>
                <ul className="nav-list" onClick={() => setIsNavOpen(false)}>
                    <li className="nav-item"><a href="/">Home</a></li>
                    <li className="nav-item"><a href="/contact-us">Contact Us</a></li>
                    <li className="nav-item"><a href="/about-us">About Us</a></li>
                    <li className="nav-item"><a href="/case-studies">Case Studies</a></li>
                    <li className="nav-item"><a href="/blogs">Blogs</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
