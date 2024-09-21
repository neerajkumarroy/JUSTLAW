import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Blogs/Delete_Update_Blogs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

const base_Url = "https://justlaw-backend.onrender.com";

const Delete_UpdateBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const response = await fetch(`${base_Url}/api/v1/blogs`);
                if (!response.ok) {
                    throw new Error("Failed to fetch blogs");
                }
                const data = await response.json();
                setBlogs(data);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };

        fetchBlogs();
    }, []);

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this blog?")) {
            try {
                const response = await fetch(`${base_Url}/api/v1/blogs/${id}`, {
                    method: "DELETE",
                });

                console.log('Delete response:', response); // Log the response

                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(errorData.message || "Failed to delete blog");
                }

                // Update the state only if deletion was successful
                setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== id));
            } catch (error) {
                alert(`Error: ${error.message}`);
            }
        }
    };

    const handleEdit = (id) => {
        navigate(`/admin/blogs/edit/${id}`);
    };

    if (loading) {
        return <div className="loading-message">Loading...</div>;
    }

    if (error) {
        return <div className="error-message">{error}</div>;
    }

    return (
        <div className="admin-blogs-container">
            <h1 className="admin-blogs-title">Manage Blogs</h1>
            <table className="blogs-table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Date</th>
                        <th>Author</th>
                        <th>Category</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog) => (
                        <tr key={blog._id}>
                            <td>{blog.title}</td>
                            <td>
                                {new Date(blog.date).toLocaleDateString("en-US", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric",
                                })}
                            </td>
                            <td>{blog.author}</td>
                            <td>{blog.category}</td>
                            <td className="actions-column">
                                <button
                                    className="edit-button"
                                    onClick={() => handleEdit(blog._id)}
                                >
                                    <FontAwesomeIcon icon={faEdit} /> Edit
                                </button>
                                <button
                                    className="delete-button"
                                    onClick={() => handleDelete(blog._id)}
                                >
                                    <FontAwesomeIcon icon={faTrash} /> Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Delete_UpdateBlogs;
