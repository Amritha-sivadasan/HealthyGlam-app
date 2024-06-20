const mongoose =require('mongoose')

const postDetailsSchema=mongoose.Schema({
   userId:{
      type:mongoose.Types.ObjectId
   },
     postId:{
        type:mongoose.Types.ObjectId
     },
     title :{
        type :String,
       
     },
     description:{
        type:String,
    
     },
     image:{
        type:String,

     },
     comment:[{
      type:String
     }]

},{timestamps:true})

const  postDetails =mongoose.model('PostDetails',postDetailsSchema)
module.exports=postDetails
