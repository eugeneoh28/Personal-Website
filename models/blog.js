var mongoose = require("mongoose");

var blogSchema = new mongoose.Schema({
    blog_id:Number,
    order:Number,
    title:String,
    date:String,
    post:String    
})

module.exports = mongoose.model("Blog", blogSchema);