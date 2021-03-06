const mongoose = require('mongoose');
const { toJSON } = require('./plugins');

const serviceSchema = mongoose.Schema(
  {
    code: {
      type: String,
      required: true,
    },
    serviceName: {
      type: String,
      required: true,
    },
    detail: {
      type: String,
      required: true,
    },
    tiers: [
      {
        name: { type: String },
        price: { type: Number },
        whatsIncluded: [String],
      },
    ],
  },
  { timestamps: true }
);

// add plugin that converts mongoose to json
serviceSchema.plugin(toJSON);

/**
 * @typedef Order
 */
const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
