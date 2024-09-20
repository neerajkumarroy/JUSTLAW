import React from 'react';
import '../PrivacyPolicy/CookiePolicy.css';

const CookiePolicy = () => {
    return (
        <div className="cookies-policy-container">
            {/* Breadcrumb */}
            <nav aria-label="breadcrumb" className="breadcrumb-container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="/">Home</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Cookies Policy</li>
                </ol>
            </nav>

            {/* Cookies Policy Content */}
            <h1>Cookies Policy</h1>
            <p>This Cookies Policy explains how <strong>JUSTICE FIRSTLAW</strong> (“we”, “us”, or “our”) uses cookies and similar technologies on our website, <a href="https://justicefirstlaw.com">https://justicefirstlaw.com</a>, and other sites we own and operate.</p>

            <h2>What Are Cookies?</h2>
            <p>Cookies are small pieces of data stored on your device when you visit our website. They help us improve your experience by remembering your preferences and enabling certain features of the website.</p>

            <h2>Types of Cookies We Use</h2>
            <ul>
                <li><strong>Essential Cookies</strong>: These cookies are necessary for the website to function properly and cannot be turned off.</li>
                <li><strong>Performance Cookies</strong>: These cookies help us understand how visitors interact with our site, allowing us to improve user experience.</li>
                <li><strong>Functional Cookies</strong>: These cookies allow the website to remember your preferences and customize your experience.</li>
                <li><strong>Targeting Cookies</strong>: These cookies are used to deliver personalized advertisements relevant to you and your interests.</li>
            </ul>

            <h2>How We Use Cookies</h2>
            <p>We use cookies for a variety of purposes, including:</p>
            <ul>
                <li>Ensuring our website operates properly.</li>
                <li>Storing your preferences for future visits.</li>
                <li>Analyzing site performance and improving functionality.</li>
                <li>Providing personalized content and ads.</li>
            </ul>

            <h2>Managing Cookies</h2>
            <p>You have the option to accept or reject cookies when you first visit our website. You can also manage your cookie preferences by adjusting your browser settings. Please note that disabling certain cookies may affect your experience on our site.</p>

            <h2>Changes to This Cookies Policy</h2>
            <p>We may update this Cookies Policy from time to time to reflect changes in how we use cookies. Please review this policy periodically for any updates.</p>

            <h2>Contact Us</h2>
            <p>If you have any questions or concerns regarding our use of cookies, you can contact us at:</p>
            <p><strong>JUSTICE FIRSTLAW</strong></p>
            <p>Email: <a href="mailto:info@justicefirstlaw.com">info@justicefirstlaw.com</a></p>
            <p>This policy is effective as of 10 Sept 2024.</p>
        </div>
    );
};

export default CookiePolicy;
