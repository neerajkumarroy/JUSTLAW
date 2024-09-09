const transporter = require('../Config/mailConfig.js');

exports.sendEmail = (req, res) => {
    const { name, phone, select, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'datastringneeraj@gmail.com',
        subject: 'New Contact Form Submission',
        html: `
            <h2>New Contact Form Submission from JUSTIC FIRSTLAW</h2>
            <table border="1" cellpadding="10" cellspacing="0" style="border-collapse: collapse; width: 100%;">
                <tr>
                    <th>Name</th><td>${name}</td>
                </tr>
                <tr>
                    <th>Phone</th><td>${phone}</td>
                </tr>
                <tr>
                    <th>Selected Option</th><td>${select}</td>
                </tr>
                <tr>
                    <th>Email</th><td>${email}</td>
                </tr>
                <tr>
                    <th>Message</th><td>${message}</td>
                </tr>
            </table>
            <br>
            <p>Best regards,</p>
            <p><strong>JUSTIC FIRSTLAW</strong></p>
            <p>We are committed to providing exceptional legal services and advice. Contact us for a free consultation.</p>
            <p><i>This email was sent by JUSTIC FIRSTLAW's contact form.</i></p>
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send(error.toString());
        }
        res.status(200).send('Email sent: ' + info.response);
    });
};
