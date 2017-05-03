'use strict';
var mongoose = require('mongoose');
var Category = require('../models/category');
var Dict = require('../models/dict');
var Optional = require('../models/optional');
var ObjectId = mongoose.Schema.Types.ObjectId;


exports.get = function(req, res) {
    Category.findById(req.params.id, function(err, cat) {
        if (err) {
            return res.write('Error');
        } else {
            Optional.find({}, function(err, optional) {
                if (err) {
                    return res.write('Error');
                } else {
                    console.log(optional);
                    Dict.find({ "category": { $in: [cat._id] } },
                        function(err, dict) {
                            if (err) {
                                console.log(err);
                            } else {
                                res.render('home/category', { title: "Category", category: cat, dicts: dict, optionals: optional });
                            }
                        });
                }
            });

        }
    });


}

exports.insert = function(req, res) {
    var dict = new Dict(req.body);
    console.log(req.body.optional);
    dict.save(function(err, d) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/dict/' + req.body.category);
        }
    });
}

exports.remove = function(req, res) {
    Dict.findByIdAndRemove(req.params.id, function(err, dict) {
        if (err) {
            return res.write('Error');
        } else {
            res.redirect('/');
        }
    })
}