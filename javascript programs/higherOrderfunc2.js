//its doind the  same way as i did in #higherOrderFunc.js but this is more optimised.here the functions will be more generic.
//we will be parsing logic inside the function 
//here we will be using #higher order functions by putting the function in the paranthesis of other function

const radius=[3,6,1,5,9];
const area=function(radius){
    return Math.PI *radius *radius;
}
const circumference=function(radius){
    return 2*Math.PI *radius;
}
const diameter=function(radius){
    return 2*radius;
}
const calculate=function(radius,logic)
{
    const output=[];
    for(let i=0;i<radius.length;i++){
        output.push(logic(radius[i]));
    }
    return output;
}
console.log(calculate(radius,area));
console.log(calculate(radius,circumference));
console.log(calculate(radius,diameter));