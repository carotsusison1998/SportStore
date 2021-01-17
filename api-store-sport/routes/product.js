const express = require('express');
const multer  = require('multer');
const path = require('path');
const router = express.Router();
const productController = require('../controllers/product');
const {validateParam, validateBody, schemas} = require('../helpers/routerHelpers');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        const filetypes = /jpeg|jpg|png|gif/;
        // Check ext
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        // Check mime
        const mimetype = filetypes.test(file.mimetype);
        if(mimetype && extname){
            const split_image = file.mimetype.split("/");
            const mimetype_image = split_image[split_image.length - 1];
            cb(null, file.fieldname + '-' + Date.now()+"."+mimetype_image);
        }else {
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
        
    }
})
const upload = multer({ storage: storage });

// ALL
router.route('/')
    .get(productController.getAllProducts)
    .post(upload.single('image_product'), (validateBody(schemas.productSchema)), productController.insertProducts)

// PARAM
router.route('/:ID')
    .get(productController.getDetailProducts)


module.exports = router