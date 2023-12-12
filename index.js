const express = require('express');
const cors = require('cors');
const app = express();
const pool = require('./db.js');
const env = require('dotenv').config();

app.use(cors({
  origin: "*", 
  methods: ['GET','POST','PUT','DELETE'],
  credentials: true
}))

app.get('/data', (req, res) => {
  res.send('hello world');
})

app.get('/persons', async(req, res) => {
  let data = await pool.query('select * from Person');
  res.send(data[0]);
})

app.listen(process.env.PORT,()=>{ console.log(`Server started on port ${process.env.PORT}`) })