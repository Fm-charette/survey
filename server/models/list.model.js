const mongoose = require('mongoose');

const listSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  element: [{ type: mongoose.Schema.Types.ObjectId, ref: 'ListItem' }],
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  sharedWith: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true});

const List = mongoose.model('List', listSchema);
module.exports = List;