var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Category = new Schema({
    name: { type: String, required: true },
    description: { type: String, default: "Từ mới tiếng anh" }
});


module.exports = mongoose.model('Category', Category);