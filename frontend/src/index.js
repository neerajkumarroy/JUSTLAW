import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CookieConsent from 'react-cookie-consent'; // Import the cookie consent package


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* Overlay for the dark background */}
    <div className="cookieConsentOverlay"></div>

    {/* Cookie Consent Popup */}
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      declineButtonText="Decline"
      enableDeclineButton
      cookieName="myAwesomeCookieConsent"
      expires={365}
      containerClasses="cookieConsentPopup"  // Custom class for popup
      buttonClasses="acceptButton"  // Accept button class
      declineButtonClasses="declineButton" // Decline button class
    >
      This website uses cookies to enhance the user experience.{" "}
      <a href="/privacy-policy">Learn more</a>
    </CookieConsent>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
