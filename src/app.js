var express = require('express');
var mysql = require('mysql');
var app = express();

var db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'nodemysql'
})
// console.log(db.config)
db.connect((err)=>{
    if(err){
        throw err;
    }
    console.log('Connected done')
})
//create a database
app.get('/createdb',(req,res)=>{
    let sql = 'CREATE DATABASE nodemysql';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log('db is created')
        res.send('Database is Created')
    })
})
//create a table
app.get('/createtable',(req,res)=>{
    let sql =  "CREATE TABLE samplepost(id int AUTO_INCREMENT, title VARCHAR(255),body VARCHAR(255),PRIMARY KEY(id))";
    db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log('created table')
        res.send('Table is Created')
    })
})
//insert a row
app.get('/inserttable', (req,res)=>{
    let post = {title:'Post One', body:'This is a body 1'}
    let sql ='INSERT  INTO samplepost SET ?'
    db.query(sql,post,(err,result)=>{
        if(err) throw err;
        console.log('one row is inserted')
        res.send('One Row is Created')
    })
})
app.get('/inserttable', (req,res)=>{
    let post = {title:'Post One 2', body:'This is a body 2'}
    let sql ='INSERT  INTO samplepost SET ?'
    db.query(sql,post,(err,result)=>{
        if(err) throw err;
        console.log('one row is inserted')
        res.send('One Row is Created')
    })
})

app.listen('3000',()=>{
    console.log('Server is successfully running on port 3000')
})