'use strict';

//instal
const express = require('express');
const router = express.Router();
const  { Controller } = require('../controller/Controller');
const { RouterBuku } = require('./RouterBuku');


router.get('/', Controller.Homepage);
router.use('/buku', RouterBuku); 

module.exports = { router };