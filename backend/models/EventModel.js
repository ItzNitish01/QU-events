// backend/models/EventModel.js

const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    // Core Details
    title: {
        type: String,
        required: [true, 'Event title is required.'],
        trim: true,
    },
    description: {
        type: String,
        required: [true, 'Event description is required.'],
    },
    
    // Time and Location
    date: {
        type: Date,
        required: [true, 'Event date is required.'],
    },
    location: {
        type: String,
        required: [true, 'Event location is required.'],
        trim: true,
    },
    
    // Metadata
    host: {
        type: String,
        required: [true, 'Host name is required.'],
        trim: true,
    },
    category: {
        type: String,
        enum: ['Academic', 'Social', 'Sport', 'Arts', 'Other'],
        default: 'Social',
    },
    image: {
        type: String, // URL to the event image/poster
        default: 'https://via.placeholder.com/400x200',
    },
    
    // Dynamic Data
    rsvpCount: {
        type: Number,
        default: 0,
    }
}, {
    timestamps: true // Adds createdAt and updatedAt fields
});

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;