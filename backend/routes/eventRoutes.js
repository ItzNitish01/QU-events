// backend/routes/eventRoutes.js

const express = require('express');
const router = express.Router();
const { 
    getEvents, 
    getEventById, 
    createEvent,
    rsvpEvent
} = require('../controllers/eventController');

// Main Event Routes
router.route('/').get(getEvents).post(createEvent);

// Specific Event Routes
router.route('/:id').get(getEventById);

// RSVP Route
router.route('/rsvp/:id').post(rsvpEvent);

module.exports = router;