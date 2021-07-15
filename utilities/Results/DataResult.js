const Result = require("./Result");

module.exports = class DataResult extends Result{
    constructor(success,message,data){
        super(success,message);
        this.data=data;
    }

    getResult(){
        return {success:this.success,message:this.message,data:this.data};
    }
}
