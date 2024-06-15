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
       commnet:{
        type:String,
       }
},{timestamps:true})

const comment=mongoose.model('Comment',commentScheama)
 
module.exports=comment