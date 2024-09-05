import React from 'react';
import './ContactUs.css';
import bannerimg from '../../img/home-banner-1.jpg';
import ContactForm from './../Home/ContactForm.js';
import AnimationWorkFromClient from '../Animation/Testimonial.js';

const ContactUs = () => {
  return (
    <div>
      <div className="about-banner">
        <img src={bannerimg} alt="Law Firm Banner" />
        <div className="banner-overlay">
          <h1>Contact Us</h1>
          <p>Mollit anim laborum duis adseu dolor iuyn voluptcate velit ess<br /> cillum dolore egru lofrre dsu.</p>
        </div>
      </div>
      {/* Why Choose Us? Section */}
      <div className="choose-us-section contact-form-container">
        <h2>Why Choose Us?</h2>
        <blockquote>
          "Our professional leadership team is truly committed to producing the best results<br /> for our clients very successfully."
        </blockquote>
        <p>
          Bring to the table win-win survival strategies to ensure proactive domination. At the end of<br /> the day, going forward,
          a new normal that has evolved from generation X is on the runway workplace diversity and .
        </p>
        <a href="/learn-more" className="learn-more-btn">Learn More</a>
      </div>
      <ContactForm />
      <AnimationWorkFromClient />


    </div>
  )
}

export default ContactUs;
