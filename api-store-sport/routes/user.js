const express = require('express');
const path = require('path');
const router = express.Router();
const {validateParam, validateBody, schemas} = require('../helpers/routerHelpers');
const userController = require('../controllers/user');

// ALL
router.route('/register')
    .post(validateBody(schemas.userRegister), userController.register)
router.route('/login')
    .post(validateBody(schemas.userLogin), userController.login)
router.route('/verify')
    .get(userController.verifyToken)
router.route('/logout')
    .get(userController.logout)
// // PARAM
// router.route('/:ID')
//     .get(productController.getDetailProducts)


module.exports = router