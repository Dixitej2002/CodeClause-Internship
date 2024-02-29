import React, { useState } from 'react';
import './PasswordForm.css'

const PasswordForm = ({ onSubmit }) => {
  const [password, setPassword] = useState('');

  const handleChange = (e) => {
    setPassword(e.target.value);

  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    onSubmit(password);
  };

  return (
    <div className="password">

    <form onSubmit={handleSubmit}>
      <input type="password" value={password} onChange={handleChange} placeholder="Enter password" />
      <button type="submit">Submit</button>
    </form>
    </div>
  );
};

export default PasswordForm;
