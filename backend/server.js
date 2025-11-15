// backend/server.js

require('dotenv').config(); 
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Import Event Routes
const eventRoutes = require('./routes/eventRoutes'); 

// Initialize the app
const app = express();

// --- Middleware ---
// CORS Configuration: Uses CLIENT_ORIGIN from environment variables
const allowedOrigin = process.env.NODE_ENV === 'production' 
    ? process.env.CLIENT_ORIGIN
    : 'http://localhost:5173'; 

app.use(cors({
    origin: allowedOrigin,
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
        environment: process.env.NODE_ENV || 'development' 
    });
});

// --- API Routes ---
app.use('/api/events', eventRoutes);

// --- Start the Server Function ---
const startServer = async () => {
    // Read variables inside the function scope to ensure they are loaded
    const PORT = process.env.PORT || 5000;
    const MONGO_URI = process.env.MONGO_URI;

    if (MONGO_URI) {
        await connectDB(MONGO_URI); 
    } else {
        console.log('--- WARNING: MONGO_URI not found in .env. Cannot connect to DB. ---');
    }

    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
};

startServer();