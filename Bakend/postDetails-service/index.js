const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const postDetails= require('./Controller/postDetailController')
const  {consumerPost}=require('./utils/postConsumer')

dotenv.config()

app.use(express.json());
app.get('/',postDetails)

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log(" mongoose connectd successfully");
  })
  .catch(() => {
    console.log("mongodb error please check connectoin from user");
  });

  consumerPost(); 

app.listen(process.env.PORT, () => {
  console.log(" user server is running on the port 4004");
});
