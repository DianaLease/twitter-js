'use strict'
const _ = require('lodash');

let data = [];

//FUNCTIONS
function add(name, content) {
    data.push({ name: name, content: content });
}

function list() {
    return _.cloneDeep(data);
}

function find(properties) {
    //Iterates over elements of a collection, returning
    //an array of all elements that the second arg
    //returns truthy for. the second arg is a callback
    //with 3 arguments. Filter for an object
    //returns a NEW array
    return _.cloneDeep(_.filter(data, properties));
}

module.exports = { add: add, list: list, find: find };

//SOME FAKE TWEETS
const randArrayEl = function(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
};

const getFakeName = function() {
    const fakeFirsts = ['Nimit', 'David', 'Shanna', 'Emily', 'Scott', 'Karen', 'Ben', 'Dan', 'Ashi', 'Kate', 'Omri', 'Gabriel', 'Joe', 'Geoff'];
    const fakeLasts = ['Hashington', 'Stackson', 'McQueue', 'OLogn', 'Ternary', 'Claujure', 'Dunderproto', 'Binder', 'Docsreader', 'Ecma'];
    return randArrayEl(fakeFirsts) + " " + randArrayEl(fakeLasts);
};

const getFakeTweet = function() {
    const awesome_adj = ['awesome', 'breathtaking', 'amazing', 'funny', 'sweet', 'cool', 'wonderful', 'mindblowing', 'impressive'];
    return "Fullstack Academy is " + randArrayEl(awesome_adj) + "! The instructors are just so " + randArrayEl(awesome_adj) + ". #fullstacklove #codedreams";
};

for (let i = 0; i < 10; i++) {
    module.exports.add(getFakeName(), getFakeTweet());
}
//console.log(data)
//console.log(module.exports.find(['content', 'awesome']));