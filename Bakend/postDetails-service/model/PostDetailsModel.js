const mongoose =require('mongoose')

const postDetailsSchema=mongoose.Schema({
     postId:{
        type:mongoose.Types.ObjectId
     },
     title :{
        type :String,
        required:true
     },
     description:{
        type:String,
        required:true
     },
     image:{
        type:String,

     },

},{timestamps:true})

const  postDetails =mongoose.model('PostDetails',postDetailsSchema)
module.exports=postDetails
