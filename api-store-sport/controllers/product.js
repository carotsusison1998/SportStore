const ProductModel = require('../models/Product');

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
    console.log(req.body);
    console.log(req.file);
    return res.status(200).json({
        status: true,
        message: "Insert Product Successfully",
    })
   
    // ProductModel.insertData(req.body, (err, result) => {
    //     return res.status(200).json({
    //         status: true,
    //         message: "Insert Product Successfully",
    //         result: JSON.stringify(result)
    //     })
    // })
}

module.exports = {
    getAllProducts,
    getDetailProducts,
    insertProducts,
}