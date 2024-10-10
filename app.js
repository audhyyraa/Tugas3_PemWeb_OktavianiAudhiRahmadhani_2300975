const express = require('express');
const app = express();

const port = 3000;

// Route untuk halaman utama ("/")
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start server di port yang ditentukan
app.listen(port, () => {
  console.log(Server running at http://localhost:${port});
});