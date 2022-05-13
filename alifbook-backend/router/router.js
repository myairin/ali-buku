'use strict';

//instal
const express = require('express');
const router = express.router();

router.get('/', (req, res) => {
    res.send('ini saya')
})

module.exports = router;