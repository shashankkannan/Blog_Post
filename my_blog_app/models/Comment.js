const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  commenterName: String,
  commentText: String,
  creationDate: { type: Date, default: Date.now },
  blogPost: { type: mongoose.Schema.Types.ObjectId, ref: 'BlogPost' },
  userid: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Comment', commentSchema);
