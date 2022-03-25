const httpStatus = require('http-status');
const { orderService } = require('../services');
const catchAsync = require('../utils/catchAsync');

exports.getOrders = catchAsync(async (req, res) => {
  const orders = await orderService.getOrders();
  res.status(httpStatus.OK).send({ orders });
});

exports.createOrder = catchAsync(async (req, res) => {
  const order = await orderService.createOrder(req.body);
  res.status(httpStatus.CREATED).send({ order });
});
