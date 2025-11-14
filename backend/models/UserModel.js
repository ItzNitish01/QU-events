// backend/models/UserModel.js

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
    },
    eventsAttended: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Event',
        }
    ],
    eventsSaved: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Event',
        }
    ],
}, {
    timestamps: true
});

const User = mongoose.model('User', UserSchema);

module.exports = User;