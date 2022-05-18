'use strict'

// instal mysql
const mysql = require('mysql');

// import db config
const DBConfig = require('./config');

// create connect to database
const connectDB = mysql.createConnection({
    host: DBConfig.HOST,
    user: DBConfig.USER,
    password: DBConfig.PASSWORD,
    database: DBConfig.DB,
})

// create connect mysql
connectDB.connect(err => {
    if (err) throw err ;
        console.log('database ini connect yess', err)
})

// export modul
module.exports = connectDB;