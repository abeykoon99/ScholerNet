// models/File.js
const mongoose = require('mongoose');

const fileSchema = new mongoose.Schema({
  filename: {
    type: String,
    required: true
  },
  path: {
    type: String,
    required: true
  },
  // Add more fields as needed, e.g., user ID, file type, etc.
});

const File = mongoose.model('File', fileSchema);

module.exports = File;
