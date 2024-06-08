const arr=[2,4,3,7,1,99,24,33];
/*function isOdd(x){
    return x%2;
}
const oddN=arr.filter(isOdd);
console.log(oddN);*/

//another method of doing the sme above thing
/*const oddN=arr.filter(function (x){
    return x%2;
});
console.log(oddN);*/

//arrow method
const oddN=arr.filter((x)=>x%2);
console.log(oddN);