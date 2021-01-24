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

module.exports = {
    getAllBrands,
}