const express = require('express');
const path = require('path');
const http = require('http');
const app= express();
var cors = require('cors');
app.use(cors());
app.use(express.static('images'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/home.html');
});

app.get('/page1', (req, res) => {
  res.sendFile(__dirname + '/views/page1.html');
});

app.get('/page2', (req, res) => {
  res.sendFile(__dirname + '/views/page2.html');
});

app.get('/page3', (req, res) => {
  res.sendFile(__dirname + '/views/page3.html');
});

const port = process.env.PORT || '3000';
app.set('port', port);

app.listen(port, () => {console.log('Example app listening on port 3000!');});