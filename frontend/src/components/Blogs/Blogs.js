import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Blogs.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import banner from '../../img/criminal.jpg';

const base_Url = 'https://justlaw-backend.onrender.com';

const Blogs = () => {
  const [blogsData, setBlogsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${base_Url}/api/v1/blogs`);
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        setBlogsData(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const handleReadMore = (id) => {
    navigate(`/blogs/${id}`);
  };

  // Function to remove HTML tags
  const stripHtmlTags = (text) => {
    return text.replace(/<\/?[^>]+(>|$)/g, "");
  };

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

      {/* Blogs Section */}
      <div className="blog-posts-container">
        {loading && <p>Loading blogs...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && blogsData.length > 0 ? (
          blogsData.map((blog) => (
            <div key={blog._id} className="blog-post-card">
              <img
                src={`${base_Url}${blog.image}`}
                alt={blog.title}
                className="blog-post-img"
              />
              <div className="blog-header">
                <p className="blog-meta">
                  <span className="blog-date">
                    <FontAwesomeIcon icon={faCalendarAlt} />
                    {new Date(blog.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </span>
                  <span className="blog-category"> | {blog.category}</span>
                  <span className="blog-author">
                    <FontAwesomeIcon icon={faUser} /> {blog.author}
                  </span>
                </p>
                <h3>{blog.title}</h3>
                <p>{stripHtmlTags(blog.description.slice(0, 150))}...</p> {/* Display a short description */}
                <button className="read-more-btn" onClick={() => handleReadMore(blog._id)}>
                  Read More
                </button>
              </div>
            </div>
          ))
        ) : (
          !loading && <p>No blogs available.</p>
        )}
      </div>
    </>
  );
};

export default Blogs;
