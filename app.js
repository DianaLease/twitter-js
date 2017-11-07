//main application
const express = require('express');
const twitterApp = express();
const router = require('./routes/index.js');

twitterApp.listen(3000, () => {
    console.log("Server's listenin'!");
})
twitterApp.use('/', router);

twitterApp.get("/", (req, res) => {
    res.send("Welcome back!")
})

twitterApp.get("/news", (req, res) => {
    res.send("No news for you. You're lonely, sucker!");
})