const mongoose = require('mongoose');
const userController = require('./controllers/userController');
const blogPostController = require('./controllers/blogPostController');
const commentController = require('./controllers/commentController');

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/blogging_platform', { useNewUrlParser: true, useUnifiedTopology: true });
//mongodb://localhost:27017
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', async () => {
  console.log('Connected to the database');

  try {
    // Create sample users
    const michael = await userController.register1({ body: { username: 'Michael', email: 'michael@example.com', pass: 'password1' } });
    const jim = await userController.register1({ body: { username: 'Jim', email: 'jim@example.com', pass: 'password2' } });
    const dwight = await userController.register1({ body: { username: 'Dwight', email: 'dwight@example.com', pass: 'password3' } });
    const users = await userController.list1();

    // Find user IDs by username
    console.log(users);
    const michaelId = users.find(user => user.username === 'Michael')._id;
    const jimId = users.find(user => user.username === 'Jim')._id;
    const dwightId = users.find(user => user.username === 'Dwight')._id;
    
    


    // Create sample blog posts with authors
    const physicsBlogPost = await blogPostController.create1({
      body: { title: 'Physics', content: 'This is a blog post about Physics.', author: michaelId, tags: ['A'], comments: [] }
    });
    const chemistryBlogPost = await blogPostController.create1({
      body: { title: 'Chemistry', content: 'This is a blog post about Chemistry.', author: jimId, tags: ['B'], comments: [] }
    });
    const biologyBlogPost = await blogPostController.create1({
      body: { title: 'Biology', content: 'This is a blog post about Biology.', author: dwightId, tags: ['C'], comments: [] }
    });
    const blogsd = await blogPostController.list1();
    const blog_michaelId = blogsd.find(blog => blog.title === "Physics")._id;
    const blog_jimId = blogsd.find(blog => blog.title === "Chemistry")._id;
    const blog_dwightId = blogsd.find(blog => blog.title === "Biology")._id;
    // Create sample comments
    await commentController.create1({
      body: { commenterName: 'Jim', commentText: 'Interesting!', blogPostId: blog_jimId, userId: jimId }
    });
    await commentController.create1({
      body: { commenterName: 'Dwight', commentText: 'I disagree.', blogPostId: blog_dwightId, userId: dwightId }
    });
    await commentController.create1({
      body: { commenterName: 'Michael', commentText: 'Nice post!', blogPostId: blog_michaelId, userId: michaelId }
    });
    await commentController.create1({
      body: { commenterName: 'Dwight', commentText: 'This is great.', blogPostId: blog_dwightId, userId: dwightId }
    });
    await commentController.create1({
      body: { commenterName: 'Michael', commentText: 'Good read.', blogPostId: blog_michaelId, userId: michaelId }
    });
    await commentController.create1({
      body: { commenterName: 'Jim', commentText: 'I learned a lot.', blogPostId: blog_jimId, userId: jimId }
    });
    console.log('Sample data populated successfully');
  } catch (error) {
    console.error(error);
  } finally {
    // Close the database connection
    mongoose.connection.close();
  }
});
