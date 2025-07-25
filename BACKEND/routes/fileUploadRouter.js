const express = require('express');
const router = express.Router();
const multer = require('multer');
const File = require('../models/ResearchPaper'); // Import the File model
const fs = require('fs');
const PDFParser = require('pdf-parse');
const path = require('path'); // Import path module to handle file paths

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

// File upload route
router.post('/upload', upload.single('pdf'), async (req, res) => {
  try {
    const { originalname, path } = req.file;
    const newFile = new File({
      filename: originalname,
      path: path
    });
    await newFile.save();

    // Read the uploaded PDF file
    const dataBuffer = fs.readFileSync(path);
    const data = await PDFParser(dataBuffer);

    // Check if the PDF contains the keyword "payment successful"
    const text = data.text.toLowerCase(); 
    const keyword = 'payment successful';
    const registrationSuccessful = text.includes(keyword);

    if (registrationSuccessful) {
      res.json({ message: 'Registration successful' });
    } else {
      res.json({ message: 'Registration failed' });
    }
  } catch (error) {
    console.error('Error uploading file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// File deletion route
router.delete('/delete/:filename', (req, res) => {
  const filename = req.params.filename;
  const filePath = path.join(__dirname, '../uploads', filename); // Adjust the path as needed

  // Check if file exists
  if (fs.existsSync(filePath)) {
    // Delete the file
    fs.unlinkSync(filePath);
    res.json({ message: 'File deleted successfully' });
  } else {
    res.status(404).json({ error: 'File not found' });
  }
});

module.exports = router;
