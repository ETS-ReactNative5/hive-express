const { Schema } = require("mongoose");

//These are the attributes a user will have
//A lot of these will be pulled from the user's Meetup.com profile
const userSchema = new Schema({
  meetup_uid: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  city: {
    type: String,
    required: true
  },
  avatar: {
    type: String
  },
  admin: {
    type: Boolean,
    required: true,
    default: false
  },
  confirmed: {
    type: Boolean,
    required: true,
    default: false
  },
  access_token: String,
  refresh_token: String,
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = userSchema;
