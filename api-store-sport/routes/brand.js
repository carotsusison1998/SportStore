const express = require('express');
const router = express.Router();
const brandController = require('../controllers/brand');
const {validateParam, validateBody, schemas} = require('../helpers/routerHelpers');

// ALL
router.route('/')
    .get(brandController.getAllBrands)



module.exports = router