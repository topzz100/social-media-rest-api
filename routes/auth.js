const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require("bcrypt");


//register user
router.post("/register", async (req, res) => {
  try {
    //gen new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

   // create new user
    const user = await User.create({...req.body, password: hashedPassword});
    //save user and respond
   
    res.status(200).json(user);
  } catch (err) {
    res.status(500).json(err)
    console.log(err)
  }
});

module.exports = router
