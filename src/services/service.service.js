const httpStatus = require('http-status');
const mongoose = require('mongoose');
const ApiError = require('../utils/ApiError');
const Service = require('../models/service.model');
const logger = require('../config/logger');

/**
 * @returns {Promise<Service[]>}
 */
const getServices = async () => {
  let services;
  try {
    services = await Service.find({});
  } catch (error) {
    logger.error(error);
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Internal Server Error');
  }
  return services;
};

/**
 * @param {any} createServiceRequest
 * @returns {Promise<Service>}
 */
const createService = async (createServiceRequest) => {
  const { code, serviceName, detail, tiers } = createServiceRequest;
  const service = new Service({
    _id: new mongoose.Types.ObjectId(),
    code,
    serviceName,
    detail,
    tiers,
  });
  return service.save();
};

module.exports = {
  getServices,
  createService,
};
