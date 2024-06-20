const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const UserRoute = require("./Routes/userRoute");
const cors = require("cors");
const morgan = require("morgan");
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors())

app.use((req, res, next) => {
  console.log(`This is auth service ${req.url} req.method ${req.method}`);
  console.log(`Request Body: ${JSON.stringify(req.body, null, 2)}`);
  next();
});
app.use("/", UserRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log(" mongoose connectd successfully");
  })
  .catch(() => {
    console.log("mongodb error please check connectoin from user");
  });

app.listen(3001, () => {
  console.log(" user server is running on the port 3001");
});
