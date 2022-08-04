const express = require('express');
const router = express.Router();

const errorGetController = require('../controllers/index/error/get');
const indexGetController = require('../controllers/index/index/get');
const menuGetController = require('../controllers/index/menu/get');

router.get(
  '/',
    indexGetController
);
router.get(
  '/error',
    errorGetController
);
router.get(
  '*',
    menuGetController
);

module.exports = router;
