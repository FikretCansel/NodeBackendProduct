module.exports = class Result{
    constructor(success,message){
        this.success=success;
        this.message=message;
    }

    getResult(){
        return {success:this.success,message:this.message};
    }
}