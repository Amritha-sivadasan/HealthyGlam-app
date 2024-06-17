const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const postRoute=require('./Routes/postRoute')
const {createChannel}= require('./rabbitmq/rabbitmq')
dotenv.config()

app.use(express.json());


app.use('/',postRoute)
  
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log(" mongoose connectd successfully");
  })
  .catch(() => {
    console.log("mongodb error please check connectoin from user");
  });
  createChannel()

app.listen(process.env.PORT, () => {
  console.log(" user server is running on the port 3003");
});
