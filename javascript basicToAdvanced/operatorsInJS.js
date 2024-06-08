//arithematic operators
let a =10;
let b=5;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
//unary operators
console.log(a++);
console.log(++a);
//assignment operators
b=a;
console.log(b);
//comparision op.(<,>,=,<=,>=,!=)
let c=a==b;
console .log(c);
console.log(a!=b);
let n=5;
console.log(typeof(n));
let str="5";
console.log(typeof(str));
console.log(n==str);//it will compare a string having a number and a number 
console.log(n===str);//it will strictly compare the the sme 
console.log("snobbar"==="snobbar");

//logical op.  are used to combine expressions
//&&(logical and)
//||(logical or)
//!
console.log(true&&false);
console.log(false || true);
let marks=88;
if(marks>=33 && marks>=80){
    console.log("pass with A+ grade");
}

console.log(!(marks<33));

//practice 
//let a good string be a string having a first letter as 'a' and the the lenth of string be >3
let string='apple';
if(string[0]==='a'&& string.length>3){
    console.log("good string");

}
else{
    console.log("not a good string");
    
}