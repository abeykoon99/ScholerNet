import React, { useState } from 'react';
import axios from 'axios';

const FileUploadForm = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('pdf', file);
    try {
      const response = await axios.post('http://localhost:8070/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error uploading file:', error);
      setMessage('Error: Registration status could not be determined');
    }
  };

  const handleDelete = async () => {
    if (!file) {
      setMessage('No file uploaded');
      return;
    }
    const filename = file.name;
    try {
      await axios.delete(`http://localhost:8070/api/delete/${filename}`, {
        // Add any necessary headers for authentication or authorization
      });
      setMessage('File deleted successfully');
      setFile(null); // Clear the file state after deletion
    } catch (error) {
      console.error('Error deleting file:', error);
      setMessage('Error: File could not be deleted');
    }
  };

  return (
    <div style={{ textAlign: 'center', maxWidth: '600px', margin: 'auto' }}>
      <h2 style={{ marginBottom: '20px' }}>File Upload Form</h2>
      <p style={{ marginBottom: '10px' }}>Add a Photo confirming successful registration at the conference or journal</p>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input type="file" onChange={handleFileChange} style={{ marginBottom: '10px' }} />
        <br />
        <button type="submit" style={{ marginRight: '10px' }}>Upload</button>
        <button type="button" onClick={handleDelete}>Delete</button>
      </form>
      {file && (
        <div style={{ marginBottom: '20px' }}>
          <h3>Uploaded File:</h3>
          <p>{file.name}</p>
        </div>
      )}
      {message && (
        <div style={{ marginBottom: '20px' }}>
          <h3>Registration Status:</h3>
          <p>{message}</p>
        </div>
      )}
    </div>
  );
};

export default FileUploadForm;
