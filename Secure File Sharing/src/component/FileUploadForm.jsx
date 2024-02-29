// FileUploadForm.js
import React, { useState } from 'react';
import Api from './Api';
import './FileUploadForm.css'; // Import CSS file for styling
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FileUploadForm = ({ onUpload }) => {
  const [file, setFile] = useState(null);
  const [password, setPassword] = useState('');
  const [expiryDate, setExpiryDate] = useState('');

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleExpiryDateChange = (e) => {
    setExpiryDate(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('password', password);
    formData.append('expiryDate', expiryDate);

    try {
      const response = await Api.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      onUpload(response.data.token);
      toast.success("File uploaded successfully!");
    } catch (error) {
      toast.error(error.message);
      
    }
  };

  return (
    <form onSubmit={handleSubmit} className="upload-form">
      <input type="file" onChange={handleFileChange} name="file" />
      <input type="password" value={password} onChange={handlePasswordChange} placeholder="Enter password" className="password-input" />
      <input type="date" value={expiryDate} onChange={handleExpiryDateChange} placeholder="Expiry date" className="expiry-date-input" />
      <button type="submit" className="upload-button">Upload</button>
    
    </form>
  );
};

export default FileUploadForm;
