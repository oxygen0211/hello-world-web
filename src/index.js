const express = require('express');
const { getHelloWorld } = require('./StringProvider');

const app = express();

app.get('/', (req, res) => {
  const message = getHelloWorld();
  res.send(message);
});

const port = 3000;

app.listen(port, () => {
  console.log(`Running on port ${port}`);
})
