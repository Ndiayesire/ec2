const express = require('express');
const app = express();
const PORT = 4230;

// Root route returns a message
app.get('/', (req, res) => {
  res.json({ message: 'Api Running ⚡' });
});

// Start the server
app.listen(PORT, '0.0.0.0', () => {
  console.log('Server is running on http://0.0.0.0:4230');
});
