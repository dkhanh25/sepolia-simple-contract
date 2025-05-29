const dotenv = require('dotenv');
dotenv.config();

module.exports = { 
    PERSONAL_MNEMONIC: process.env.PERSONAL_MNEMONIC, 
    PROVIDER_URL: process.env.PROVIDER_URL 
};