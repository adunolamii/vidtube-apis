class apiError extends Error{
    constructor (statusCode, 
        message ="something went wrong",
        errors= [],
        stacks =" "
    ){
        super(message)
        this.statusCode=statusCode
        this.data=this.data
        this.message=message
        this.errors=errors

         if (stacks){
            this.stack = stack
         }else{
            Error.captureStackTrace(this, this.constructor)
         }
    }
}
export default {apiError}