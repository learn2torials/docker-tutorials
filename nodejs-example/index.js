const app = require('express')();

// define home page
app.get('/', (req, res) => {
  res.send('ready to handle connections.');
});

// listen on 8080
app.listen(8080, () => {
  console.log('Listening on port 8080');
});