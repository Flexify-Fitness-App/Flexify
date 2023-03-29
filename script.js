const http= require('http');
const express= require('express');
const app= express();
const server= http.createServer(app);

const path= require('path');
const mysql= require('mysql');

//---------------------
app.use(express.static(path.join(__dirname,'client/html')));

//---------------------

server.listen(7070, ()=>{
    console.log('listening on: 7070...');
})

app.get('/',(req,res)=>{
    res.status(200).sendFile(__dirname + 'frontend/html/index.html');
});

