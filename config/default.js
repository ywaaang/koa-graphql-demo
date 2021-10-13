
const dotenv = require("dotenv");
// load env variables
dotenv.config()

const config = {
  // starting port
  port: process.env.PORT || 8888,
  // db config
  database: {
    DATABASE: process.env.DB_NAME,
    USERNAME: process.env.DB_USER,
    PASSWORD: process.env.DB_PASS,
    PORT: process.env.DB_PORT,
    HOST: process.env.DB_HOST,
  }
}

module.exports = config