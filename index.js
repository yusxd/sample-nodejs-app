const express = require('express');
const app = express();
app.get('/', (req,res)=>{
 res.send('hello! from aws staging lambda!');
});
app.listen(8080);
