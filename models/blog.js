var mongoose = require("mongoose");

var blogSchema = new mongoose.Schema({
    title:String,
    author:String,
    date:Date,
    post:String    
})

module.exports = mongoose.model("Blog", blogSchema);