const app = require('express')();

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(3000, () => console.log('App is listening on port 3000'));



