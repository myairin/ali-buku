'use strict'

// instal  dotenv
require('dotenv').config();

// create connect to database
module.exports = {
    HOST: process.env.HOST,
    USER: process.env.USER,
    PASSWORD: process.env.PASSWORD,
    DB: process.env.DB,
}
