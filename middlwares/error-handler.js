function handleErrors(error,request,response,next){
    try{
        if(response.statusCode === 200) response.status(500);
        response.json({error:error.message,info : "Message from error handler"})
    }catch(error){
        next();
    }

}

module.exports = handleErrors