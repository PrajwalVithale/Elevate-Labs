// server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());            // allow requests from frontend
app.use(express.json());    // parse JSON bodies

let books = [
  { id: 1, title: '1984', author: 'George Orwell' },
  { id: 2, title: 'The Hobbit', author: 'J.R.R. Tolkien' }
];

// GET /books - list
app.get('/books', (req, res) => {
  res.json(books);
});

// POST /books - create
app.post('/books', (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) return res.status(400).json({ error: 'title and author required' });
  const id = books.length ? Math.max(...books.map(b => b.id)) + 1 : 1;
  const book = { id, title, author };
  books.push(book);
  res.status(201).json(book);
});

// PUT /books/:id - update
app.put('/books/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const { title, author } = req.body;
  const idx = books.findIndex(b => b.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Book not found' });
  books[idx] = { id, title: title ?? books[idx].title, author: author ?? books[idx].author };
  res.json(books[idx]);
});

// DELETE /books/:id - remove
app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  const idx = books.findIndex(b => b.id === id);
  if (idx === -1) return res.status(404).json({ error: 'Book not found' });
  const removed = books.splice(idx, 1)[0];
  res.json(removed);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Books API running at http://localhost:${PORT}`));
