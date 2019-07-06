module.exports = (app) => {
    const books = require('../../controllers/book.controller.js');

    // Create 
    app.post('/books', books.create);

    // Retrieve find 
    app.get('/books', books.findAll);

    // Retrieve a single
    app.get('/books/:bookId', books.findOne);

    // Update 
    app.put('/books/:bookId', books.update);

    // Delete 
    app.delete('/books/:bookId', books.delete);
}