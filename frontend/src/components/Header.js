import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [isContactOpen, setIsContactOpen] = useState(false);
    const navigate = useNavigate(); // Initialize navigate
    // login
    const auth = localStorage.getItem('user');
    const authObj = JSON.parse(auth);
    const logout = () => {
        localStorage.clear();
        navigate('/admin/login');
    };


    // Close the navigation menu when navigating to a new page
    useEffect(() => {
        const closeNav = () => setIsNavOpen(false);
        window.addEventListener('popstate', closeNav); // Close nav on back/forward navigation
        return () => window.removeEventListener('popstate', closeNav);
    }, []);

    // Close nav when clicking outside of it
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.nav') && !event.target.closest('.nav-toggle')) {
                setIsNavOpen(false);
            }
        };

        if (isNavOpen) {
            document.addEventListener('click', handleClickOutside);
        }

        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isNavOpen]);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    const toggleContact = () => {
        setIsContactOpen(!isContactOpen);
    };

    // Function to navigate to the home page when the logo is clicked
    const goToHome = () => {
        navigate('/'); // Navigates to the home page
    };

    return (
        <header className="header">
            <div className="logo-container" onClick={goToHome} style={{ cursor: 'pointer' }}>
                <span className="logo-text">JUSTICE<br /> FIRSTLAW</span>
            </div>


            <div className="contact-icon-container" onClick={toggleContact}>
                <FontAwesomeIcon icon={faPhone} className="contact-icon" />
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
                <ul className="nav-list">
                    <li className="nav-item" onClick={() => setIsNavOpen(false)}><a href="/">Home</a></li>
                    <li className="nav-item" onClick={() => setIsNavOpen(false)}><a href="/contact-us">Contact Us</a></li>
                    <li className="nav-item" onClick={() => setIsNavOpen(false)}><a href="/about-us">About Us</a></li>
                    <li className="nav-item" onClick={() => setIsNavOpen(false)}><a href="/services">Services</a></li>
                    <li className="nav-item" onClick={() => setIsNavOpen(false)}><a href="/blogs">Blogs</a></li>
                    {auth ? (
                        <li className="nav-item"><Link onClick={() => { logout(); toggleNav(); }} to="/admin/login">Logout ({authObj.name})</Link></li>
                    ) : (
                        <li className="nav-item"><Link to="/admin/login" onClick={toggleNav}>Admin Login</Link></li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
