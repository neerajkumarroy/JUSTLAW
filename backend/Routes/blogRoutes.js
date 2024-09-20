const express = require('express');
const router = express.Router();
const BlogController = require('../Controllers/blogController.js'); // Adjust the path as needed
const upload = require('../Config/multerConfig.js'); // Adjust the path as needed

// Add a new blog
router.post('/blogs', upload.single('image'), BlogController.addBlog);

// Get all blogs
router.get('/blogs', BlogController.getBlogs);

// Route to fetch a single blog by ID
router.get('/blogs/:id', BlogController.getBlogById);


module.exports = router;
