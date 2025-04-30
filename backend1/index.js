const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('🔵 Response from Backend Server 1');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Backend Server 1 running at http://0.0.0.0:${port}`);
});
