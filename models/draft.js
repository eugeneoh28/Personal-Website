var mongoose = require("mongoose");

var draftSchema = new mongoose.Schema({
    draft_id:Number,
    order:Number,
    title:String,
    date:String,
    post:String    
})

module.exports = mongoose.model("Draft", draftSchema);