const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mailRoutes = require('./Routes/mailRoutes.js');
const path = require('path');

const app = express(); // Initialize app before using it
const port = 5000;

// Middleware to serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use the mail routes
app.use('/', mailRoutes);

// 404 Error handler
app.get('/', (req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'build', 'index.html')); // Set the status code to 404
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
