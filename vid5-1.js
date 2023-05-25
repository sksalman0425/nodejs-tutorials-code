// export let a=9;
// export let b=4;
//-----------------------above variable does not work in Nodejs-----------------
// by using below method we can export in node js
module.exports={
    a:9,
    b:4,
    c:function(){
        return 10;
    }
}