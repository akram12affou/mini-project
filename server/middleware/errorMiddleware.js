const notFound =(req,res,next) => {
    const error = new Error(`not found - ${req.originalUrl}`);
    res.status(400)
    next(error);
}
const errorHandler = (err,req,res,next) => {
    // res.json('hey')
    let statusCode = res.statusCode == 200 ?  500 : res.statusCode
    if(err.name === 'CastError' && err.kind === 'ObjectId'){
        statusCode = 404
        message = 'Resource not Found'
         }
     res.status(statusCode).json({
        err:err.mesage,
        stack : err.stack
     })
}
module.exports= {
    notFound , errorHandler
}