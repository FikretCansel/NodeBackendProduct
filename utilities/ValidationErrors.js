


module.exports.getValidationErrors=function getValidationErrors(err){
    let messages=[]
        for(field in err.errors){
            messages.push(err.errors[field].message);
        }
    return messages;
}