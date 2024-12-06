// config.js


require('dotenv').config(); // Load environment variables from .env file

const EMAIL_CONFIG = {
    service: 'Gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
};

module.exports = { EMAIL_CONFIG };
