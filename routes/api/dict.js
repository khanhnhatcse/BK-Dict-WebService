var express = require('express');
var router = express.Router();
var dictApi = require('../../controllers/dictApi');
var userApi = require('../../controllers/userApi');

router.get('/dict', dictApi.get);

router.post('/user', userApi.insert);

module.exports = router;