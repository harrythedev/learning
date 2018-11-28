// const express = require('express');
import express from 'express'
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(PORT, () => console.log(`running on port ${PORT}`))