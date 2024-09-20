require("./Config/AdminConfig.js");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mailRoutes = require('./Routes/mailRoutes.js');
const Admin_route = require('./Routes/AdminSignup.js');

const blogRoutes = require('./Routes/blogRoutes.js'); // Import blog routes
const path = require('path'); // For serving static files, if needed

const app = express(); // Initialize app before using it
const port = process.env.PORT || 6060;

// Middleware to serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Serve the uploads folder statically
app.use('/uploads', express.static('uploads'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/uploads', express.static('uploads'));

// Use the mail routes
app.use('/', mailRoutes);

// Admin Routes
app.use("/api/v1", Admin_route);

// Blog routes
app.use('/api/v1', blogRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
