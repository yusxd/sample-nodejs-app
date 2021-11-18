const express = require('express');
const app = express();
app.get('/', (req,res)=>{
 res.send('hello! main!');
});
app.listen(8080);
