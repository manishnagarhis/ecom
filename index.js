const express = require('express');
//connection
require('./database/connection')();
const {userRouter} = require('./router/user-router');
const {productRouter} = require('./router/product-router');
const {orderRouter} = require('./router/order-router');
const {categoryRouter} = require('./router/category-router');
const morgan = require('morgan');//For login
const handleErrors = require('./middlwares/error-handler');
const application = express();

// middlewares
application.use(express.json());
application.use(morgan('dev'));


application.listen(3000,()=>{
    console.log("listening on port 3000")
})

application.get('/',(req,res)=>{
    res.json({'message':"success"})
})

const APIRouter = express.Router()
APIRouter.get('',(req,res)=>res.json({message : "Api is working.."}))
application.use("/api",APIRouter)

APIRouter.use('/users',userRouter)
APIRouter.use('/products',productRouter)
APIRouter.use('/orders',orderRouter)
APIRouter.use('/categories',categoryRouter)

application.use(handleErrors);