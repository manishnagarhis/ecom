const express = require('express')
const {getCategories} = require('../controller/category-controller')
const categoryRouter = express.Router() 
categoryRouter.get('',getCategories)

module.exports = {categoryRouter}