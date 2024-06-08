//by reduce ,we comeup with a single value e.g 1.sum of elements of an array 2.gretest of the array
//we need to pass 2 arguments in function inside reduce 1 is accumilator that accumilates the values ams 2.currenttake each value of an array
const arr=[2,4,2,5,1,67,21];
//sum of the elements of an array
const output =arr.reduce(function(acc,curr){
    acc+=curr;
    return acc;
},0);//0 is the initial value of accumilator
console.log(output);

//max. element in an array
const maxEle=arr.reduce(function(max,curr){
    if(curr>max){
        max=curr;
    }
return max;
},0);
console.log(maxEle);