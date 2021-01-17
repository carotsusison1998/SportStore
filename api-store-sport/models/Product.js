const db = require('../database/connect');

const Product = {
	getAll: async function(callback){
        const sql = "SELECT * FROM tbls_products";
        return await db.query(sql, callback);
    },
    getDetail: async function(id, callback){
        const sql = 'SELECT * FROM tbl_products WHERE id = "'+id+'" ';
        return await db.query(sql, callback);
    },
    insertData: async function(body, callback){
        const sql = "INSERT INTO tbl_products(name_product, price_product, sale_product, quantity_product, image_product, description_product) VALUES(?,?,?,?,?,?)";
        const data = [ 
            body.name_product,
            body.price_product,
            body.sale_product,
            body.quantity_product,
            body.image_product,
            body.description_product
        ];
        return await db.query(sql, data, callback);
    }
};
module.exports = Product;