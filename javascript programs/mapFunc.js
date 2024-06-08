//map,filter  and reduce are the most important higher order functions
//inside a map() ,we pass a function thats makes transformation

const arr=[2,4,5,1,6,8,10];
function double(x){
    return x*2;
}
function triple(x){
    return x*3;
}
function binary(x){
    return x.toString(2);
}


const outputD=arr.map(double);
console.log(outputD);

const outputT=arr.map(triple);
console.log(outputT);

const outputB=arr.map(binary);
console.log(outputB);

//we can pass a function directly
const outputOctal=arr.map(function ToOctal(x){
    return x .toString(8);
});
console.log(outputOctal);

//we can simply use array function/anomynous functions
/*const HexDec=arr.map((x)=> {//anomymous function is a func without a name
    return x.toString(16);
});
console.log(HexDec);*/

//also we can remove curly baraces and return keyword
const HexDec=arr.map((x)=>x.toString(16));
console.log(HexDec);

const cube=arr.map((x)=>x*x*x);
console.log(cube);