const express = require('express');
const router = express.Router();
const BlogPostController = require('../controllers/blogPostController');
router.post('/create', BlogPostController.create);
router.post('/create', BlogPostController.create1);
router.get('/list', BlogPostController.list);
router.get('/list', BlogPostController.list1);
router.put('/upd', BlogPostController.update);
router.post('/del', BlogPostController.delete);
router.post('/tag', BlogPostController.classify);

// Example: Update a blog post by ID
//router.put('/:id', BlogPostController.update);


// Example: Delete a blog post by ID
//router.delete('/:id', BlogPostController.delete);

module.exports = router;

// Example: Get a specific blog post by ID
router.get('/:id', BlogPostController.getById);