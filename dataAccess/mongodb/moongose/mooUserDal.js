const MooUser = require("../../../models/moongose/mooUser");

module.exports = class MooUserDal {
  add(user) {
    let mooUser = new MooUser(user);
    return mooUser.save();
  }
  getAll() {
    return MooUser.find({});
  }
  delete(userId) {
    return MooUser.deleteOne({ _id: userId });
  }
  update(user) {
    delete user.id;
    return MooUser.updateOne({ _id: user.id }, { $set: { user } });
  }
  getById(userId) {
    return MooUser.findById(userId);
  }
  getByEmail(email) {
    return MooUser.findOne({ email });
  }

  addTokenAndExpiration(user, token, date) {
    user.resetToken = token;
    user.resetTokenExpiration = date;
    let _user = new MooUser(user);
    return _user.save();
  }

  getUserByResetToken(token) {
    return MooUser.findOne({
      resetToken: token,
      resetTokenExpiration: {
        $gt: Date.now(),
      },
    });
  }

  updatePasswordById(userId,password) {
    return MooUser.updateOne({ _id: userId }, { $set: { password,resetTokenExpiration:null,resetToken:null } });
  }
};
