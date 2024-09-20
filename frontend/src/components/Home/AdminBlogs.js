import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './AdminBlogs.css';

const base_Url = 'https://justlaw-backend.onrender.com'; // Update this URL to your backend server


const AdminBlogs = () => {
    const [blogData, setBlogData] = useState({
        title: '',
        date: '',
        author: '',
        category: '',
        description: '',
        image: null
    });

    const [message, setMessage] = useState('');
    const quillRef = useRef(null); // Create a ref for ReactQuill

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setBlogData((prev) => ({
            ...prev,
            [name]: name === 'image' ? files[0] : value
        }));
    };

    const handleDescriptionChange = (content) => {
        setBlogData((prev) => ({
            ...prev,
            description: content
        }));
    };

    // Updated modules and formats
    const modules = {
        toolbar: [
            [{ 'size': [] }], // Font size
            ['bold', 'italic', 'underline'], // Bold, italic, underline
            [{ 'color': [] }], // Text color
            [{ 'list': 'ordered' }, { 'list': 'bullet' }], // Ordered and bullet lists
            ['image'], // Image upload
            ['clean'] // Remove formatting
        ],
    };

    const formats = [
        'size', 'bold', 'italic', 'underline',
        'color', 'list', 'bullet', 'image'
    ];

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        Object.keys(blogData).forEach((key) => {
            formData.append(key, blogData[key]);
        });

        try {
            const response = await fetch(`${base_Url}/api/v1/blogs`, {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                const errorResult = await response.json();
                setMessage('Failed to add blog: ' + errorResult.error);
            } else {
                setMessage('Blog added successfully!');
                setBlogData({
                    title: '',
                    date: '',
                    author: '',
                    category: '',
                    description: '',
                    image: null
                });
            }
        } catch (error) {
            console.error('Error:', error);
            setMessage('An error occurred while adding the blog.');
        }
    };

    return (
        <div className="admin-blogs-container">
            <h1>Add New Blog</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={blogData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="date">Date:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={blogData.date}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author:</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={blogData.author}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={blogData.category}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <ReactQuill
                        ref={quillRef} // Assign the ref here
                        theme="snow"
                        value={blogData.description}
                        onChange={handleDescriptionChange}
                        modules={modules}
                        formats={formats}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image:</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleChange}
                    />
                </div>
                <button className='Add-Blog-button' type="submit">Add Blog</button>
                {message && <p className="message">{message}</p>}
            </form>
        </div>
    );
};

export default AdminBlogs;
