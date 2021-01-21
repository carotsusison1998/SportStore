const ProductModel = require('../models/Product');
const db = require('../database/connect');

const getAllProducts = (req, res, next) => {
    const sql = 'SELECT * FROM tbl_products';
    db.query(sql, function (err, result) {
        if (err) throw err;
        return res.status(200).json({
            status: true,
            message: "Get Products Successfully",
            result: result
        })
    });
}
const getDetailProducts = (req, res, next) => {
    const sql = 'SELECT * FROM tbl_products WHERE id = "'+req.params.ID+'" ';
    // const sql = 'SELECT tbl_products.* FROM tbl_products, tbl_images WHERE tbl_products.id = tbl_images.id_product AND tbl_products.id = "'+req.params.ID+'" ';
    db.query(sql, function (err, result) {
        if (err) throw err;
        return res.status(200).json({
            status: true,
            message: "Get Detail Products Successfully",
            result: result
        })
    });
}
const insertProducts = (req, res, next) => {
    const sql = "INSERT INTO tbl_products(name_product, price_product, sale_product, quantity_product, image_product, description_product) VALUES(?,?,?,?,?,?)";
    const sql_images = "INSERT INTO tbl_images(id_product, image, url) VALUES(?,?,?)";
    const data = [ 
        req.body.name_product,
        req.body.price_product,
        req.body.sale_product,
        req.body.quantity_product,
        req.files[0].filename,
        req.body.description_product
    ];
    db.query(sql, data, function (err, result) {
        if (err) throw err;
        if(req.files.length > 1){
            req.files.forEach(element => {
                const data_image = [
                    result.insertId,
                    element.filename,
                    element.path
                ]
                db.query(sql_images, data_image, function (err, results) {
                    if (err) throw err;
                });
            });
            return res.status(200).json({
                status: true,
                message: "Insert Product Successfully",
            })
        }
    });
}

module.exports = {
    getAllProducts,
    getDetailProducts,
    insertProducts,
}