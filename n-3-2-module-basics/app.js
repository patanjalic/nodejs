console.log('Starting app.');


const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');

const command = process.argv[2];
if(command === 'add') {
  console.log('adding new note');
} else if(command === 'list') {
  console.log('listing notes');
} else if(command === 'remove'){
  console.log('remove notes');
} else if(command === 'read'){
  console.log('reading note');
}else {
  console.log('command not valid');
}
