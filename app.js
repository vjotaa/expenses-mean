const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
const app = express();
const mongoose = require('mongoose');
const api = require('./server/routes/expense');

mongoose.connect('mongodb://localhost:27017/expense-db', (err, res) => {
  err
    ? console.log('Error in the database: ', err)
    : console.log('Connected to: ' + 'mongodb://localhost:27017/expense-db');
});

const port = process.env.PORT;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/', api);
app.get('*'),
  (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
  };

app.listen(port, function() {
  console.log('Server started....');
});
