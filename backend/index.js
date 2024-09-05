// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mailRoutes = require('./Routes/mailRoutes.js');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use the mail routes
app.use('/', mailRoutes);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
