const express = require('express')
const router = express.Router()
const User = require('../models/user')
const bcrypt = require("bcrypt");
const user = require('../models/user');


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

//login
router.post('/login', async(req, res) => {
  try{
    const user = await User.findOne({email: req.body.email})
    if(user){
      isPassword = bcrypt.compareSync(req.body.password, user.password)
      if(isPassword){
        res.status(200).json({status: 'ok'})
      }else{
        res.status(404).send('wrong password')
      }
    }else{
      res.status(404).send('Cant find user')
    }
  }catch(err){
    console.log(err);
  }
})


module.exports = router
