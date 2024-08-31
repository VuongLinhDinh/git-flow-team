// create model for cart
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Cart = new Schema(
  {
    user_id: {
      type: String
    },
    product_id: {
      type: String
    },
    quantity: {
      type: Number
    }
  },
  {
    collection: "cart"
  }
);

module.exports = mongoose.model("Cart", Cart);
