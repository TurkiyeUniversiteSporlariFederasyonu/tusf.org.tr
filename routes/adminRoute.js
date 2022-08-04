const express = require('express');
const router = express.Router();

const isAdmin = require('../middleware/isAdmin');

const announcementsCreateGetController = require('../controllers/admin/announcements/create/get');
const announcementsDeleteGetController = require('../controllers/admin/announcements/delete/get');
const announcementsEditGetController = require('../controllers/admin/announcements/edit/get');
const announcementsIndexGetController = require('../controllers/admin/announcements/index/get');
const indexGetController = require('../controllers/admin/index/get');
const loginGetController = require('../controllers/admin/login/get');

const announcementsCreatePostController = require('../controllers/admin/announcements/create/post');
const announcementsEditPostController = require('../controllers/admin/announcements/edit/post');
const announcementsImagePostController = require('../controllers/admin/announcements/image/post');
const loginPostController = require('../controllers/admin/login/post');

router.get(
  '/',
    isAdmin,
    indexGetController
);
router.get(
  '/announcements',
    isAdmin,
    announcementsIndexGetController
);
router.get(
  '/announcements/create',
    isAdmin,
    announcementsCreateGetController
);
router.get(
  '/announcements/delete',
    isAdmin,
    announcementsDeleteGetController
);
router.get(
  '/announcements/edit',
    isAdmin,
    announcementsEditGetController
);
router.get(
  '/login',
    loginGetController
);

router.post(
  '/announcements/create',
    isAdmin,
    announcementsCreatePostController
);
router.post(
  '/announcements/edit',
    isAdmin,
    announcementsEditPostController
);
router.post(
  '/announcements/image',
    isAdmin,
    announcementsImagePostController
);
router.post(
  '/login',
    loginPostController
);

module.exports = router;
