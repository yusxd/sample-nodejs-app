const express = require('express');
const app = express();
app.get('/', (req,res)=>{
 res.send('hello! from aws lambda!');
});
app.listen(8080);
