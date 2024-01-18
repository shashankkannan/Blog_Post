const BlogPost = require('../models/BlogPost');
const Comment = require('../models/Comment');
const User = require('../models/user');

exports.classify = async (req,res) =>{
  const { tag } = req.body;
  console.log("entered tags filter")
  try {
    const blogPosts = await BlogPost.find({ tags: tag })
      .populate('author', 'username')
      .populate('comments', 'commentText');

    res.json(blogPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }

}
exports.create1 = async (req, res) => {
  try {
    const { title, content, author, tags, comments } = req.body;
    console.log("response ->",req.body);
    const newBlogPost = new BlogPost({ title, content, author, tags, comments });
    await newBlogPost.save();

    await User.findByIdAndUpdate(author, { $push: { blogPost: newBlogPost._id } });

  } catch (error) {
    console.error(error);
  }
};

exports.create = async (req, res) => {
  try {
    const { title, content, author, tags, comments } = req.body;
    console.log("response ->",req.body);
    const newBlogPost = new BlogPost({ title, content, author, tags, comments });
    await newBlogPost.save();
    await User.findByIdAndUpdate(author, { $push: { blogPost: newBlogPost._id } });
    res.status(201).json({ message: 'Blog post created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.list = async (req, res) => {
  try {
    const blogPosts = await BlogPost.find().populate('author','username').populate('comments','commentText');
    res.json(blogPosts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.list1 = async (req, res) => {
  try {
    const blogPosts = await BlogPost.find().populate('author','username').populate('comments','commentText');
    return blogPosts;
  } catch (error) {
    console.error(error);
  }
};

exports.getById = async (req, res) => {
  try {
    const blogPost = await BlogPost.findById(req.params.id);
    res.json(blogPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

/*exports.update = async (req, res) => {
  try {
    const { title, content, tags, comments } = req.body;
    await BlogPost.findByIdAndUpdate(req.params.id, { title, content, tags,comments });
    res.json({ message: 'Blog post updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};*/

exports.update = async (req, res) => {
  try {
    const { userid, blogPostId, content, tags } = req.body;
    const blogPost = await BlogPost.findById(blogPostId);
    if (!blogPost || String(blogPost.author) !== String(userid)) {
      return res.status(403).json({ error: 'You are not authorized to update this blog post' });
    }
    await BlogPost.findByIdAndUpdate(blogPostId, { content, tags });
    res.json({ message: 'Blog post updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

/*exports.delete = async (req, res) => {
  try {
    await BlogPost.findByIdAndDelete(req.params.id);
    res.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};*/

exports.delete = async (req, res) => {
  try {
    console.log("helloo deleteee placeee\n")
    const { userid, blogPostId } = req.body;
    console.log(req);
    const blogPost = await BlogPost.findById(blogPostId);

    if (!blogPost || String(blogPost.author) !== String(userid)) {
      return res.status(403).json({ error: 'You are not authorized to delete this blog post' });
    }
     await BlogPost.findByIdAndDelete(blogPostId);
    await User.findByIdAndUpdate(userid, { $pull: { blogPost: blogPostId } });

    await User.findByIdAndUpdate(userid, { $pull: { comments: blogPost.comments } });

    await Comment.deleteMany({ blogPost: blogPostId });

     res.json({ message: 'Blog post deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
