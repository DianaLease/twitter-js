'use strict'
const express = require('express');
const router = express.Router();

const tweetBank = require('../tweetBank');

router.get('/', function(req, res) {
    let tweets = tweetBank.list();
    res.render('index', { tweets: tweets, showForm: true, theUserName: "You" });
});

router.get('/users/:name', function(req, res) {
    let theName = req.params.name;
    let theNamesTweets = tweetBank.find({ name: theName })
    res.render('index', { tweets: theNamesTweets, showForm: true, theUserName: theName })
})

router.use(express.static('public'));

router.post("/tweets", (req, res, next) => {
    var name = req.body.name;
    var text = req.body.text;
    tweetBank.add(name, text);
    res.redirect('/');
})


module.exports = router;

//'/Users/dianalease/Desktop/Fullstack/Junior-Phase/twitter-js/public/stylesheets/style.css'