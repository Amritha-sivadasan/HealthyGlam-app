const express = require("express");
const cors = require("cors");
const app = express();
const proxy = require("express-http-proxy");

app.use(express.json());
app.use(cors());

app.get('/',()=>{
  console.log('api gateway is working');
})

app.use("/api/user", proxy("http://auth-service:3001"));
app.use("/api/comment", proxy("http://comment-service:3002"));    
app.use("/api/post", proxy("http://post-service:3003")); 
app.use("/api/getPost", proxy("http://post_details-service:3004")); 

app.listen(3000, () => {
  console.log("server is running on the port 4000");
});
