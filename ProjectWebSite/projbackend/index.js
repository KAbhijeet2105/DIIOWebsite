const express = require("express");

const app = express();
const port = 8000;

app.get("/", (req,res) => {
    return res.send("I am ironman");
});

app.listen(port,() => {
    console.log("Server Onnn!!!!!!");
});