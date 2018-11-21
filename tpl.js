// 模板引擎: art-template
const express = require("express");
const app = express();
const path = require("path");
const template = require("art-template");

//设置模板文件的路径
app.set("views", path.join(__dirname, "template"));
// 设置模板文件的后缀
app.set("view engine", "art");
// 使得express兼容art-template模板引擎
app.engine('art', require('express-art-template'));

app.get("/list", (req, res) => {
    // 参数一: 模板的名称, 不带后缀名和路径, 因为上面已经定义过了
    // 参数二: 渲染模板的数据
    res.render("list", {
        title: "你好世界",
        list: ["apple", "bannar", "orange", "peek"]
    });
});

app.listen(8964, () => {
    console.log('App listening on port 8964!');
});