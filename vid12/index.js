 console.log(process.argv);
//  above line after execution give two input
//  1) Nodejs.exe location
//  2) location of file from where we are running above METHODS
//   above two input position are fixed fixed in array
//   after that what we are giving from cli it give third position and so on ..
// e.g >> node .\index.js hello hi salman
// here process.argv taking  helli hi salman as input at 2,3,4 location
// [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'D:\\Web Development Videos\\code step by step Node js\\nodejs-tutorials-code\\vid12\\index.js',
//     'hello',
//     'hi',
//     'salman'
//   ]
 console.log(process.argv[4]);
 // in above console we are consoling process.argv at the 4th position of array so o/p is salman
 // e.g >> node .\index.js hello hi salman
//  [
//     'C:\\Program Files\\nodejs\\node.exe',
//     'D:\\Web Development Videos\\code step by step Node js\\nodejs-tutorials-code\\vid12\\index.js',
//     'hello',
//     'hi',
//     'salman'
//   ]
//   salman

const fs = require('fs');

const input = process.argv;// input given from cli are taken into input variable

if(input[2]=='add')
{
    fs.writeFileSync(input[3],input[4])// this will create new file with name at 3 position and with content at 4th position
}
else if(input[2]=='remove')
{
    fs.unlinkSync(input[3])// this will delete old file with name at 3 position 
}
else
{
    console.log("invalid input ")
}



// node index.js other red.txt 'this is color'