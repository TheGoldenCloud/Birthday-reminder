const express = require('express');
const app = express();
const pool = require('./db.js');

app.get('/data', (req, res) => {
  res.send('hello world');
})

app.get('/persons', async(req, res) => {
  let data = await pool.query('select * from Person');
  res.send(data);
})

app.listen(3000,()=>{ console.log("Server started on port 3000") })