const Comment = require('../models/Comment');
const BlogPost = require('../models/BlogPost');
const User = require('../models/user');

exports.create = async (req, res) => {
  try {
    const { commenterName, commentText, blogPostId,userId } = req.body;
    const currentDate = new Date();
    const newComment = new Comment({ commenterName, commentText, blogPost: blogPostId, userid: userId, creationDate: currentDate,});
    await newComment.save();

    await BlogPost.findByIdAndUpdate(
      blogPostId,
      { $push: { comments: newComment._id } },
      { new: true }
    );
    const user = await User.findById(userId);
    if (user) {
      user.comments.push(newComment._id);
      await user.save();
    }

    res.status(201).json({ message: 'Comment created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.create1 = async (req, res) => {
  try {
    const { commenterName, commentText, blogPostId,userId } = req.body;
    const currentDate = new Date();
    const newComment = new Comment({ commenterName, commentText, blogPost: blogPostId, userid: userId, creationDate: currentDate,});
    await newComment.save();

    await BlogPost.findByIdAndUpdate(
      blogPostId,
      { $push: { comments: newComment._id } },
      { new: true }
    );

    const user = await User.findById(userId);

    if (user) {
      user.comments.push(newComment._id);
      await user.save();
    }

  } catch (error) {
    console.error(error);
  }
};

exports.list = async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
exports.list2 = async (req, res) => {
  try {
    const { blogid } = req.body;
    const comments = await Comment.find({ blogPost: blogid });
    return comments;
    
  } catch (error) {
    console.error(error);
  }
};

exports.getById = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    res.json(comment);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.update = async (req, res) => {
  try {
    const { commenterName, commentText } = req.body;
    await Comment.findByIdAndUpdate(req.params.id, { commenterName, commentText });
    res.json({ message: 'Comment updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.delete = async (req, res) => {
  try {
    await Comment.findByIdAndDelete(req.params.id);
    res.json({ message: 'Comment deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
