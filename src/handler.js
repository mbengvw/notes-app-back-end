const { nanoid } = require('nanoid');
const notes = require('./notes');

// handler buat penambahan note baru
const addNoteHandler = (request, h) => {
  const { title, tags, body } = request.payload;

  const id = nanoid(16);
  const createdAt = new Date().toISOString();
  const updatedAt = createdAt;

  const newNote = {
    id, title, tags, body, createdAt, updatedAt,
  };

  notes.push(newNote);
  console.log(notes);

  const isSuccess = notes.filter((note) => note.id === id).length > 0;

  if (isSuccess) {
    const response = h.response({
      status: 'success',
      message: 'Catatan berhasil ditambahkan',
      data: {
        noteid: id,
      },
    });
    response.code(201);
    response.header('Access-Control-Allow-Origin', 'http://notesapp-v1.dicodingacademy.com');

    return response;
  }
  const response = h.response({
    status: 'fail',
    message: 'Catatan gagal ditambahkan',
  });
  response.code(500);
  return response;
};

const getAllNotesHandler = () => ({

});

module.exports = { addNoteHandler };
