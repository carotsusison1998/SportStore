const db = require('../database/connect');

const Product = {
	getAll: async function(callback){
        const sql = "SELECT * FROM tbl_products";
        return await db.query(sql, callback);
    },
    getDetail: async function(id, callback){
        const sql = 'SELECT * FROM tbl_products WHERE id = "'+id+'" ';
        return await db.query(sql, callback);
    },
    insertData: async function(req, callback){
        const sql = "INSERT INTO tbl_products(name_product, price_product, sale_product, quantity_product, image_product, description_product) VALUES(?,?,?,?,?,?)";
        const data = [ 
            req.body.name_product,
            req.body.price_product,
            req.body.sale_product,
            req.body.quantity_product,
            req.files[0].filename,
            req.body.description_product
        ];
        const result = await db.query(sql, data, function(err, results, fields){
            if (err) throw err.stack;
            console.log('Them thanh cong ban ghi co id = ' + results);
            console.log('Them thanh cong ban ghi co id = ' + fields);
        });
    }
};
module.exports = Product;