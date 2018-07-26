"use strict";
/** Mongoose model **/
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var User = new mongoose_1.Schema({
    CreatedAt: Date,
    Updated: Date,
    title: {
        type: String,
        default: '',
        required: true
    },
    slug: {
        type: String,
        default: '',
        required: true,
        unique: true
    },
    content: {
        type: String,
        default: '',
        required: true
    },
    featureImage: {
        type: String,
        default: ''
    }
});
/** Mongoose model exports **/
exports.default = mongoose_1.model('User', User);
