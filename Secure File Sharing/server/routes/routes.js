const express = require('express');
const multer = require('multer');
const router = express.Router();
const File = require('../models/File.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Multer configuration for file upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');

},
filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
    
  }
});   
const upload = multer({storage});


// File upload route
router.post('/upload', upload.single('file'), async (req, res, next) => {
  
    try {
    
    const { filename, path } = req.file;
    const { password, expiryDate } = req.body;
    
    
    // Hash password if provided
    const hashedPassword = password ? await bcrypt.hash(password, 10) : null;

    const file = new File({
      filename,
      path,
      password: hashedPassword,
      expiryDate: expiryDate ? new Date(expiryDate) : null
    });

    await file.save();
    
    // Generate JWT token for link
    const token = jwt.sign({ fileId: file._id }, process.env.JWT_SECRET);

    res.json({ success: true, message: 'File uploaded successfully', token});
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

// Link validation route
router.post('/validate', async (req, res) => {
  try {
    const { token, password } = req.body;
    
    
    // Verify JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const fileId = decoded.fileId;
    
    // Find file by ID
    const file = await File.findById(fileId);
    

    if (!file) {
      return res.status(404).json({ success: false, message: 'File not found' });
    }

    // Check password if required
    if (file.password && !(await bcrypt.compare(password, file.password))) {
     

      return res.status(401).json({ success: false, message: 'Invalid password' });
    }
    
    // Check expiry date
    if (file.expiryDate && new Date() > file.expiryDate) {
     

      return res.status(401).json({ success: false, message: 'Link has expired' });
    }

    res.json({ success: true, file });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});



router.get('/:id/download', async (req, res) => {
  try {
    const file = await File.findById(req.params.id);

    if (!file) {
      return res.status(404).json({ success: false, message: 'File not found' });
    }

    
    res.download(file.path, file.filename);
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
});

module.exports = router;
