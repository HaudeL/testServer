const express = require('express');
const app = express();

app.post('/vehicule', (req, res) => {
    req.body('');
  });
app.listen(3030,function(){
    console.log('listening on port 3030');
});