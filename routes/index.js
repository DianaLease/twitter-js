'use strict'
const express = require('express');
const router = express.Router();

const tweetBank = require('../tweetBank');
//const tweets = tweetBank.list();

router.get('/', function(req, res) {
    let tweets = tweetBank.list();
    res.render('index', { tweets: tweets });
});

router.get('/users/:name', function(req, res) {
    let theName = req.params.name; //some first name
    let theNamesTweets = tweetBank.find(function(element) {
        return (element.username === theName);
    })
    res.render('index', { tweets: theNamesTweets, showForm: true })
})

router.use(express.static('public'));

router.get('/ADDNEWTWEET', function(req, res) {
    res.render('index', { showForm: true })
})

module.exports = router;

//'/Users/dianalease/Desktop/Fullstack/Junior-Phase/twitter-js/public/stylesheets/style.css'