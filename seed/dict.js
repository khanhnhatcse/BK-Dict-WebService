var Dict = require('../models/dict');


var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('localhost:27017/bk_dict');
var Schema = mongoose.Schema;

var dict = [
    new Dict({
        name: "Hello",
        pronounce: "he'lou",
        optional: [{
                name: "noun",
                content: ["Tiếng chào", "Loi chao"]
            },
            {
                name: "verd",
                content: ["chào"]
            }
        ],
        example: [
            "Hello, How are you ?"
        ],
        category: ["5907325a480795462ba6cf34"]
    }),
    new Dict({
        name: "Hi",
        pronounce: "hai",
        optional: [{
                name: "noun",
                content: "Tiếng chào"
            },
            {
                name: "verd",
                content: "chào"
            }
        ],
        example: [
            "Hi, How are you ?"
        ],
        category: ["5907325a480795462ba6cf34"]
    })

];

var done = 0;
for (var i = 0; i < dict.length; i++) {
    dict[i].save(function(err, result) {
        done++;
        console.log("Save...");
        if (done === dict.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}