const express = require('express');
const app = express();
app.get('/', (req,res)=>{
 res.send('hello! from ecs fargate container.');
});
app.listen(8080);
