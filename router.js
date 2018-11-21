const path = require("path");
const express = require("express");
const app = express();


app.all("/all", (req, res, next) => {
    // res.send("针对所有方法请求路径/all"); error
    console.log("针对所有方法请求路径/all");
    next();
});

//#region  普通的GET/POST方法
// app.get("/all", (req, res) => {
//     console.log("只针对get方法请求路径/all");
//     res.send("GET /all")
// });

// app.post("/all", (req, res) => {
//     console.log("只针对post方法请求路径/all");
//     res.send("POST /all")
// })
//#endregion

//#region 使用app.route()方法
// app.route("/all")
//     .get((req, res) => {
//         console.log("只针对get方法请求路径/all");
//         // res.send(JSON.parse({name: "to2bage", pwd: "021635", age: 43, msg: "只针对get方法请求路径/all"}))
//         // res.json({name: "to2bage", pwd: "021635", age: 43, msg: "只针对get方法请求路径/all"});
//         // res.render(path.join(__dirname, "public/test.html"), (err, data) => {
//         //     res.send(data); // 必须是模板文件
//         // });
//         res.status(200).send("只针对get方法请求路径/all");
//     })
//     .post((req, res) => {
//         console.log("只针对post方法请求路径/all");
//         res.redirect("http://www.baidu.com");
//     });
//#endregion

//#region 使用正则表达式
// app.route(/a/)
//     .get((req, res) => {
//         console.log("匹配路径包含字符a的get方法的请求\n");
//         res.status(200).send("GET /a/");
//     })
//     .post((req, res) => {
//         console.log("匹配路径包含字符a的post方法的请求\n");
//         res.status(200).send("POST /a/");
//     });
//#endregion

//#region 路线参数
// app.get("/user/:userid/book/:bookid", (req, res) => {
//     console.log(req.params);
//     res.send(`${req.params.userid} <=> ${req.params.bookid}`);
// });
// app.get("/location/:from-:to", (req, res) => {
//     console.log(req.params);
//     res.send(`From ${req.params.from} To ${req.params.to}`);
// });
// app.get("/fullname/:lastname.:firstname", (req, res) => {
//     console.log(req.params);
//     res.send(`FristName: ${req.params.firstname}   LastName: ${req.params.lastname}`);
// });
//#endregion

//#region 路线处理程序
let isCon = false;
// app.get("/all", (req, res, next) => {
//     console.log("现在这里处理");
//     if (!isCon) {
//         res.send("只处理到这里哦, 下面的不处理了哦....")
//     } else {
//         next();
//     }
// }, (req, res) => {
//     console.log("再在这里处理")
//     res.status(200).send("处理完毕了");
// });
//#endregion

//#region express.Router()
app.use('/users', require("./routers/user.js"));
//#endregion

app.listen(8964, () => {
    console.log('App listening on port 8964!');
});