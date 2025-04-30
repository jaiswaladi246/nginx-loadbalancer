const express = require('express');
const app = express();
const port = 3002;

// Middleware to log all incoming requests
app.use((req, res, next) => {
  const ip = req.headers['x-real-ip'] || req.connection.remoteAddress;
  console.log(`[Backend2] ${new Date().toISOString()} - ${req.method} ${req.url} from ${ip}`);
  next();
});

app.get('/api/', (req, res) => {
  res.send('Response from Backend Server 2');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Backend Server 2 running at http://0.0.0.0:${port}`);
});
