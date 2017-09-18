console.log('Starting app.');


const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');


const command = yargs.argv._[0];
console.log(process.argv);
console.log(yargs.argv);
if(command === 'add') {
  var note = notes.addNote(yargs.argv.title,yargs.argv.body);
  if(note != undefined) {
    console.log(`note added successfully ${note.title} ${note.body}`);
  } else {
    console.log('note already exists');
  }
} else if(command === 'list') {
  var allNotes = notes.listAll();
  allNotes.forEach((note) => notes.logNote(note));
} else if(command === 'remove'){
  var isRemoved = notes.removeNote(yargs.argv.title);
  var message = isRemoved?'Note is removed':'Note is not removed';
  console.log(message);
} else if(command === 'read'){
  var note = notes.readNote(yargs.argv.title);
  var message = (note != undefined) ? `Note found ${note.title} ${note.body}`:'Note not found';
  console.log(message);
}else {
  console.log('command not valid');
}
