const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');
router.post('/register', UserController.register);
router.get('/list',UserController.list);
router.get('/list',UserController.list1);
router.post('/delete',UserController.delete);
router.post('/login',UserController.authenticate);
module.exports = router;
