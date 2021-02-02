const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
// const mongoose = require('mongoose');
const securityApp = require('helmet');
const connect_db = require('./database/connect');

const app = express();
app.use(securityApp());
app.use(cors());

const brandRouter = require('./routes/brand');
const productRouter = require('./routes/product');
const userRouter = require('./routes/user');


// Middlewares
app.use(logger('dev'));
app.use(express.static('uploads'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
   extended: true 
}));

// routes
app.use('/brands', brandRouter);
app.use('/products', productRouter);
app.use('/users', userRouter);


// routes
app.get('/', (req, res, next)=>{
    return res.status(200).json({
        message: 'server is ok!'
    })
})
// cacth 
app.use((req, res, next)=>{
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
})

// error
app.use((err, req, res, next)=>{
    const error = app.get('env') === 'development' ? err : {}
    const status = err.status || 500
    //res to client
    return res.status(status).json({
        error:{
            message: error.message
        }
    })
})
// start server
const port = app.get('port') || 3100;
app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
})