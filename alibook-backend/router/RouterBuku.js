'use strict'

// instal
 const express = require('express');
 const RouterBuku = express.Router();

//  instal controller buku
const { ControllerBuku } = require('../controller/ControllerBuku',)

// endpoint : all buku
RouterBuku.get('/', ControllerBuku.FindAllbanyakBuku);

module.exports = { RouterBuku };


