const Blog = require('../Models/AddBlogs.js');
const multer = require('multer');
const path = require('path');

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

// In blogController.js
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
// // Middleware to handle file uploads
// app.post('/api/v1/blogs', upload.single('image'), addBlog);
