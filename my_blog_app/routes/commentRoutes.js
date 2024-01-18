const express = require('express');
const router = express.Router();
const CommentController = require('../controllers/commentController');
router.post('/create', CommentController.create);
router.get('/list', CommentController.list);
router.post('/list2', CommentController.list2);



// Example: Update a comment by ID
router.put('/:id', CommentController.update);
//router.put('/:id', CommentController.update);

// Example: Delete a comment by ID
router.delete('/:id', CommentController.delete);
// Example: Get a specific comment by ID
router.get('/:id', CommentController.getById);
module.exports = router;
