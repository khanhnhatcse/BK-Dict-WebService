var Optional = require('../models/optional');


var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('localhost:27017/bk_dict');
var Schema = mongoose.Schema;


var optional = [
    new Optional({
        name: "noun",
        nameVi: "Danh từ"
    }),
    new Optional({
        name: "verb",
        nameVi: "Động từ"
    }),
    new Optional({
        name: "verb",
        nameVi: "Tính từ"
    }),
    new Optional({
        name: "verb",
        nameVi: "Trạng từ"
    }),
    new Optional({
        name: "verb",
        nameVi: "Liên từ"
    })


];

var done = 0;
for (var i = 0; i < optional.length; i++) {
    optional[i].save(function(err, result) {
        done++;
        console.log("Save...");
        if (done === optional.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}