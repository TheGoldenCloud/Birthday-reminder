const express = require('express');
const app = express();
const connect = require('./db.js');

app.get('/data', (req, res) => {
  res.send('hello world');
})

app.get('/birthdaycard', (req, res) => {
  res.send('pa');
})

app.listen(3000,()=>{ console.log("Server started on port 3000") })