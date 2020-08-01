const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
        userId: {
            type: String,
            required: true,
            max: 255,
            trim: true
        },
        name: {
            type: String,
            required: true
        },
    phone: {
            type: String,
            required: true,
            max: 255,
            trim: true
        },
    phoneLocal: {
            type: String,
            required: true,
            max: 255,
            trim: true
        },
    email: {
            type: String,
            max: 255,
            trim: true
        },
    gender: {
            type: String,
            required: true,
            max: 255,
            trim: true
        },
    birthDate: {
            type: String,
            required: true,
            max: 255,
            trim: true
        },
    age: {
            type: Number,
            required: true,
        },
    address: {
        type: String,
        required: true,
        max: 255,
        trim: true
    },
    location: {
        type: { type: String, default: 'Point' },
        coordinates: { type: [Number], default: [0, 0] }
    },

    }
);
UserSchema.index({ location: '2dsphere' });
module.exports = mongoose.model('User', UserSchema);