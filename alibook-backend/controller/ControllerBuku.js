'use strict'

const { Buku } = require('../model/Buku');

class ControllerBuku {
    static FindAllbanyakBuku(req, res) {
        Buku.showAllBooks((err, data) => {
            if (err) {
                console.log('controller error');
            } else {
                res.json({
                    title: 'backend toko Buku',
                    pesan: 'koleksi buku bekas',
                    status: 4040,
                    data,
                });
            }
        })
    }
    
}

module.exports = { ControllerBuku };