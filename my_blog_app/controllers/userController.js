const User = require('../models/user');

exports.list = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
exports.list1 = async (req, res) => {
  try {
    const users = await User.find();
    return users;
  } catch (error) {
    console.error(error);
  }
};
exports.register1 = async (req, res) => {
  try {
    const { username, email, pass } = req.body;
    console.log("usereg ->",req.body);
    const password = Buffer.from(pass).toString('base64');
    console.log(password);
    const newUser = new User({ username, email, password });
    await newUser.save();}
    catch (error) {
      console.error(error);
      
    }
  };
exports.register = async (req, res) => {
  try {
    const { username, email, pass } = req.body;
    console.log("usereg ->",req.body);
    const password = Buffer.from(pass).toString('base64');
    console.log(password);
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({  message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({  error: 'Internal Server Error' });
  }
};
exports.authenticate = async (req, res) => {
  try {
    const { email, pass } = req.body;
    console.log("userlog->",req.body);
    const password = Buffer.from(pass).toString('base64');
    console.log(password);
    let authuser = (await User.find()).find(item => item.email === email && item.password === password);
    console.log(await User.find());
    console.log(authuser);
    let ids;
    if(authuser){
      ids=authuser._id;
      res.status(201).json({ message: 'User logged in successfully' ,success:true,idss:ids});
    }
    else{
      res.status(200).json({ message: 'Authentication failed' , success:false});
    }
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
exports.delete = async (req, res) => {
  try {
    let userfound=await User.findByEmail(req.body.email);
    console.log("user found\n",userfound);
    res.json({ message: 'Users deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
