'use strict';
var mongoose = require('mongoose');
var Category = require('../models/category');
var Dict = require('../models/dict');
var Optional = require('../models/optional');
var ObjectId = mongoose.Schema.Types.ObjectId;

exports.get = function(req, res) {
    Dict.find({ name: { $regex: req.query.key } }, { _id: 0, __v: 0, 'optional._id': 0 })
        .populate('category', {_id : 0, __v : 0})
        .populate('optional.name', {_id : 0, __v : 0})
        .exec(function(err, dict) {
            if (err) {
                res.send(err);
            }
            res.json(dict);
        })
}