const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
// const mongoose = require('mongoose');
const securityApp = require('helmet');
const connect_db = require('./database/connect');

const app = express();
app.use(securityApp());


// const usersRoute = require('./routes/user');
const productRouter = require('./routes/product');
// const deckRoute = require('./routes/deck');


// Middlewares
app.use(logger('dev'));
app.use(express.static('uploads'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 
   extended: true 
}));

// routes
// app.use('/users', usersRoute);
app.use('/products', productRouter)
// app.use('/deck', deckRoute)


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
const port = app.get('port') || 3000;
app.listen(port, ()=>{
    console.log(`server is listening on port ${port}`);
})