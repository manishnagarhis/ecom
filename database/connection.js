const mongoose = require('mongoose')
const DB_URL = 'mongodb://localhost:27017/ecomm'

async function createConnection(){
    
    const connection = await mongoose.connect(DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true
    })
    // console.log('connection',connection);
    if(connection){
        //  console.log('connection',connection);
        console.log('connected');
    } 
}

module.exports = createConnection
