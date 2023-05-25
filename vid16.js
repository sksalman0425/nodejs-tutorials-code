let a=20;
let b=0;

// here in waitingData variable we have taken promise
let waitingData= new Promise((resolve,reject)=>{
    b=30;
    // based on if condition either resolve or reject function executed
  if(b<=30){
    setTimeout(()=>{
        console.log("resolve fun executed");
        resolve(b);
     },2000)
  } else{
    setTimeout(()=>{
     console.log("reject fun executed");
        reject(b);
     },2000)
  }

})
// resolve function passes arg to .then()
// .then() function executed only after execution of resolve()
// reject function passes arg to .catch()
// .catch() function executed only after execution of reject()

waitingData.then((data)=>{
   b=data;
   console.log(a+b)
}).catch((data2)=>{
    b=data2;
    console.log(a+b);

})
