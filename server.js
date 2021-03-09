'use strict';

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('HELLO World welcome');
  });
  
  app.listen(process.env.PORT || 3000, () => {
    console.log('App is running');
  });