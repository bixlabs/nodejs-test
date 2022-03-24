const httpStatus = require('http-status');
const { getServices, createService } = require('../services/service.service');
const catchAsync = require('../utils/catchAsync');

exports.getServices = catchAsync(async (req, res) => {
  const services = await getServices();
  res.status(httpStatus.OK).send({ services });
});

exports.createService = catchAsync(async (req, res) => {
  const service = await createService(req.body);
  res.status(httpStatus.CREATED).send({ service });
});
