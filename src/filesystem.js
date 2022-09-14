//to use async
const path = require('path')
const fs =require('fs')
const {access, constants,chmod} = require('fs');

// to use sync
const {unlinkSync} = require('fs');


//to use the promise based api
const fsp = require('fs/promises');


// console.log(fs.Stats());
//async 
// try{
//     fsp.unlink('tmp/hello')
//     console.log('successfully deleted /tmp/hello');
// }catch(err){
//     console.error('there is an error', err.message)
// }
// fs.unlink('/tmp/hello',(err)=>{
//     if(err) throw err;
//     console.log('successfully deleted /tmp/hello')
// })
// fs.writeFile('content.txt', '!!!This is a my content!', (err)=>{
//     if(err) throw err;
//     console.log('The file is created!')    
// })
// const filePath = path.join(process.cwd(),'content.txt')
// fs.readFile(filePath,(err,content)=>{
//     if(err) throw err;
//     console.log(content.toString())
// })
// fs.unlink(filePath, (err)=>{
//     if(err) throw err
//     console.log('file deleted')
// })
// fs.readdir(process.cwd(),(err,files)=>{
//     if(err) throw err
//     console.log(files);
// })
// fs.mkdir(`${process.cwd()}/tmp`,{recursive: true},(err)=>{
//     if(err) throw err
//     console.log('Folder created successfully')
// })
// fs.rmdir(`${process.cwd()}/tmp`,{recursive:true},err =>{
//     if(err) throw err
//     console.log('Folder deleted successfully')
// })
// fs.mkdir(`${process.cwd()}/tmp`,{recursive: true},(err)=>{
//     if(err) throw err
//     console.log('Folder created successfully')
// })
// fs.rename(`${process.cwd()}/tmp`,`${process.cwd()}/new`,(err)=>{
//     if(err) throw err
//     console.log('Folder rename successfully')
// })
// fs.readdir(process.cwd(),(err, files)=>{
//     if(err) throw err
//     console.log(err)
// })
// fs.rmdir(`${process.cwd()}/new`,{recursive:true},err =>{
//     if(err) throw err
//     console.log('Folder deleted successfully')
// })



//to use callback api


const file = 'package.json'
access(file,constants.F_OK,(err)=>{
    console.log(`${file} ${err ? `does not exist` : `exist`}`)
})
chmod('my_file.txt',0o775,(err)=>{
    if(err) throw err
    console.log('The permissions for file "my_file.txt" have been changed!')
})