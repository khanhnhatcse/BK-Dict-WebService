var Category = require('../models/category');


var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('localhost:27017/bk_dict');

var cat = [
    new Category({
        name: "Động từ bất quy tắc"
    }),
    new Category({
        name: "Từ vựng TOEIC"
    }),
    new Category({
        name: "Từ vựng IELTS"
    }),
    new Category({
        name: "Từ vựng TOEFL"

    }),
    new Category({
        name: "3000 từ vựng Oxford"

    })

];


var done = 0;
for (var i = 0; i < cat.length; i++) {
    cat[i].save(function(err, result) {
        done++;
        console.log("Save...");
        if (done === cat.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}