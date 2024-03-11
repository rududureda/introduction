const express = require('express');
const app = express();

// Types of requests
// GET - gauti informacija
// POST - sukurti nauja informacija
// PUT - atnaujinti informacija
// DELETE
// PATCH - atnaujinti dalini informacija
// OPTIONS

// enable json parsing
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Kon saka a mon saka');
});

app.get('/book', (req, res) => {
  console.log(req.body);
  res.send('all books');
});

app.get('/book/:id', (req, res) => {
  console.log(req.params);
  res.send(`book with id ${req.params.id}`);
});

app.post('/book', (req, res) => {
  const book = req.body;
  if (!book.id || !book.title || !book.author) {
    res.send('Invalid request');
    return;
  }
  console.log('Book id:', book.id);
  console.log('Book title:', book.title);
  console.log('Book author:', book.author);

  res.send('Book successfully created');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
