var express = require('express');
var router = express.Router();
var userApi = require('../../controllers/userApi');

// router.get('/user', dictApi.get);

router.post('/user', dictApi.insert);


module.exports = router;