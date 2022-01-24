const Result = require("../utilities/Results/Result");
const Messages=require("../utilities/ResultMessages/Messages");

module.exports=(req,res,next)=>{
    if(!req.session.isAuthenticated){
        let result=new Result(false,Messages.BeAuthenticated);
        return res.send(result)
    }
    next();
}