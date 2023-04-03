const { addNoteHandler } = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: () => 'Hai semua',
  },
  {
    method: 'POST',
    path: '/note',
    handler: addNoteHandler,
    options: {
      cors: {
        origin: ['*'],
      },
    },
  },

];

module.exports = routes;
