var express = require('express');
var router = express.Router();
const controller = require("./controller/controller")

/* GET home page. */
router.get('/', controller.Homepage);

/* POST */
router.post('/', controller.getWeather);

/* GET Users page. */
router.get('/users', controller.Users);


module.exports = router;