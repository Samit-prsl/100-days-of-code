const {constants} = require('../constant')
const ErrorHandle = (err,req,res,next)=>{
    const statuscode = res.StatusCode ? res.StatusCode : 500;
    switch (statuscode) {
        case  constants.VALIDATION_ERROR :
            res.json({title:'Validation error',message:err.message , stacktrace:err.stack});
         break;
         case  constants.UNAUTHORIZED_ERROR:
            res.json({title:'unauthorized error',message:err.message , stacktrace:err.stack});
         break;
         case  constants.FORBIDDEN :
            res.json({title:'forbidden error',message:err.message , stacktrace:err.stack});
         break;
         case  constants.NOT_FOUND :
            res.json({title:'Not found',message:err.message , stacktrace:err.stack});
         break;
        default: console.log("Alls good!");
            break;
    }
}

module.exports = ErrorHandle;