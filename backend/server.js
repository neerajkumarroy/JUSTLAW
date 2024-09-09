const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mailRoutes = require('./Routes/mailRoutes.js');
const path = require('path');

const app = express(); // Initialize app before using it
const port = process.env.PORT || 6060;

// Middleware to serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use the mail routes
app.use('/', mailRoutes);

// 404 Error handler
process.env.PWD = process.cwd();

app.use(express.static(process.env.PWD + '/build'));

app.get('*', function (req, res) {
    const index = path.join(process.env.PWD, '/build/index.html');
    res.sendFile(index);
});


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
