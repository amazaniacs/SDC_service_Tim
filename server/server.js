// SERVER FILE
const nr = require("newrelic");
const express = require('express');
const cors = require('cors');
const path = require('path');
// 
const app = express();
const { getProduct } = require('../database/index.js');
const { getItem } = require('../database/database.js');
const { saveItem } = require('../database/database.js');

app.use(cors());

app.use(express.static(`${__dirname}/../client/dist`));

app.get('/api/product/:id', (req, res) => {
  const idToSearch = Number((req.params.id)) + 1;
  getItem(idToSearch, (err, data) => {
    if (err) {
      res.status(400).send();
      return;
    }
    res.status(200).send(data);
  });
});

app.post('/post/saveItem', (req, res) => {
  res.send("hello");
  saveItem((err) => {
    if (err) {
      res.status(400).send();
      return;
    }
  })
});

app.get('*', (req, res) => {
  res.sendFile(`/client/dist/index.html`, { 'root': `${__dirname}/../` });
});

const PORT = 3002;

app.listen(PORT, console.log('listening at 3002'));
