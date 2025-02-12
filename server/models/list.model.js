const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  element: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ListItem' }],
}, { timestamps: true});

const List = mongoose.model('List', listSchema);
module.exports = List;