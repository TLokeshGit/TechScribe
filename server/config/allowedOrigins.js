require("dotenv").config();

const allowedOrigins = [
  process.env.BASE_URL_PROD, // Add your frontend origin here
];

module.exports = allowedOrigins;
