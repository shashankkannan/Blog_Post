const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  registrationDate: { type: Date, default: Date.now },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
  blogPost: [{ type: mongoose.Schema.Types.ObjectId, ref: 'BlogPost' }],
});

module.exports = mongoose.model('User', userSchema);
