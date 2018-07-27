
/** Mongoose model **/

import { Schema, model } from 'mongoose';

let User: Schema = new Schema({

    CreatedAt: {
        type: Date,
        default: Date.now
    },
    Updated: {
        type: Date,
        default: Date.now
    },

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
export default  model('User', User);