const express = require("express");
const app = express();
const path = require("path");
const proxy = require("http-proxy-middleware");

app.use("/activity/static", express.static("./static"));

// app.use(
//   "/portal/**",
//   proxy.createProxyMiddleware({
//     // 代理目标地址
//     target: "http://47.92.226.148:8085",
//     changeOrigin: true,
//     // pathRewrite: {
//     //   // 地址重写
//     //   "/apis": "/",
//     // },
//   })
// );

app.get("*", (req, res) => {
  res.sendfile("./index.html");
});

app.listen(7001);
