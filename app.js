//main application
const express = require('express');
const twitterApp = express();
const router = require('./routes/index.js');
const nunjucks = require('nunjucks');
const morgan = require('morgan');

twitterApp.listen(3000, () => {
    console.log("Server's listenin'!");
})


twitterApp.set ('view engine', 'html');
twitterApp.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});

const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];


twitterApp.use('/', router);

twitterApp.get("/", (req, res) => {
    res.render ('index', {title: 'Hall of Fame', people: people});
})

twitterApp.get("/news", (req, res) => {
    res.send("No news for you. You're lonely, sucker!");
})


var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
