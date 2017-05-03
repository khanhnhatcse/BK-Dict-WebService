'use strict';
var mongoose = require('mongoose');
var Category = require('../models/category');

exports.get_all = function(req, res) {
    Category.find({}, function(err, cats) {
        if (err) {
            done(err);
        } else {
            res.render('home/index', { title: 'Home', category: cats });
        }
    })

}