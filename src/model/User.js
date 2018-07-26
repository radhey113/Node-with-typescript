"use strict";
/** Mongoose model **/
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var User = new mongoose_1.Schema({
    CreatedAt: Date,
    Updated: Date,
    titile: {
        type: String,
        "default": '',
        required: true
    },
    slug: {
        type: String,
        "default": '',
        required: true,
        unique: true
    },
    content: {
        type: String,
        "default": '',
        required: true
    },
    featureImage: {
        type: String,
        "default": ''
    }
});
/** Mongoose model exports **/
exports["default"] = mongoose_1.model('User', User);
