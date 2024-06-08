var num1=2;
let num2=10;
const num3=15;
function square(n){
    var res=n*n;
    return res;
}
var square1=square(num1);
console.log(square1);
console.log(square(4));
var square2=square(square(3));
console.log(square2);
var square3=square(num2);
console.log(square3);
var square4=square(num3+1);
console.log(square4);