const path = require("path");
const express = require("express");
const Router = express.Router();

Router.use((req, res, next) => {
    console.log("Time: ", Date.now());
    next();
});

Router.get("/", (req, res) => {
    // console.log(req);
    res.send(path.join(req.baseUrl, req.url));
});

//#region 路径的参数
// Router.get("/:id/:name/:age", (req, res) => {
//     res.send(`${req.params.id} : ${req.params.name} : ${req.params.age}`);
// })
//#endregion

//#region 使用Router.param()方法, 可以对某些参数进行校验...
Router.param("id", (req, res, next, id) => {
    console.log("id: ", id);
    if (id === "007") {
        next();
    } else {
        res.sendStatus(404);
    }
})

Router.get("/:id", (req, res) => {
    console.log(req.params.id);
    res.send("byte-byte");
})
//#endregion

module.exports = Router;