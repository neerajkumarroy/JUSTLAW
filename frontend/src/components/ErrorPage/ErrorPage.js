// src/components/ErrorPage.js
import React from 'react';
import '../ErrorPage/ErrorPage.css'; // Import any CSS file you may want for styling

const ErrorPage = () => {
    return (
        <div className="error-page">
            <h1>404</h1>
            <h2>Page Not Found</h2>
            <p>Sorry, the page you are looking for does not exist.</p>
            <a href="/" className="back-home-btn">Go Back to Home</a>
        </div>
    );
};

export default ErrorPage;
