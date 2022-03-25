const httpStatus = require('http-status');
const { serviceService } = require('../services');
const catchAsync = require('../utils/catchAsync');

exports.getServices = catchAsync(async (req, res) => {
  const services = await serviceService.getServices();
  res.status(httpStatus.OK).send({ services });
});

exports.createService = catchAsync(async (req, res) => {
  const service = await serviceService.createService(req.body);
  res.status(httpStatus.CREATED).send({ service });
});
