// backend/server.js (CORRECTED VERSION)

// 1. Load environment variables first
require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Import Event Routes
const eventRoutes = require('./routes/eventRoutes'); 

// Initialize the app
const app = express();

// --- Middleware ---
// Get the allowed origin from environment variables, or use development default
const allowedOrigin = process.env.NODE_ENV === 'production' 
    ? process.env.CLIENT_ORIGIN // e.g., 'https://quevents.vercel.app'
    : 'http://localhost:5173'; 

app.use(cors({
    origin: allowedOrigin, // 🎯 Use the dynamically set origin
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
}));
app.use(express.json());

// --- Database Connection (Mongoose) ---
const connectDB = async (mongoUri) => {
    try {
        await mongoose.connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connection successful!');
    } catch (error) {
        console.error('MongoDB connection failed:', error.message);
        process.exit(1); 
    }
};

// --- Basic Route (Health Check) ---
app.get('/', (req, res) => {
    res.status(200).json({ 
        message: 'QU-events API is running!',
        // 🎯 Ensure this line is present to read the environment variable:
        environment: process.env.NODE_ENV || 'development' 
    });
});

// --- API Routes ---
app.use('/api/events', eventRoutes);

// --- Start the Server Function ---
const startServer = async () => {
    // 🎯 FIX: Read variables inside the function scope to ensure they are loaded
    const PORT = process.env.PORT || 5000;
    const MONGO_URI = process.env.MONGO_URI;

    if (MONGO_URI) {
        // Pass the URI to connectDB
        await connectDB(MONGO_URI); 
    } else {
        console.log('--- WARNING: MONGO_URI not found in .env. Cannot connect to DB. ---');
    }

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

// Start the server
startServer();