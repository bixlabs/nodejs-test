const httpStatus = require('http-status');
const { mongoose } = require('mongoose');
const ApiError = require('../utils/ApiError');
const Order = require('../models/order.model');

/**
 * @returns {Promise<Order[]>}
 */
const getOrders = async () => {
  let orders;
  try {
    orders = await Order.find({});
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Internal Server Error');
  }
  return orders;
};

/**
 * @param {any} createOrderRequest
 * @returns {Promise<Order>}
 */
const createOrder = async (createOrderRequest) => {
  const order = new Order({
    _id: new mongoose.Types.ObjectId(),
    customer: {
      firstName: createOrderRequest.firstName,
      lastName: createOrderRequest.lastName,
      email: createOrderRequest.email,
      address: createOrderRequest.address,
      country: createOrderRequest.country,
      state: createOrderRequest.state,
      zip: createOrderRequest.zip,
    },
    paymentProvider: createOrderRequest.paymentProvider,
    purchase: {
      service: createOrderRequest.service,
      tier: createOrderRequest.tier,
    },
  });
  return order.save();
};

module.exports = {
  getOrders,
  createOrder,
};
