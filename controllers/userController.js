// const MooUserDal=require("../dataAccess/mongodb/moongose/mooUserDal");
// const DataResult = require("../utilities/Results/DataResult");
// const Messages=require("../utilities/ResultMessages/Messages");

// const UserDal=new MooUserDal();

// exports.getAll=async()=>{
//     let users= await UserDal.getAll().then((data)=>{return data}).catch(err=>console.log("User GetAll Error."+err));

//     let result=new DataResult(true,Messages.OperationSuccess,users);
//     return result;
// }
// exports.getByEmail=async(user)=>{
//     let email=user.email;

//     let users= await UserDal.getByEmail(email).then((data)=>{return data}).catch(err=>console.log("User GetByEmail Error."+err));

//     let result=new DataResult(true,Messages.OperationSuccess,users);
//     console.log(result);
//     return result;
// }

// exports.add=async(user)=>{

//     let users= await UserDal.add(user).then((data)=>{return data}).catch(err=>console.log("User Add Error."+err));

//     let result=new DataResult(true,Messages.OperationSuccess,users);
//     return result;
// }

// exports.getById=async(user)=>{
//     let userId=user.id;

//     let users= await UserDal.getById(userId).then((data)=>{return data}).catch(err=>console.log("User GetById Error."+err));

//     let result=new DataResult(true,Messages.OperationSuccess,users);

//     return result;
// }

// exports.delete=async(user)=>{
//     let userId=user.id;

//     let users= await UserDal.delete(userId).then((data)=>{return data}).catch(err=>console.log("User Delete Error."+err));

//     let result=new DataResult(true,Messages.OperationSuccess,users);
//     return result;
// }
// exports.update=async(user)=>{

//     let users= await UserDal.update(user).then((data)=>{return data}).catch(err=>console.log("User Update Error."+err));

//     let result=new DataResult(true,Messages.OperationSuccess,users);
//     return result;
// }
