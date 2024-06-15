const express =require('express')
const {SaveComment} =require('../Controller/commentController')

const route= express.Router()
route.post('/',SaveComment)

module.exports=route