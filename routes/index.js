var express = require('express');
var router = express.Router();
var controller = require('../controllers/category');
var dict = require('../controllers/dict');

/* GET home page. */
// router.get('/', function(req, res, next) {
//     res.render('home/index', { title: 'Express' });
// });

router.get('/', controller.get_all);
router.get('/dict/:id', dict.get);
router.post('/dict', dict.insert);
router.get('/dict-remove/:id', dict.remove);

module.exports = router;