//falsy values-false,0,-0,on(BigInt value),""(empty string),null,undefined,NaN
//truthy value-everything else
let f=false;
if(f){
    console.log("it will not be printed");
}
else{
    console.log("will b printed");
}
let emtstr="";
if(emtstr){
    console.log("not an empty string");
}
else{
    console.log("is an empty string");
}