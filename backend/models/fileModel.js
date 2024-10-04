const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
    filename: { type: String, required: true },
    content: { type: Object, required: true },
    uploadedAt: { type: Date, default: Date.now },
    fileFormat: { type: String, required: true },  
});

module.exports = mongoose.model('File', fileSchema);
