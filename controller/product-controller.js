function getProducts(request,response){
    response.json({"message":"Products api is working from controller"})
}

module.exports = {getProducts}