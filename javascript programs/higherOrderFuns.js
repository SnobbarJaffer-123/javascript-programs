//this is a normal program .in file #higherOrderFuns2.js ,i m using higher order function of the program
const radius=[3,6,1,5,9];
const output=[];
const calculateArea=function (radius){
    for(let i=0;i<radius.length;i++){
        output.push(Math.PI*radius[i]*radius[i]);
        
    }
    return output;
}
console.log(calculateArea(radius));

const calculateCircumference=function (radius){
    for(let i=0;i<radius.length;i++){
        output.push(2*Math.PI*radius[i]);
        
    }
    return output;
}
console.log(calculateCircumference(radius));

const calculateDiameter=function (radius){
    for(let i=0;i<radius.length;i++){
        output.push(radius[i]*radius[i]);
        
    }
    return output;
}
console.log(calculateDiameter(radius));
