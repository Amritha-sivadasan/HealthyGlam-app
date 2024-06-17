const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const UserRoute = require("./Routes/userRoute");
dotenv.config();

app.use(express.json());

app.use("/", UserRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log(" mongoose connectd successfully");
  })
  .catch(() => {
    console.log("mongodb error please check connectoin from user");
  });

app.listen(process.env.PORT, () => {
  console.log(" user server is running on the port 3001");
});
