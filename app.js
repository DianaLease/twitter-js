//main application
const express = require('express');
const twitterApp = express();
const router = require('./routes/index.js');
const nunjucks = require('nunjucks');
const morgan = require('morgan');
const bodyParser = require('body-parser');

twitterApp.listen(3000, () => {
    console.log("Server's listenin'!");
})


twitterApp.set('view engine', 'html');
twitterApp.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });
twitterApp.use(bodyParser.urlencoded({ extended: true }))
twitterApp.use('/', router);


// var locals = {
//     title: 'An Example',
//     people: [
//         { name: 'Gandalf'},
//         { name: 'Frodo' },
//         { name: 'Hermione'}
//     ]
// };
// const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];