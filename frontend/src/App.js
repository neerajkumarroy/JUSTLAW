import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Home from './components/Home/Home.js';
import ContactUs from './components/ContactUs/ContactUs.js';
import AboutUs from './components/AboutUs/AboutUs.js';
import Services from './components/Services/Services.js';
import Blogs from './components/Blogs/Blogs.js';
import BlogsDetails from './components/Blogs/BlogDetails.js';

import ErrorPage from './components/ErrorPage/ErrorPage.js';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy.js';
import CookiePolicy from './components/PrivacyPolicy/CookiePolicy.js';
import PrivateComponent from './components/Admin/PrivateComponent.js';
import AdminLogin from './components/Admin/AdminLogin.js';
import AdminBlogs from './components/Admin/AdminBlogs.js';


const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogsDetails />} />

          <Route path="/privacy-policies" element={<PrivacyPolicy />} />
          <Route path="/cookie-policies" element={<CookiePolicy />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="*" element={<ErrorPage />} />

          {/* Protect the Admin routes using the PrivateComponent component */}
          <Route
            path="/admin"
            element={
              <PrivateComponent>
                <AdminBlogs />
              </PrivateComponent>
            }
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
