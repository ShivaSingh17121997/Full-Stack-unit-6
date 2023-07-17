const {schema, model} = require("mongoose");

const postschema = Schema({
    title:String,
    body:String,
    device:String,
    noc:Number,
    userID:String,
    username:String
})

const PostModel = model("post",postschema)

module.exports = {PostModel}