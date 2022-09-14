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
    let query = db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log('db is created')
        res.send('Database is Created')
    })
})
//create a table
app.get('/createtable',(req,res)=>{
    let sql =  "CREATE TABLE samplepost(id int AUTO_INCREMENT, title VARCHAR(255),body VARCHAR(255),PRIMARY KEY(id))";
    let query = db.query(sql,(err,result)=>{
        if(err) throw err;
        console.log('created table')
        res.send('Table is Created')
    })
})
//insert a row
app.get('/inserttable', (req,res)=>{
    let post = {title:'Post One', body:'This is a body 1'}
    let sql ='INSERT  INTO samplepost SET ?'
    let query =  db.query(sql,post,(err,result)=>{
        if(err) throw err;
        console.log('One row is inserted')
        res.send('One Row is Created')
    })
})
app.get('/inserttable1', (req,res)=>{
    let post = {title:'Post Two', body:'This is a body 2'}
    let sql ='INSERT  INTO samplepost SET ?'
    let query = db.query(sql,post,(err,result)=>{
        if(err) throw err;
        console.log('Two row is inserted')
        res.send('Two Row is Created')
    })
})
//view the table with rows
app.get('/getsamplepost', (req,res)=>{
    let sql = 'SELECT * FROM samplepost'
    let query = db.query(sql, (err,result)=>{
        if(err) throw err
        console.log(result)
        res.send('view the table')
    })
})
//view the table with single row
app.get('/getsamplepost/:id', (req,res)=>{
    let sql = `SELECT * FROM samplepost where id=${req.params.id}`
    let query = db.query(sql, (err,result)=>{
        if(err) throw err
        console.log(result)
        res.send('view the table with single row')
    })
})
//edit the table
app.get('/getsamplepost/:id',(req,res)=>{
    let newTitle = 'updated title'
    let sql = `UPDATE samplepost set `
})
app.listen('3000',()=>{
    console.log('Server is successfully running on port 3000')
})