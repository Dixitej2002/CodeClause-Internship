import React, { useState } from 'react';
import './SharedFile.css'

const SharedFile = ({ token }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(token);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  return (
    <div>
      
      <div className='link-copy'>
        <input type="text" value={token} readOnly />
        <button onClick={handleCopy}>{copied ? 'Copied!' : 'Copy'}</button>
      </div>
    </div>
  );
};

export default SharedFile;
