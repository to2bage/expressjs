const path = require("path");
const express = require("express");
const app = express();

app.use("/static", express.static(path.join(__dirname, "public")));
// app.use('/static', express.static('public'))
app.get("/", (req, res) => {
    res.send("你好!世界...")
});

app.listen(8964, "127.0.0.1", () => {
    console.log("Server is Running at 127.0.0.1:8964");
});