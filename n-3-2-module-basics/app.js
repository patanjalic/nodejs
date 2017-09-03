console.log('Starting app.');

const fs = require('fs');
const os = require('os');
const notes = require('./notes.js');

var user = os.userInfo();

var note  = notes.addNote();
console.log(note);
console.log(notes.add(9,-2));
// console.log(user.username);
// fs.appendFile('greetings.txt',`Hello ${user.username}!`);
