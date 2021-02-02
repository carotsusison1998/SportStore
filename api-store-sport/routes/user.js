const express = require('express');
const path = require('path');
const router = express.Router();
const {validateParam, validateBody, schemas} = require('../helpers/routerHelpers');
const userController = require('../controllers/user');

// ALL
router.route('/register')
    .post(userController.register)
// router.route('/login')
//     .post(userController.login)
// router.route('/verify')
//     .get(userController.verifyToken)
// // PARAM
// router.route('/:ID')
//     .get(productController.getDetailProducts)


module.exports = router