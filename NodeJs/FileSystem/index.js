// var description = "Welcome to my Node JS First Script";
// console.log(description);

// const name = "Adnan Ahmed"
// console.log(name);

// //do while loop
// var i = 0
// do{
// console.log(name);
// i++;
// }while(i < 5);

// //for loop
// for(var i = 0 ;  i < 10; i++){
// console.log(name);
// }


// //Creating file
const fs = require("fs");
const path = require('node:path');

var fileName = "read.txt";

// //create file
fs.writeFileSync(fileName,"hELLO THERE"); 

fs.writeFile("AsyncFile","Async File Data",(err) =>{
console.log("File Created")
});

// fs.writeFileSync(fileName,description); // OVER RIDE DATA

// //append data in a file
// fs.appendFileSync(fileName,"\n\nHow are you i am fine !");

// // reading file
// console.log(fs.readFileSync(fileName).toString());

// rename file
// fs.renameSync(fileName,"luck.txt")

//Creating folder in node js 
//Creating file in folder 
var biography = "\n\nHello there,\n\n\nMy Name is Adnan Ahmed, Im am an expert Android Developer of about 7 years experience i am currently working in Imtiaz Super Market\n\n\nThanks\n\nRegards Adnan "
const folderName = '\Docs';
try{
    if(!fs.existsSync(folderName)){
    fs .mkdirSync(folderName)
    }else{
       console.log("folder already exists") 
    }

    
   //creating file under directory
   var filename = 'Docs/bio.txt';
   fs.writeFileSync(filename,biography)
   
   //concating existing file
   fs.appendFileSync(filename,"\nAnd Dont Forget To Subscribe")
   
   //reading file
   console.log(fs.readFileSync(filename,"UTF-8").toString())// add utf-8 to get data not in buffere3d form
   
   //rename file
   //fs.renameSync(filename,"Docs/biography.txt")
 
//delete empty folder
//    fs.unlinkSync(filename)
//    fs.rmdirSync(folderName)

}catch(err){
    console.log(err)
}




