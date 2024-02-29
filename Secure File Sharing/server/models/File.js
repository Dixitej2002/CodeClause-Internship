const mongoose =require('mongoose');

const fileSchema = new mongoose.Schema({
  filename: String,
  path: String,
  password: String, 
  expiryDate: Date 
});

const File = mongoose.model('File', fileSchema);

module.exports = File;
