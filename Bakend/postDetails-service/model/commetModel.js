const mongoose=require('mongoose')

const commentScheama=mongoose.Schema({
     userId:{
        type:mongoose.Types.ObjectId,
        required:true
     },
      postId:{
        type:mongoose.Types.ObjectId,
        required:true
      },
       comment:{
        type:String,
       }
},{timestamps:true})

const comment=mongoose.model('CommentDetails',commentScheama)
 
module.exports=comment