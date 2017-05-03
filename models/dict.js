'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var textSearch = require('mongoose-text-search');

var dictSchema = new Schema({
    name: { type: String, required: true },
    pronounce: { type: String, required: true },
    optional: [{
        name: { type: Schema.Types.ObjectId, ref: 'Optional' },
        content: [String]
    }],
    example: [String],
    category: [{ type: Schema.Types.ObjectId, ref: 'Category' }]
});


dictSchema.plugin(textSearch);

dictSchema.index({ name: 'text' });

module.exports = mongoose.model('Dict', dictSchema);