const express = require('express');
const app = express();

app.get('/vehicule', (req, res) => {
    res.send("Oh la belle rouge");
})
//app.get('/', (req, res) => {
   // res.send("Hello World !");
//});
app.listen(8080,function(){
    console.log('listening on port 8080');
});