const joi = require('joi');

const validateParam = (schema, name) => {
    return (req, res, next) => {
        // console.log('params...', req.params[name])
        const validatorResult = schema.validate({ param: req.params[name] })
        if(validatorResult.error){
            return res.status(400).json(validatorResult.error)
        }
        else{
            // console.log('1', req.value)
            if(!req.value) req.value = {}
            // console.log('2', req.value.params)
            if(!req.value['params']) req.value.params = {}
            // console.log('3', req.value)
            req.value.params[name] = req.params[name]
            // console.log('4', req.value)
            next()
        }
    }
}

const validateBody = (schema) => {
    return (req, res, next) => {
        const validatorResult = schema.validate(req.body);
        if(validatorResult.error){
            // return res.status(200).json(validatorResult.error);
            return res.status(400).json({
                message: "ERROR VALIDATES",
                result: validatorResult.error
            })
        }
        else{
            if(!req.value) req.value = {};
            if(!req.value['body']) req.value.body = {};
            req.value.body = validatorResult.value;
            next();
        }
    }
}

const schemas = {
        productSchema: joi.object().keys({
        id_brand: joi.string().required(),
        name_product: joi.string().required(),
        price_product: joi.string().required(),
        sale_product: joi.string().required(),
        quantity_product: joi.number().required(),
        description_product: joi.string().required(),
    }),
}

module.exports = {
    validateParam,
    validateBody,
    schemas
}