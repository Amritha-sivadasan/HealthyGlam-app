const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const postDetails = require("./Controller/postDetailController");
const cors = require("cors");
const { consumerPost } = require("./utils/postConsumer");
const { consumerComment } = require("./utils/commentConsumer");
const { createChannel } = require("./rabbitmq/rabbitmq");
dotenv.config();

app.use(cors());
app.use(express.json());

app.use("/", postDetails);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log(" mongoose connectd successfully");
  })
  .catch((err) => {
    console.log("mongodb error please check connectoin from user", err);
  });

  createChannel().then(()=>{
    consumerPost()
    consumerComment()
   
  })
const PORT = 5000;
app.listen(PORT, () => {
  console.log(` user server is running on the port ${PORT}`);
});
