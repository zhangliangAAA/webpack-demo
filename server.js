const express = require('express');
const app = express();
app.get('/api/info', (req, res) => {
  res.json({
    name: 'zll',
    age: 5,
    msg: '欢迎来到德莱联盟',
  });
});
app.listen('9092');
