const express = require('express');
const router = express.Router();

const detailsGetController = require('../controllers/announcements/details/get')
const indexGetController = require('../controllers/announcements/index/get');

const filterPostController = require('../controllers/announcements/filter/post');

router.get(
  '/',
    indexGetController
);
router.get(
  '/details',
    detailsGetController
);

router.post(
  '/filter',
    filterPostController
);

module.exports = router;
