console.log('starting notes');
const fs = require('fs');

var fetchNotes = () => {
  try {
      var notesString = fs.readFileSync('notes-data.json');
      return JSON.parse(notesString);
  } catch(e) {
      return [];
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json',JSON.stringify(notes));
};

var addNote = (title,body) => {
  console.log('adding note',title,body);
  var notes = fetchNotes();
  note = {title,body};

  var duplicate = notes.filter((note) => note.title === title);
  if(duplicate.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var logNote = (note) => {
  console.log(`Title: ${note.title} Body: ${note.body}`);
};

var listAll = () => {
  return fetchNotes();
};

var readNote = (title) => {
  var notes = fetchNotes();
  var note = notes.filter((note) => note.title === title);
  console.log(note[0]);
  return note[0];
};

var removeNote = (title) => {
  var notes = fetchNotes();
  var updatedNotes = notes.filter((note) => note.title !== title);
  saveNotes(updatedNotes);
  return notes.length !== updatedNotes.length;
};


module.exports = {
  addNote,
  listAll,
  readNote,
  removeNote,
  logNote
};
