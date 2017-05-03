'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OptionalSchema = new Schema({
    name: { type: String, required: true },
    nameVi: String
});


module.exports = mongoose.model('Optional', OptionalSchema);