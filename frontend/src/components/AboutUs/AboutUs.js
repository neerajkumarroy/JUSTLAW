import React from 'react';
import AnimationWorkFromClient from '../Animation/Testimonial.js';
import './AboutUs.css';
import bannerimg from '../../img/home-banner-1.jpg';
import img from '../../img/img12.webp';

const AboutUs = () => {
    return (
        <div className="about-container">
            {/* Banner Section */}
            <div className="about-banner">
                <img src={bannerimg} alt="Law Firm Banner" className="banner-image" />
                <div className="banner-overlay">
                    <h1 style={{ color: '#fff' }}>About Us</h1>
                    <p className="typewriter-text">
                        Discover who we are and what drives us<br /> to deliver exceptional service and value.
                    </p>
                </div>
            </div>

            {/* Lawyer Profile Section */}
            <div className="lawyer-profile">
                <div className="profile-image">
                    <img src={img} alt="Lawyer" className="lawyer-img" />
                    <div className="experience">
                        <div className="experience-box">
                            <h2>15</h2>
                            <p>Years of Experience</p>
                        </div>
                    </div>
                </div>
                <div className="profile-details">
                    <h2>Why You Need the Top<br /> Lawyers in O’Renders</h2>
                    <h3>
                        "Our professional leadership team is truly committed to producing the best results for our clients very successfully."
                    </h3>
                    <p>
                        Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward,
                        a new normal that has evolved from generation X is on the runway workplace diversity and empowerment.
                    </p>
                </div>
            </div>
            <AnimationWorkFromClient />
            {/* Why Choose Us? Section */}
            <div className="choose-us-section">
                <h2>Why Choose Us?</h2>
                <blockquote>
                    "Our professional leadership team is truly committed to producing the best results<br /> for our clients very successfully."
                </blockquote>
                <p>
                    Bring to the table win-win survival strategies to ensure proactive domination. At the end of<br /> the day, going forward,
                    a new normal that has evolved from generation X is on the runway workplace diversity and empowerment.
                </p>
                <a href="/" className="learn-more-btn">Learn More</a>
            </div>
        </div>
    );
};

export default AboutUs;
