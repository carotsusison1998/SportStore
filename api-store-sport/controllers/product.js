const ProductModel = require('../models/Product');
const db = require('../database/connect');

const getAllProducts = (req, res, next) => {
    ProductModel.getAll((err, result) => {
        if(err){
            return res.status(500).json({
                status: false,
                message: "Get All Products Successfully",
                result: err
            })
        }
        return res.status(200).json({
            status: true,
            message: "Get All Products Successfully",
            result: JSON.stringify(result)
        })
    });
}
const getDetailProducts = (req, res, next) => {
    ProductModel.getDetail(req.params.ID, (err, result) => {
        return res.status(200).json({
            status: true,
            message: "Get Detail Products Successfully",
            result: JSON.stringify(result)
        })
    })
}
const insertProducts = (req, res, next) => {
    // console.log(req.body);
    // console.log(req.body);
    // return res.status(200).json({
    //     status: true,
    //     message: "Insert Product Successfully",
    // })
    // ProductModel.insertData(req, (err, result) => {
        // return res.status(200).json({
        //     status: true,
        //     message: "Insert Product Successfully",
        //     result: JSON.stringify(result)
        // })
    // })
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
        // console.log("1 record inserted", result.insertId);
        if(req.files.length > 1){
            req.files.forEach(element => {
                const data_image = [
                    result.insertId,
                    element.filename,
                    element.path
                ]
                db.query(sql_images, data_image, function (err, result) {
                    if (err) throw err;
                });
            });
        }
    });
}

module.exports = {
    getAllProducts,
    getDetailProducts,
    insertProducts,
}