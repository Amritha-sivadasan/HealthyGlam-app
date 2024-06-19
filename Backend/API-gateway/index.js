const express = require("express");
const cors = require("cors");
const app = express();

const { createProxyMiddleware } = require("http-proxy-middleware");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("API Gateway is working");
  console.log("API Gateway is working");
});

const proxyTargets = {
  auth: "http://localhost:3001/",
  comment: "http://localhost:3002/",
  post: "http://localhost:3003/",
  postDetails: "http://localhost:5003/",
};

app.use(
  "/api/user",
  createProxyMiddleware({ target: proxyTargets.auth, changeOrigin: true })
);
app.use(
  "/api/comment",
  createProxyMiddleware({ target: proxyTargets.comment, changeOrigin: true })
);
app.use(
  "/api/post",
  createProxyMiddleware({ target: proxyTargets.post, changeOrigin: true })
);
app.use(
  "/api/getPost",
  createProxyMiddleware({
    target: proxyTargets.postDetails,
    changeOrigin: true,
  })
);

app.use((err, req, res, next) => {
  console.error("Proxy Error:", err);
  res.status(500).send("Proxy Error");
});

app.listen(4000, () => {
  console.log("server is running on the port 4000");
});
