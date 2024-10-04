const fs = require('fs');
const File = require('../models/fileModel'); // Ensure you have this model created
const path = require('path'); // Add this line


exports.uploadFile = async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }

    // Read the uploaded JSON file
    const filePath = `./uploads/${req.file.filename}`;
    const fileContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));

    // Determine the file format
    const fileFormat = path.extname(req.file.filename).slice(1); // e.g., "json"

    // Save to MongoDB
    const newFile = new File({
        filename: req.file.filename,
        content: fileContent,
        fileFormat: fileFormat // Save the file format
    });

    try {
        await newFile.save();
        res.status(200).send('File uploaded and saved to DB successfully');
    } catch (error) {
        console.error('Error saving file to DB:', error);
        res.status(500).send('Error saving file to DB');
    }
};

// function to get all files
exports.getAllFiles = async (req, res) => {
    try {
        const files = await File.find(); // Fetch all files from DB
        res.json(files);
    } catch (error) {
        console.error('Error fetching files:', error);
        res.status(500).send('Error fetching files');
    }
}; 

// Function to get file data by filename
exports.getFileData = async (req, res) => {
    const { filename } = req.params; // Extract filename from route params
    try {
        const file = await File.findOne({ filename });
        if (!file) {
            return res.status(404).send('File not found');
        }
        res.json(file);
    } catch (error) {
        console.error('Error fetching file:', error);
        res.status(500).send('Error fetching file');
    }
};

// Function to delete file
exports.deleteFile = async (req, res) => {
    const { filename } = req.params;

    try {
        // Remove file from MongoDB
        const result = await File.findOneAndDelete({ filename });
        if (!result) {
            return res.status(404).send('File not found');
        }

        // Remove file from the server
        const filePath = path.join(__dirname, '../uploads', filename);
        fs.unlink(filePath, (err) => {
            if (err) {
                console.error('Error deleting file from server:', err);
                return res.status(500).send('Error deleting file from server');
            }
            res.status(200).send('File deleted successfully');
        });
    } catch (error) {
        console.error('Error deleting file:', error);
        res.status(500).send('Error deleting file');
    }
};





