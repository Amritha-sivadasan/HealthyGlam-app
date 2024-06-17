const express = require("express");
const cors = require("cors");
const app = express();
const proxy = require("express-http-proxy");

app.use(express.json());
app.use(cors());

app.use("/api/user", proxy("http://localhost:3001"));
app.use("/api/comment", proxy("http://localhost:3002"));    
app.use("/api/post", proxy("http://localhost:3003")); 
app.use("/api/getPost", proxy("http://localhost:3004")); 

app.listen(3000, () => {
  console.log("server is running on the port 4000");
});
