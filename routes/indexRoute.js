const express = require('express');
const router = express.Router();

const errorGetController = require('../controllers/index/error/get');
const indexGetController = require('../controllers/index/index/get');
const menuGetController = require('../controllers/index/menu/get');

const sslCertificateGetController = require('../controllers/index/.well-known/acme-challenge/get');

router.get(
  '/',
    indexGetController
);
router.get(
  '/error',
    errorGetController
);
router.get(
  '/.well-known/acme-challenge/*',
    sslCertificateGetController
);
router.get(
  '*',
    menuGetController
);

module.exports = router;
