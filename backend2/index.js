const express = require('express');
const app = express();
const port = 3002;

app.get('/api/', (req, res) => {
  res.send('Response from Backend Server 2');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Backend Server 2 running at http://0.0.0.0:${port}`);
});
