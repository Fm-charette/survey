const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: function (value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      },
      message: 'Please type a valid email format adress',
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        const regex = /^(?=.*[A-Z])(?=.*[#=_@&]).{8,}$/;
        return regex.test(value);
      },
      message: 'Password must contain 8 character with Majuscule and one special char #=_@&',
    }
  },
  picture: {
    data: Buffer,
    contentType: String
  },
  isAdmin: {
    type: Boolean,
    default: false,
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;