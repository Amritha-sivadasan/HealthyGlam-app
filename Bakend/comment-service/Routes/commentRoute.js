const express =require('express')
const {SaveComment} =require('../Controller/commentController')

const route= express.Router()
route.post('/addComment',SaveComment)

module.exports=route