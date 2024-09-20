import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BlogDetails.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faUser, faFolder } from '@fortawesome/free-solid-svg-icons';

const BlogDetails = () => {
    const { id } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBlogDetails = async () => {
            try {
                const response = await fetch(`http://localhost:7070/api/v1/blogs/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch blog details');
                }
                const data = await response.json();
                setBlog(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchBlogDetails();
    }, [id]);

    if (loading) {
        return <div className="loading-message">Loading...</div>;
    }

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    return (
        <div className="blog-details-container">
            {blog ? (
                <>
                    <div className="blog-header-section">
                        <h1 className="blog-title-text">{blog.title}</h1>
                        <div className="blog-meta-info">
                            <span className="blog-date-info">
                                <FontAwesomeIcon icon={faCalendarAlt} />
                                {new Date(blog.date).toLocaleDateString('en-US', {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                })}
                            </span>
                            <span className="blog-author-info">
                                <FontAwesomeIcon icon={faUser} /> {blog.author}
                            </span>
                            <span className="blog-category-info">
                                <FontAwesomeIcon icon={faFolder} /> {blog.category}
                            </span>
                        </div>
                    </div>
                    <img src={`http://localhost:7070${blog.image}`} alt={blog.title} className="blog-detail-image" />
                    <div className="blog-content-section" dangerouslySetInnerHTML={{ __html: blog.description }}></div>
                </>
            ) : (
                <p>Blog not found</p>
            )}
        </div>
    );
};

export default BlogDetails;
