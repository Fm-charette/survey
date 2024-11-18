const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  title: {
    type: String,
    required: false,
  },
  content: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const List = mongoose.model('List', listSchema);
module.exports = List;