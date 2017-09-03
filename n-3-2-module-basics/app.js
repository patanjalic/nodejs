console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');
const _ = require('lodash');
var user = os.userInfo();

// var note  = notes.addNote();
// console.log(note);
// console.log(notes.add(9,-2));
// console.log(user.username);
// fs.appendFile('greetings.txt',`Hello ${user.username}!`);


console.log(_.isString(true));
console.log(_.isString('javascript'));

var array = [1,2,3,4,1,2,5,8,9,10];
console.log(_.uniq(array));
