module.exports = class Result{
    constructor(success,message,errors){
        this.success=success;
        this.message=message;
        this.errors=errors;
    }

    getResult(){
        return {success:this.success,message:this.message,errors:this.errors};
    }
}