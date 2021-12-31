const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
  {
    username:{
      type: String,
      require: true,
      min: 3,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    profilePicture: {
      type: String,
      default: "",
    },
    coverPicture: {
      type: String,
      default: "",
    },
    followers: {
      type: Array,
      defualt: [],
    },
     followings: {
      type: Array,
      defualt: [],
    },
    isAdmin: {
      type: String,
      default: false,
    },
    desc: {
      type: String,
      max: 50,
    },
    city: {
      type: String,
      max: 50,
    },
    from: {
      type: Number,
      enum: [1, 2, 3],
    },  
},
{timestamps: true}
);

module.exports = mongoose.model("User", userSchema)