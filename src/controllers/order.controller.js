const httpStatus = require('http-status');
const { getOrders } = require('../services/order.service');
const catchAsync = require('../utils/catchAsync');
const { createService } = require('../services/service.service');

exports.getOrders = catchAsync(async (req, res) => {
  const orders = await getOrders();
  res.status(httpStatus.OK).send({ orders });
});

exports.createOrder = catchAsync(async (req, res) => {
  const order = await createService(req.body);
  res.status(httpStatus.CREATED).send({ order });
});
