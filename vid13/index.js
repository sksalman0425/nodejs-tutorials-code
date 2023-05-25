const fs= require('fs');
const path=require('path');// path module imported from node 
// const dirPath= path.join(__dirname);// it gives path of vid13 folder
const dirPath= path.join(__dirname,'files');// it gives path of files folder present in vid13 folder
// console.log(dirPath)
// using below code we creating 5 txt file at the dirpath 
// for(i=0;i<5;i++)
// {
//     fs.writeFileSync(`${dirPath}/hello${i}.txt`,`some simple text${i} in file`)

// }
//below code is use to read files. name of 2nd arg in arrow function can be anything
// here we are getting files hence here files name is taken 
fs.readdir(dirPath,(err,files)=>{
    // console.log(files);// we get files but in array
    // for getting single single files use below code
    files.forEach((item)=>{
        console.warn("file name is : ",item)
    });
}
)
