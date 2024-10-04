const express = require('express');
const multer = require('multer');
const { uploadFile, getFileData, getAllFiles , deleteFile } = require('../controllers/fileController'); 
const router = express.Router();

// Multer setup to handle file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });

// Route to upload the file
router.post('/upload', upload.single('jsonFile'), uploadFile);

// Route to fetch the file data by filename
router.get('/:filename', getFileData);

// route to get all uploaded files
router.get('/', getAllFiles); // This is the new endpoint to fetch all files

// route to delete a file
router.delete('/:filename', deleteFile); // Add this line

module.exports = router;
 