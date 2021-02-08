const db = require('../database/connect');

const getAllImageById = (req, res, next) => {
    const sql = 'SELECT * FROM tbl_images WHERE id_product = "'+req.params.ID+'"';
    console.log(req.param.ID);
    db.query(sql, function (err, result) {
        if (err) throw err;
        return res.status(200).json({
            status: true,
            message: "Get Image Of Product Successfully",
            result: result
        })
    });
}
module.exports = {
    getAllImageById
}