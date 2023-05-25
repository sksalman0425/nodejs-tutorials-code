const fs=require('fs')
const path= require('path')
const dirPath=path.join(__dirname,'crud');
const filePath=`${dirPath}/apple.txt`;// here we have taken entire file path into variable
// for creating file 

// fs.writeFileSync(filePath,'this is simple text file');

//for for reading file

//utf8 convert output of file into readible formate
// fs.readFile(filePath,'utf8',(err,item)=>{
//      console.log(item);
//      })

// for updating file with some new text
//  fs.appendFile(filePath,' and it is appple.txt file',(err)=>{
//     if(!err){
//         console.log("new text is appended into apple.txt file");
//     }
//  })

// for renaming the apple.txt file
// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err){
//         console.log("apple.txt file renamed to fruit.txt");
//     }
// })

// for deleting newly created file fruit.txt
fs.unlinkSync(`${dirPath}/fruit.txt`);