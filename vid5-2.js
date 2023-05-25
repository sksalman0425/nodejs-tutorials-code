// import {a,b} from "./vid5-1";


// console.log(a+b,"sum of a and b");
//---------------above method does not work in node js bz node using older version of js-----
// normally variable name is file name which is imported
const vid5=require("./vid5-1")

console.log(vid5);
console.log(vid5.a);
console.log(vid5.b);
console.log(vid5.c());
const arr=[1,3,4,5,6,8];
arr.filter((item)=>{
    console.log(item);
   
})

const result=arr.filter((item2)=>{
    return item2>5;
   
})

console.log(result);