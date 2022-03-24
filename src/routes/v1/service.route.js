const express = require('express');

const servicesController = require('../../controllers/service.controller');

const router = express.Router();

router.get('/', servicesController.getServices);
router.post('/', servicesController.createService);

module.exports = router;
