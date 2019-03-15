// SERVER FILE
require("newrelic");
const express = require('express');
const cors = require('cors');
const path = require('path'); 
const app = express();
const { getProduct } = require('../database/index.js');
const { getItem } = require('../database/database.js');
const { saveItem } = require('../database/database.js'); 
const morgan = require('morgan');
const cache = {}; 

app.use(morgan('tiny'));
app.use(cors());
app.use(express.static(`${__dirname}/../client/dist`));





app.get('/api/product/:id', (req, res) => {
  const idToSearch = Number((req.params.id)) + 1;
   
  if(cache[idToSearch]) {
      return cache[idToSearch]; 
  }

  else {
      getItem(idToSearch, (err, data) => {
        if (err) {
          res.status(400).send();
          return;
        }
        cache[idToSearch] = data; 
        res.status(200).send(data);
      });
  }
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

const PORT = 80;
app.listen(PORT, console.log(`listening at ${PORT} `));
