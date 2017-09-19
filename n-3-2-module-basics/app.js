console.log('Starting app.');


const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs
  .command('add','Title of note',{
    title:{
      describe:'Add notes title',
      demand:true,
      alias:'t'
    },
    body:{
      describe:'Add notes body',
      demand:false,
      alias:'b'
    }
  })
  .command('list','List all notes')
  .command('read','Read of note',{
    title:{
      describe:'Read a note with title',
      demand:true,
      alias:'t'
    }
  })
  .command('remove','Remove a note',{
    title:{
      describe:'Remove a note with title',
      demand:true,
      alias:'t'
    }
  })
  .help()
  .argv;
const command = yargs.argv._[0];
console.log(process.argv);
console.log(yargs.argv);
if(command === 'add') {
  var note = notes.addNote(argv.title,argv.body);
  if(note != undefined) {
    console.log(`note added successfully ${note.title} ${note.body}`);
  } else {
    console.log('note already exists');
  }
} else if(command === 'list') {
  var allNotes = notes.listAll();
  allNotes.forEach((note) => notes.logNote(note));
} else if(command === 'remove'){
  var isRemoved = notes.removeNote(argv.title);
  var message = isRemoved?'Note is removed':'Note is not removed';
  console.log(message);
} else if(command === 'read'){
  var note = notes.readNote(argv.title);
  var message = (note != undefined) ? `Note found ${note.title} ${note.body}`:'Note not found';
  console.log(message);
}else {
  console.log('command not valid');
}
