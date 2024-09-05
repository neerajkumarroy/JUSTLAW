require('dotenv').config();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    port: 465,
    auth: {
        user: process.env.EMAIL, // Replace with your email
        pass: process.env.PASS, // Replace with your email password or app-specific password
    },
});

module.exports = transporter;
