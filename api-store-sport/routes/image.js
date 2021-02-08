const express = require('express');
const router = express.Router();
const imageController = require("../controllers/image");

// PARAM
router.route('/:ID')
    .get(imageController.getAllImageById)


module.exports = router