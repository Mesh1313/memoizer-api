const mongoose = require('mongoose');

const memoSchema = mongoose.Schema({
  title: String,
  content: String,
  createdAt: Number,
});

const Memo = mongoose.model('Memo', memoSchema);

module.exports = Memo;