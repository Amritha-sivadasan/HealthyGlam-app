const express = require("express");
const cors = require("cors");
const app = express();
const proxy = require("express-http-proxy");

app.use(express.json());
app.use(cors());

app.use('/user',proxy("http://localhost:4001"))
app.use('/comment',proxy("http://localhost:4003"))
app.use('/post',proxy("http://localhost:4002"))
app.use('/getPost',proxy("http://localhost:4004"))

app.listen(4000, () => {
  console.log("server is running on the port 4000");
});
