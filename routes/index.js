const express = require("express");
const router = express.Router();
const homeCont = require('../controllers/homeController');
const api = require('./api');

router.get('/', homeCont.home);
// any request with api directed to api route folder
router.use("/api",api);

module.exports = router;