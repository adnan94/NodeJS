const path = require("path");
// console.log(path.dirname("PS D:/Adnan Ahmed/NodeJs/PathModule/index.js")); //showing directory name
// console.log(path.extname("PS D:/Adnan Ahmed/NodeJs/PathModule/index.js")); //showing extension name
// console.log(path.basename("PS D:/Adnan Ahmed/NodeJs/PathModule/index.js")); //showing file name 

const myPath = path.parse("PS D:/Adnan Ahmed/NodeJs/PathModule/index.js")//showing file name , extension , basename, directory , root
console.log(myPath.base);  
console.log(myPath.dir);  
console.log(myPath.ext);
console.log(myPath.name);  
 
// console.log(myPath);  
