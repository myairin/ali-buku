'use strict'

// class declaration
class Controller {
    static Homepage(req, res) {
        res.send('ini bagian home page controller')
    }
}

module.exports = {
Controller,
}