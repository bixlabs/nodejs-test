const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const orderSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    customer: {
      firstName: { type: String },
      lastName: { type: String },
      email: { type: String },
      address: { type: String },
      country: { type: String },
      state: { type: String },
      zip: { type: String },
    },
    paymentProvider: { type: String },
    purchase: {
      service: { type: String, required: true },
      tier: { type: String, required: true },
    },
  },
  { timestamps: true }
);

// add plugin that converts mongoose to json
orderSchema.plugin(toJSON);

/**
 * @typedef Order
 */
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
