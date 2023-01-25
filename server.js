const express=require("express");
const verifyTime = require('./middlwares/verifyTime');

const app=express();
const port=5000;
app.use(verifyTime);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Contact us.html');
 });

 app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Home.html');
 });   
 app.get('/', (req, res) => {
    res.sendFile(__dirname + '/Our-Services.html');
 });
 app.listen(port,(err)=>{
        err? console.log(err):console.log(`server is running at ${port}`);
    })
