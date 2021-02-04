const db = require('../database/connect');

const getAllBrands = (req, res, next) => {
    const sql = 'SELECT * FROM tbl_brands';
    db.query(sql, function (err, result) {
        if (err) throw err;
        return res.status(200).json({
            status: true,
            message: "Get Brands Successfully",
            result: result
        })
    });
}
insertBrands = (req, res) => {
    const sql = 'SELECT * FROM tbl_brands WHERE name_brand = "'+ req.body.name_brand+'" ';
    db.query(sql, function (err, result) {
        if (err) throw err;
        if(result.length > 0){
            return res.status(400).json({
                status: true,
                message: "Tên thương hiệu đã tồn tại",
            })
        }else{
            const sql = 'INSERT INTO tbl_brands(name_brand, description_brand) VALUES (?, ?)';
            const data = [
                req.body.name_brand,
                req.body.description_brand
            ]
            // db.query(sql, data, (err, result) => {
            //     if(err) throw err;
            //     return res.status(200).json({
            //         status: 200,
            //         message: "thêm tên thương hiệu thành công",
            //         result: result
            //     })
            // })
            return res.status(200).json({
                status: true,
                message: "thêm tên thương hiệu thành công",
                result: result
            })
        }
    });
}

module.exports = {
    getAllBrands,
    insertBrands
}