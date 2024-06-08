//math objects
console.log(Math);
console.log(Math.PI);
console.log(Math.E);
console.log(Math.abs(-12));
console.log(Math.pow(2,4));
//floor --used to round of to the nearest smallest integer value
console.log(Math.floor(5.5));
console.log(Math.floor(5.999));
console.log(Math.floor(-5.6));
//ceil--roundOf to the larger integer value
console.log(Math.ceil(5.4));
console.log(Math.ceil(-5.5));
//random--generates any random no. btw 0 and 1,excludes 1
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());
//to generate any integer value
console.log("generating integers from 1-10 from random values")
let step1=Math.random();
console.log(step1);
let step2=step1*10;
console.log(step2);
step3=Math.floor(step2);
console.log(step3);
let step4=step3+1;//+1 we do to generate from 1-10 instead of 0-9
console.log(step4);
console.log("same above thing by  single line");
console.log(Math.floor(Math.random()*10)+1);//in a single line

console.log("Q1:generate a random number btw 1-100");
console.log(Math.floor(Math.random()*100)+1);
console.log("Q2:generate a random number btw 1-100");
console.log(Math.floor(Math.random()*5)+1);//1,2,3,4,5
console.log("Q3:generate a random number btw 21-25");
console.log(Math.floor(Math.random()*5)+21);
console.log(Math.floor(Math.random()*5)+21);
console.log(Math.floor(Math.random()*5)+21);




