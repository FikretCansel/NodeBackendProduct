const Result = require("../utilities/Results/Result");
const DataResult = require("../utilities/Results/DataResult");
const Messages = require("../utilities/ResultMessages/Messages.js");
const User = require("../models/user");
const MooUserDal = require("../dataAccess/mongodb/moongose/mooUserDal");
const bcrypt = require("bcrypt");
const sgMail = require('@sendgrid/mail');
const crypto=require("crypto");

sgMail.setApiKey("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")

const userDal = new MooUserDal();

exports.login = async (req, res, next) => {
  let user = new User(req.body.email, req.body.password);

  let findedUser = await userDal.getByEmail(user.email).then((data) => {
    return data;
  });
  //res.cookie("login",true);
  if (req.session.isAuthenticated) {
    console.log("Zaten giriş yapılmış");
  }
  if (findedUser) {
    bcrypt.compare(user.password, findedUser.password, function (err, result) {
      if ((result = true)) {
        //isAuthanticated True
        console.log("Giriş Başarılı");
        userLogged(req.session,findedUser);
        let result = new DataResult(true, Messages.LoginSucess, {isAdmin:findedUser.isAdmin,email:findedUser.email,_id:findedUser._id});
        res.send(result);
      }else{
        console.log("Şifre Yanlış");
        let result = new DataResult(false, Messages.OperationFailed, user);
        res.send(result);
      }
    });
  } else {
    let result = new Result(false, "Kullanıcı Bulunamadı");
    res.send(result);
  }
};

exports.register = (req, res, next) => {
  let user = new User(req.body.email, req.body.password, req.body.name);

  userDal
    .getByEmail(user.email)
    .then((data) => {
      if (data) {
        let result = new Result(false, Messages.AlreadyUserExists);
        return res.send(result);
      }
      return bcrypt.hash(user.password, 10);
    })
    .then((hashedPassword) => {
      user.password = hashedPassword;
      userDal
        .add(user)
        .then(() => {
            user.isAdmin=false;
            userLogged(req.session,user);
            let result = new DataResult(true, Messages.OperationSuccess, user);
            res.send(result);
            sendMail("Hesap oluşturuldu Tebriklerr",user.email);
        })
        .catch(() => {
          let result = new DataResult(false, Messages.OperationFailed, user);
          res.send(result);
        });
    });
};

userLogged=(session,findedUser)=>{
    session.user=findedUser;
    session.isAuthenticated = true;
    session.isAdmin=findedUser.isAdmin;
}

sendMail=(message,email)=>{
  const msg = {
    to: email, // Change to your recipient
    from: 'fikret_312@hotmail.com', // Change to your verified sender
    subject: message,
    text: message,
    html: `<h1>${message}</h1>`,
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent');
    })
    .catch((error) => {
      //console.error(error)
    })
}
exports.resetPassword =async(req, res, next) => {
  const email=req.body.email;

  let user=await userDal.getByEmail(email).then((user)=>{return user}).catch(err=>console.log("User Bulma hatası"));

  if(!user){
    return res.send(new Result(false,Messages.UserNotFound));
  }

  crypto.randomBytes(32,(err,buffer)=>{
    if(err){
      console.log(err);
    }
    const token=buffer.toString('hex');

    userDal.addTokenAndExpiration(user,token,Date.now()+36000).then(data=>console.log(data))
    .catch(err=>console.log("Token Kaydetme Error"+err));
    sendMail("Parola Sıfırlamak için tıklayın : "+token,email);
  });

  let result = new Result(true, Messages.OperationSuccess);
  res.send(result);
};


exports.resetCreateNewPassword =async(req, res, next) => {
  const token=req.params.token;
  const newPassword=req.body.newPassword;
  let _user;
  await userDal.getUserByResetToken(token).then(user=>{
    _user=user;
    return bcrypt.hash("sss",10);
  }).then(hashedNewPassword=>{
    if(!_user){
      let result = new Result(false, Messages.UserNotFound);
      return res.send(result);
    }
    userDal.updatePasswordById(_user._id,hashedNewPassword).then(()=>{
      let result = new Result(true, Messages.OperationSuccess);
      res.send(result);
    }).catch(()=>{
      let result = new Result(false, Messages.OperationFailed);
      res.send(result);
    });
  })

};




exports.logout =(req, res, next) => {
  
  req.session.destroy(function(err) {
    // cannot access session here
    let result = new Result(true, Messages.OperationSuccess);
    res.send(result);
  })
};
