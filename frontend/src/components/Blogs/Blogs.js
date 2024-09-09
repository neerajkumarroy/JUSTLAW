import React from 'react';
import './Blogs.css';
import banner from '../../img/criminal.jpg';
import Img1 from '../../img/user1.webp'; // Images for user avatars
import Img2 from '../../img/user2.webp';
import Img3 from '../../img/user3.webp';

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      title: 'Understanding the Preamble of the Indian Constitution',
      description: 'Leveraging DevOps with cloud computing is a game-changer for software development. It accelerates development cycles, enhances collaboration, improves quality, and offers cost efficiency.',
      author: 'Ranjeet Kumar',
      category: 'Criminal Lawyer',
      date: 'Monday, 10 Sept 2024',
      readTime: '3.5 min read',
      image: Img3, // Directly use the imported image variable
      avatar: Img1
    },
    {
      id: 2,
      title: 'Applying Total Experience (TX) Strategy to Application Modernization',
      description: 'Application modernization improves a business’s software delivery performance by updating or upgrading older legacy systems. Using a Total Experience lens for TX components EX, UX, CX, and MX, leads to multiple benefits.',
      author: 'Sarika Kushwaha',
      category: 'Criminal Lawyer',
      date: 'Sunday, 09 Sept 2024',
      readTime: '5.4 min read',
      image: Img2, // Use the correct image variable
      avatar: Img2 // Corrected the avatar image
    },
    {
      id: 2,
      title: 'Applying Total Experience (TX) Strategy to Application Modernization',
      description: 'Application modernization improves a business’s software delivery performance by updating or upgrading older legacy systems. Using a Total Experience lens for TX components EX, UX, CX, and MX, leads to multiple benefits.',
      author: 'Sarika Kushwaha',
      category: 'Criminal Lawyer',
      date: 'Sunday, 09 Sept 2024',
      readTime: '5.4 min read',
      image: Img2, // Use the correct image variable
      avatar: Img2 // Corrected the avatar image
    },
    {
      id: 2,
      title: 'Applying Total Experience (TX) Strategy to Application Modernization',
      description: 'Application modernization improves a business’s software delivery performance by updating or upgrading older legacy systems. Using a Total Experience lens for TX components EX, UX, CX, and MX, leads to multiple benefits.',
      author: 'Sarika Kushwaha',
      category: 'Criminal Lawyer',
      date: 'Sunday, 09 Sept 2024',
      readTime: '5.4 min read',
      image: Img2, // Use the correct image variable
      avatar: Img2 // Corrected the avatar image
    },
    {
      id: 2,
      title: 'Applying Total Experience (TX) Strategy to Application Modernization',
      description: 'Application modernization improves a business’s software delivery performance by updating or upgrading older legacy systems. Using a Total Experience lens for TX components EX, UX, CX, and MX, leads to multiple benefits.',
      author: 'Sarika Kushwaha',
      category: 'Criminal Lawyer',
      date: 'Sunday, 09 Sept 2024',
      readTime: '5.4 min read',
      image: Img2, // Use the correct image variable
      avatar: Img2 // Corrected the avatar image
    },
    {
      id: 2,
      title: 'Applying Total Experience (TX) Strategy to Application Modernization',
      description: 'Application modernization improves a business’s software delivery performance by updating or upgrading older legacy systems. Using a Total Experience lens for TX components EX, UX, CX, and MX, leads to multiple benefits.',
      author: 'Sarika Kushwaha',
      category: 'Criminal Lawyer',
      date: 'Sunday, 09 Sept 2024',
      readTime: '5.4 min read',
      image: Img2, // Use the correct image variable
      avatar: Img2 // Corrected the avatar image
    },
  ];

  return (
    <>
      {/* Banner with Image */}
      <div className="blog-section-banner">
        <img
          className="blog-section-banner-img"
          src={banner}
          alt="Blog Banner"
        />
        <div className="blog-section-banner-overlay">
          <h1>Welcome to Our Blogs</h1>
        </div>
      </div>

      {/* Blogs List */}
      <section className="blog-posts-section">
        <h2>Latest Blogs</h2>
        <div className="blog-posts-container">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-post-card">
              {/* Blog Header */}
              <div className="blog-header">
                <h3>{blog.title}</h3>
                <div className="blog-meta">
                  <img className="author-avatar" src={blog.avatar} alt={blog.author} />
                  <div className="blog-author-info">
                    <p className="author-name">{blog.author}</p>
                    <p className="category">{blog.category}</p>
                    <p className="date">{blog.date}</p>
                    <p className="read-time">{blog.readTime}</p>
                  </div>
                </div>
              </div>

              {/* Blog Image */}
              <img className="blog-post-img" src={blog.image} alt={blog.title} />

              {/* Blog Description */}
              <p>{blog.description}</p>

              {/* View Button */}
              <button className="view-btn">View</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blogs;
