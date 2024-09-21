const Blog = require('../Models/AddBlogs.js');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Set up multer for file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads'); // Ensure this folder exists
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname)); // Create a unique filename
    }
});

const upload = multer({ storage: storage });

// Add a new blog
exports.addBlog = async (req, res) => {
    try {
        const { title, author, date, category, description } = req.body;
        const imagePath = req.file ? `/uploads/${req.file.filename}` : '';

        const newBlog = new Blog({
            title,
            author,
            date,
            category,
            description,
            image: imagePath,
        });

        const savedBlog = await newBlog.save();
        res.status(201).json(savedBlog);
    } catch (error) {
        console.error('Error adding blog:', error);
        res.status(500).json({ error: 'Failed to add blog' });
    }
};

// Get all blogs
exports.getBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json(blogs);
    } catch (error) {
        console.error('Error retrieving blogs:', error);
        res.status(500).json({ error: 'Failed to retrieve blogs' });
    }
};

// Get a blog by ID
exports.getBlogById = async (req, res) => {
    const { id } = req.params;

    try {
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        return res.status(200).json(blog);
    } catch (error) {
        return res.status(500).json({ message: 'Error fetching blog details' });
    }
};

// Update a blog by ID
exports.updateBlog = async (req, res) => {
    const { id } = req.params;
    const { title, author, date, category, description } = req.body;

    try {
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        const imagePath = req.file ? `/uploads/${req.file.filename}` : blog.image;

        // If there's a new image, delete the old image from the server
        if (req.file && blog.image) {
            const oldImagePath = path.join(__dirname, '..', blog.image);
            if (fs.existsSync(oldImagePath)) {
                fs.unlinkSync(oldImagePath);
            }
        }

        // Update blog fields
        blog.title = title || blog.title;
        blog.author = author || blog.author;
        blog.date = date || blog.date;
        blog.category = category || blog.category;
        blog.description = description || blog.description;
        blog.image = imagePath;

        const updatedBlog = await blog.save();
        res.status(200).json(updatedBlog);
    } catch (error) {
        console.error('Error updating blog:', error);
        res.status(500).json({ message: 'Failed to update blog' });
    }
};

// Delete a blog by ID
exports.deleteBlog = async (req, res) => {
    const { id } = req.params;

    try {
        const blog = await Blog.findById(id);
        if (!blog) {
            return res.status(404).json({ message: 'Blog not found' });
        }

        // Delete blog image from the server
        if (blog.image) {
            const imagePath = path.join(__dirname, '..', blog.image);
            if (fs.existsSync(imagePath)) {
                fs.unlinkSync(imagePath);
            }
        }

        // Use deleteOne instead of remove
        await Blog.deleteOne({ _id: id });
        return res.status(200).json({ message: 'Blog deleted successfully' });
    } catch (error) {
        console.error('Error deleting blog:', error.message); // Log the error message
        return res.status(500).json({ message: 'Failed to delete blog', error: error.message }); // Send the error back
    }
};




