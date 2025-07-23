var express = require('express');

var app = express();

// Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
  res.send('hello ANIMAL');
});

const port = process.env.PORT || 3000;
app.listen(port, '0.0.0.0', () => {
  console.log(`App listening at http://0.0.0.0:${port}`);
});

module.exports = app;

