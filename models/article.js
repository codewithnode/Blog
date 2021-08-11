const mongoose = require('mongoose');

const article = mongoose.Schema({
    title: String,
    author: String,
    content: String
});

module.exports = mongoose.model('Article', article);