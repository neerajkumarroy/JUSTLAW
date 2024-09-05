// controllers/mailController.js
const transporter = require('../Config/mailConfig.js');

exports.sendEmail = (req, res) => {
    const { name, phone, select, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'datastringneeraj@gmail.com',
        subject: 'New Contact Form Submission',
        text: `
            Name: ${name}
            Phone: ${phone}
            Selected Option: ${select}
            Email: ${email}
            Message: ${message}
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
};
