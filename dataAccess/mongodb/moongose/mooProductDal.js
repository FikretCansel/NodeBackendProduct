const MooProduct = require("../../../models/moongose/mooProduct");


module.exports = class MoProductDal {
  add(product) {
    let mooProduct = new MooProduct(product);

    console.log(mooProduct);

    return mooProduct.save();
  }

  getAll() {
    return MooProduct.find({});
  }
  getById(productId) {
    return MooProduct
      .findOne({ _id: productId })
  }
  getByCategoryId(categoryId) {
    return MooProduct
      .find({ categoryId: categoryId });
  }
  update(product) {
    let productId = product.id;
    delete product.id;

    console.log(product);

    return MooProduct.updateOne({ _id: productId }, { $set: product });
  }
  delete(productId) {
    return MooProduct
      .deleteOne({ _id: productId })

  }
};
