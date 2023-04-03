const notes = require('./notes');

const data = {
  title: 'title',
  tags: 'myTag',
  body: 'myBody',
};

const { title, tags, body } = data;
console.log(title, tags, body);

const newNote = { title, tags, body };
notes.push(newNote);
console.log(notes);
