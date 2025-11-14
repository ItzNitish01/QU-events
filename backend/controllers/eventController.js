// backend/controllers/eventController.js

const Event = require('../models/EventModel.js');
const mongoose = require('mongoose');

// @desc    Get all events
// @route   GET /api/events
// @access  Public
const getEvents = async (req, res) => {
    try {
        const events = await Event.find({}).sort({ date: 1 }); // Sort by date ascending
        res.status(200).json(events);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching events', error: error.message });
    }
};

// @desc    Get a single event by ID
// @route   GET /api/events/:id
// @access  Public
const getEventById = async (req, res) => {
    const { id } = req.params;

    // Check if the ID format is valid
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Invalid Event ID format' });
    }

    try {
        const event = await Event.findById(id);

        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }
        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching event', error: error.message });
    }
};

// @desc    Create a new event
// @route   POST /api/events
// @access  Admin/Organizer (for now, simple)
const createEvent = async (req, res) => {
    const { title, description, date, location, host, category, image } = req.body;

    // Basic validation
    if (!title || !description || !date || !location || !host) {
        return res.status(400).json({ message: 'Please include all required fields.' });
    }

    try {
        const event = await Event.create({
            title,
            description,
            date,
            location,
            host,
            category,
            image,
        });
        res.status(201).json(event);
    } catch (error) {
        res.status(400).json({ message: 'Error creating event', error: error.message });
    }
};

// @desc    Handle RSVP (Dummy implementation for now)
// @route   POST /api/events/rsvp/:id
// @access  User (for now, simple)
const rsvpEvent = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ message: 'Invalid Event ID format' });
    }

    try {
        // Find the event and increment rsvpCount
        const event = await Event.findByIdAndUpdate(
            id,
            { $inc: { rsvpCount: 1 } }, // Increment the count by 1
            { new: true } // Return the updated document
        );

        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        res.status(200).json({ 
            message: `Successfully RSVP'd to ${event.title}. Current count: ${event.rsvpCount}`,
            event: event
        });
    } catch (error) {
        res.status(500).json({ message: 'RSVP failed.', error: error.message });
    }
};


module.exports = {
    getEvents,
    getEventById,
    createEvent,
    rsvpEvent,
};