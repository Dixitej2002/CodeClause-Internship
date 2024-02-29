

import React from 'react';
import Api from './Api';
import './FileDownloadButton.css'

const FileDownloadButton = ({ fileId }) => {
  const handleDownload = async () => {
    try {
      const response = await Api.get(`/api/${fileId}/download`, {
        responseType: 'blob', // Ensure response type is blob
      });

      // Create a blob URL for the file data
      const blob = new Blob([response.data], { type: response.headers['content-type'] });
      const url = window.URL.createObjectURL(blob);

      // Create a temporary link element to trigger the download
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'file');
      document.body.appendChild(link);
      link.click();

      // Clean up by revoking the blob URL
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading file: ', error);
    }
  };

  return (
    <button className='dwn-file' onClick={handleDownload}>Download File</button>
  );
};

export default FileDownloadButton;
