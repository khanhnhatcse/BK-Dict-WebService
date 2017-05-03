'use strict';
var mongoose = require('mongoose');
var User = require('../models/user');
const USER_EXIST = -2;
const USER_FAIL = -1;
const USER_SUCCESS = 0;
const AUTH_SUCCESS = 0;
const AUTH_FAIL = -1;
const AUTH_ERROR = 0;

exports.insert = function(req, res) {
    var user = new User(req.body);
    User.find({ username: user.username }, function(err, _user) {
        if (err)
            res.json({ success: USER_FAIL });
        else if (_user.length)
            res.json({ success: USER_EXIST, user: _user });
        else {
            user.save(function(err, usr) {
                if (err) res.json({ success: USER_FAIL });
                else
                    res.json({ success: USER_SUCCESS, user: usr })
            });
        }
    })
}

exports.auth = function(req, res) {
    User.find({ username: req.body.username, password: req.body.password }, function(err, _user) {
        if (err)
            res.json({ success: AUTH_ERROR });
        else if (_user.length)
            res.json({ success: AUTH_SUCCESS });
        else
            res.json({ success: AUTH_FAIL });

    });
}