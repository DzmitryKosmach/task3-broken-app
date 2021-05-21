const dotenv = require('dotenv');
const path = require('path');

dotenv.config({
  path: path.join(__dirname, '../.env')
});

module.exports = {
  USER: process.env.DB_USER,
  PASSWORD: process.env.DB_PASSWORD  
};
