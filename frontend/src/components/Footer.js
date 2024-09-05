import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top">
            </div>
            <div className="footer-bottom">
                <div className="footer-content">
                    <div className="footer-section logo-section">
                        <img src="https://preview.colorlib.com/theme/justlaw/assets/img/logo/logo.png" alt="Just Law Logo" className="logo" />
                        <p>Seddo eiusmod tempor incididunt ut labore et dolore magna aliqua. consectetur pisicin elit, sed do eiusmod tempor.</p>

                    </div>
                    <div className="footer-section links-section">
                        <h4>Company</h4>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about-us">About Us</a></li>
                            <li><a href="/browse-pets">Browse Pets</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/contact-us">Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="footer-section links-section">
                        <h4>Services</h4>
                        <ul>
                            <li><a href="#">O’Connor Group</a></li>
                            <li><a href="#">Our Business Model</a></li>
                            <li><a href="#">Our Lawyers Team</a></li>
                            <li><a href="#">Most Recent Cases</a></li>
                            <li><a href="#">Hot Lawyers News</a></li>
                        </ul>
                    </div>
                    <div className="footer-section media-icons-section">
                        <h4>Follow Us</h4>
                        <p>For the latest updates, follow us on social media</p>
                        <div className="social-icons">
                            <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
                            <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
                            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
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
