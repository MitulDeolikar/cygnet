const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const { EMAIL_CONFIG } = require('../config/config');

router.post('/send-email', async (req, res) => {
    const { name, email, organisation, query } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport(EMAIL_CONFIG);

    try {
        // Send email
        await transporter.sendMail({
            from: EMAIL_CONFIG.auth.user,
            to: EMAIL_CONFIG.auth.user, // Sending email to the same email address for demonstration
            subject: 'New Contact Form Submission',
            html: `
                <h2>New Contact Form Submission</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Organisation:</strong> ${organisation}</p>
                <p><strong>Query:</strong> ${query}</p>
            `
        });

        // If email is sent successfully, respond with a success message
        res.status(200).json({ message: 'Email sent successfully!' });
    } catch (error) {
        // If there's an error sending the email, respond with an error message
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'An error occurred while sending the email.' });
    }
});

module.exports = router;
