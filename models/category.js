const mongoose = require('mongoose')
const Schema = mongoose.Schema

//schema
const categorySchema = new Schema({
    name :{type:String,required:true},
},{timestamps:{
    createdAt : 'created_at',
    updatedAt : 'updated_at'
}})

//model
const Category = mongoose.model("category",categorySchema)

module.exports = {Category}