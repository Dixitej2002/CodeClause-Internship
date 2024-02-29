import React, { useState } from 'react';
import Api from './component/Api';
import FileUploadForm from './component/FileUploadForm';
import PasswordForm from './component/PasswordForm';
import SharedFile from './component/SharedFile';
import FileDownloadButton from './component/FileDownloadButton';
import './App.css'; 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './component/Navbar';
import Features from './component/Features';
import Footer from './component/Footer';

const App = () => {
  const [sharedFile, setSharedFile] = useState(null);
  const [token, setToken] = useState('');
  const [fileData, setFileData] = useState(null);
  const [passwordValidation, setPasswordValidation] = useState(null);

  const handleUpload = (token) => {
    setSharedFile(token);
  };

  const handlePasswordSubmit = async (password) => {
  
    try {
      const response = await Api.post('/api/validate', { token: sharedFile, password });
      toast.success(`Validated!`);
      setFileData(response.data.file);
      setPasswordValidation(true);
    } catch (error) {
      toast.error(`Invalid  password.`);
      setPasswordValidation(false);
    }
  };
  const handleTokenChange = (e) => {
    setToken(e.target.value);
  };

  return (
    <>
   <Navbar></Navbar>
   <Features></Features>
    <div className="app-container">
    <div className="background">

      <main className="app-main">
        <section className="upload-section">
          <h2>Upload File</h2>
          <FileUploadForm onUpload={handleUpload} />
        </section>
        <div className="flex-box">

        <section className="share-section">
          <h2>Share File</h2>
          {sharedFile && <SharedFile token={sharedFile} />}
        
        </section>
        <section className='download-file'>
        <div>
      <h1>Download</h1>
      <div>
        <input type="text" value={token} onChange={handleTokenChange} placeholder="Paste Link" />
        <PasswordForm onSubmit={handlePasswordSubmit} />
      </div>
      {fileData && passwordValidation && (
        <FileDownloadButton fileId={fileData._id} />
      )}
      {passwordValidation === false && (
        <p className='inc'>Password incorrect. Please try again.</p>
      )}
    </div>
        </section>
        </div>
      </main>
</div>
<ToastContainer/>
    </div>
    <Footer/>
    </>
  );
};

export default App;
