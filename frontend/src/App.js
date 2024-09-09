import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home/Home.js';
import Services from './components/ContactUs/ContactUs.js';
import AboutUs from './components/AboutUs/AboutUs.js';
import CaseStudies from './components/Services/Services.js';
import Blogs from './components/Blogs/Blogs.js';
import ErrorPage from './components/ErrorPage/ErrorPage.js';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy.js';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<Services />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<CaseStudies />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/privacy-policies" element={<PrivacyPolicy />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
