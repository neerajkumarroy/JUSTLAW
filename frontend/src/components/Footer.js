import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation

// Function to navigate to the home page when the logo is clicked



const Footer = () => {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/'); // Navigates to the home page
    };

    return (
        <footer className="footer">
            <div className="footer-top">
            </div>
            <div className="footer-bottom">
                <div className="footer-content">
                    <div className="footer-section logo-section">
                        <div className="logo-container" onClick={goToHome} style={{ cursor: 'a' }}>
                            <span className="logo-text">JUSTICE<br /> FIRSTLAW</span>
                        </div>                        <p>Seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur pisicin elit, sed do eiusmod tempor.</p>

                    </div>
                    <div className="footer-section links-section">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about-us">About Us</a></li>
                            <li><a href="/contact-us">Contact Us</a></li>
                            <li><a href="/blogs">Blogs</a></li>
                            <li><a href="/services">Services</a></li>
                            <li><a href="/privacy-policies">Privacy Policies</a></li>
                            <li><a href="/cookie-policies">Cookie Policies</a></li>


                        </ul>
                    </div>
                    <div className="footer-section links-section">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="/services">Vehicle Accident</a></li>
                            <li><a href="/services">Civil Rights Law</a></li>
                            <li><a href="/services">Insurance Law</a></li>
                            <li><a href="/services">Criminal Law</a></li>
                            <li><a href="/services">Corporate Law</a></li>
                            <li><a href="/services">Intellectual Property Law</a></li>

                        </ul>
                    </div>
                    <div className="footer-section media-icons-section">
                        <h4>Follow Us</h4>
                        <p>For the latest updates, follow us on social media</p>
                        <div className="social-icons">
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>

                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p style={{ textAlign: 'center' }}>Copyright ©2024 All rights reserved | This template is made with <span>❤️</span> by Neeraj Kumar</p>
            </div>
        </footer>
    );
};

export default Footer;
