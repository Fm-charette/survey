const mongoose = require('mongoose');

const listItemSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
  },
}, { timestamps: true });

const ListItem = mongoose.model('ListItem', listItemSchema);
module.exports = ListItem;