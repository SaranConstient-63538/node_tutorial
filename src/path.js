const path = require('path')

const p =path.basename("C:\\temp\\myfile.html")
const pa = path.win32.basename('/foo/bar/baz/asdf/quux.html', '.html')// path, extension
const pat = path.posix.basename('/tmp/myfile.html')// specific path. sample path parent object on posix
// console.log(process.env.path)

 const de =process.env.PATH.split(path.delimiter)
 console.log(de)
 //directory name
const dir = path.dirname('/tmp/myfile.html')
console.log(dir)
//ext name
const ext = path.extname('index.html')
console.log(ext);
const se ='tmp\\myfile.html'.split(path.sep)
console.log(se)
const par = path.parse('C:\\path\\dir\\file.txt');
console.log(par)
