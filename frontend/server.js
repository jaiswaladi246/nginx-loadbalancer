const express = require('express');
const path = require('path');
const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname)));

app.listen(port, '0.0.0.0', () => {
  console.log(`Frontend listening at http://0.0.0.0:${port}`);
});
