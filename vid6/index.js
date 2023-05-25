console.log("log() is core module and global module");
//  const fs=require("fs");
//  fs.writeFileSync("hello.txt","this is text in the newly created hello file which is in same folder");
// in above code variable name and file name is same which is good practice
const gs=require("fs").writeFileSync;
gs("abc.txt","variable name and file name can be different and we imported particular method i.e. writeFileSync from file system not all methods ")