const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const app = express();
const { createProxyMiddleware } = require("http-proxy-middleware");


// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

app.use((req, res, next) => {
  console.log(`Request Method: ${req.method}`);
  console.log(`Request URL: ${req.url}`);
  console.log(`Request Headers: ${JSON.stringify(req.headers, null, 2)}`);
  console.log(`Request Body: ${JSON.stringify(req.body, null, 2)}`);
  next();
});
app.get("/", (req, res) => {
  res.send("API Gateway is working");
  console.log("API Gateway is working");
});

const proxyTargets = {
  auth: "http://auth_service:3001",
  comment: "http://comment_service:3002",
  post: "http://post_service:3003",
  postDetails: "http://post_details_service:5000",
};

app.use(
  "/api/user",
  createProxyMiddleware({
    target: proxyTargets.auth,
    changeOrigin: true,
  })
);
app.use(
  "/api/comment",
  createProxyMiddleware({
    target: proxyTargets.comment,
    changeOrigin: true,
  })
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
