const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const path = require("path");

//#region 应用级别的中间件
// app.use("/user", (req, res, next) => {
//     console.log("第一个中间件");
//     next();
// })

// app.use("/user", (req, res, next) => {
//     console.log("第二个中间件");
//     next();
// })

// app.use("/user", (req, res) => {
//     console.log("最后一个中间件");
//     res.status(200).send("你好, 世界...")
// });
//#endregion

//#region 路由级别的中间件
// let visitors = 0;
// let m1 = (req, res, next) => {
//     console.log("中间件一:");
//     console.log("   ", Date.now().toLocaleString());
//     next();
// }
// let m2 = (req, res, next) => {
//     console.log("中间件二:");
//     console.log("   写入日志\n")
//     next("route");          // next("route") 跳转到下一个路由; next() 跳转到下一个中间件
// }
// let m3 = (req, res, next) => {
//     console.log("中间件三:");
//     console.log("   ", req.url);
//     next();
// }
// let m4 = (req, res, next) => {
//     console.log("中间件四:");
//     console.log("   访问的人数: ", ++visitors);
//     res.status(200).send(`访问的人数: ${visitors}`);
// }

// app.get("/user", [m1, m2, m3, m4]);
// app.get('/user', (req, res) => {
//     console.log("路由致辞");
//     res.status(200).send("hello world")
// });
//#endregion

//#region 解析POST请求获得数据的中间件, 使用body-parser
app.use("/static", express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({extended: false}));      // 只用于POST请求,专门用于解析post的数据;  对GET请求无效

app.get("/login", (req, res) => {
    let data = req.query;
    console.log(data);
    res.send("GET OK!")
});

app.post("/login", (req, res) => {
    let data = req.body;
    console.log(data);
    res.send("POST OK!!!");
});
//#endregion

app.listen(8964, "127.0.0.1", () => {
    console.log('App listening on port 3000!');
});