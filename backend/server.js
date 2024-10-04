const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileRoutes = require('./routes/fileRoutes');

const app = express();
const PORT = process.env.PORT || 5001;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/jsonDashboard', {
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// CORS Configuration
app.use(cors({
    origin: 'http://localhost:5173',  // Allow requests from your frontend
    methods: ['GET', 'POST', 'DELETE'],         // Specify allowed methods
    credentials: true                 // Allow credentials if needed
}));

app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));  // Serve files
app.use('/api/files', fileRoutes);  // Routes for file handling

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
