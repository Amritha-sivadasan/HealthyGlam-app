const express =require('express')
const {addPost,getPost} =require('../controller/postController')

const router= express.Router()

router.post('/newPost',addPost)
router.get('/',getPost)

module.exports=router