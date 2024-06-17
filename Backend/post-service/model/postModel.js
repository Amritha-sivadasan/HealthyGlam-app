const mongoose = require('mongoose');


const postSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
          required:true
    }
},{timestamps:true})

const post =mongoose.model('Post',postSchema)
module.exports=post