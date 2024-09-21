import React, { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Add_Blogs.css';

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

    // Updated modules and formats for the toolbar
    const modules = {
        toolbar: [
            [{ 'header': [1, 2, 3, false] }], // Heading levels (h1, h2, h3)
            [{ 'font': [] }], // Font family
            [{ 'size': [] }], // Font size
            ['bold', 'italic', 'underline', 'strike'], // Bold, italic, underline, strikethrough
            [{ 'color': [] }, { 'background': [] }], // Text color and background color
            [{ 'script': 'sub' }, { 'script': 'super' }], // Subscript/Superscript
            [{ 'list': 'ordered' }, { 'list': 'bullet' }], // Ordered and bullet lists
            [{ 'indent': '-1' }, { 'indent': '+1' }], // Indent/outdent
            [{ 'align': [] }], // Text alignment
            ['link', 'image', 'video'], // Link, image, and video upload
            ['blockquote', 'code-block'], // Blockquote and code block
            ['clean'] // Remove formatting
        ]
    };

    const formats = [
        'header', 'font', 'size',
        'bold', 'italic', 'underline', 'strike',
        'color', 'background',
        'script', 'sub', 'super',
        'list', 'bullet', 'indent', 'align',
        'link', 'image', 'video',
        'blockquote', 'code-block'
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
            <h1 className="admin-blogs-title">Add New Blog</h1>
            <form onSubmit={handleSubmit} encType="multipart/form-data" className="admin-blogs-form">
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={blogData.title}
                        onChange={handleChange}
                        required
                        className="form-control"
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
                        className="form-control"
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
                        className="form-control"
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
                        className="form-control"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <ReactQuill
                        ref={quillRef}
                        theme="snow"
                        value={blogData.description}
                        onChange={handleDescriptionChange}
                        modules={modules}
                        formats={formats}
                        className="quill-editor"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="image">Image:</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        onChange={handleChange}
                        className="form-control"
                    />
                </div>
                <button className="btn btn-primary" type="submit">Add Blog</button>
                {message && <p className="message">{message}</p>}
            </form>
        </div>
    );
};

export default AdminBlogs;
