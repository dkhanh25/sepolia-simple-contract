const dotenv = require('dotenv');
dotenv.config();

module.exports = { 
    PERSONAL_MNEUMONIC: process.env.PERSONAL_MNEUMONIC, 
    PROVIDER_URL: process.env.PROVIDER_URL 
};