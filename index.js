const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

app.post('/vehicule', (req, res) => {
    res.send('Got a POST request');
  });
app.listen(3030,function(){
    console.log('listening on port 3030');
});
app.get('/recup', (req, res) => {
    res.send('c écolo !');
  });