const express = require('express');
const dotenv=require('dotenv')
const mongoose=require('mongoose')
dotenv.config()
const app= express()
app.use(express.json())
const commentRoute= require('./Routes/commentRoute')
const {createChannel}=require('./rabbitmq/rabbitmq')


app.use('/api/comment',commentRoute)
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('mongodb is connected in comment service');
}).catch(()=>{
    console.log('database connection error from commment service');
})
createChannel()

app.listen(process.env.PORT,()=>{
    console.log('server is running on the port 3002');
})