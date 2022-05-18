'use strict'


const sql = require('../config/config.db');

class Buku {
    constructor (
       id_buku,
       judul_buku,
       gender_buku,
       penulis_buku,
       harga_buku,
       create_at,
       updated_at 
    ) {
        this.id_buku = id_buku;
        this.judul_buku =judul_buku;
        this.gender_buku = gender_buku;
        this.penulis_buku = penulis_buku;
        this.harga_buku = harga_buku;
        this.create_at = create_at;
        this.updated_at = updated_at;
    }

    static showAllBooks(result) {
        let sqlQuery = `SELECT * FROM buku`;
        sql.query(sqlQuery, (err, res) => {
            if (err) {
                console.log('ini error', err);
                result(err, null);
            } else {
                let data = res;
                let banyakBuku = [];
                let buku;
                data.forEach((eachData) => {
                    buku = new Buku (
                        eachData.id_buku,
                        eachData.judul_buku,
                        eachData.gender_buku,
                        eachData.penulis_buku,
                        eachData.harga_buku,
                        eachData.create_at,
                        eachData.updated_at
                    );
                    banyakBuku.push(buku);
                });

                console.log('result', banyakBuku);
                result(null, banyakBuku);

            }
        })
    }
} 


module.exports = Buku;