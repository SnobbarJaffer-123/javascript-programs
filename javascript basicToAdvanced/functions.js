/*function functionName(telling js){....fun definition
    do something
}
functionName();...function call
*/

function hello(){
    console.log("hello");
}
hello();

function print1to5(){
    for(let i=1;i<=5;i++){
        console.log(i);
    }
}
print1to5();

function isAdult(){
    let age=13;
    if(age>=18){
        console.log("adult");
    }
    else{
        console.log("not an adult");
    }
}
isAdult();
//Q1:print some lines 
function printSomeLines(){
    console.log('hello,my name is snobbar jaffer');
    console.log("i m learning js");

}
printSomeLines();
//Q2:Create a function to roll a dice & always display the value of the dice(1 to 6)
function rollAdice(){
    let rand=Math.floor((Math.random()*6))+1;
    console.log(rand);
}
rollAdice();
rollAdice();
rollAdice();
rollAdice();
rollAdice();

//function with arguments
let name,age;
function printInfo(name,age){
    console.log(`${name}'s age is ${age}`);
}
printInfo("snobbar",24);
printInfo("Aasif bhayi",27);
printInfo("Touseef bhayi",29);
//SUM OF NUMS
function sum(a,b){
    console.log(`sum of ${a} and ${b} is :${a+b}`);
}
sum(3,2);
sum(1234,43567);

//average of nums
function average(a,b,c){
    let avg=(a+b+c)/3;
    console .log(avg);
}
average(3,5,2);
average(7,4,2);

//multiplication table using functions
function table(n){
    for(let i=n,j=1;i<=n*10,j<=10;i+=n,j++){
        console.log(`${n}*${j}=${n*j}`);
    }
}
table(5);
//table(7);

//return keyword in js
//CREATE A FUNCTION THAT RETURN THE SUM OF NUMS FROM 1-N
function sumNums(n){
    let sum=0;
    for(let i=0;i<=n;i++){
        sum+=i;
    }
    return sum;
}
let res=sumNums(15);
console.log(res);

//CREATE A FUNCTION THAT RETURNS THE CONCATENATION OF ALL THE STRINGS IN AN ARRAY
let str=['hello','Snobbar','Jaffer','!']
function concat(str){
    let resultStr="";
    for(let i=0;i<str.length;i++){
        resultStr+=str[i];
    }
    return resultStr;
}
console.log(concat(str));

//SCOPE OF VARIABLE(FUNCTION SCOPE)
let var1=63;// global scope
function sub(a,b){
    let var1=a+b;
    console.log(var1);//will use local scope var
}
sub(44,22);
console.log(var1);//global scope

//LEXICAL SCOPE :A VARIABLE DEFINED OUTSIDEA FUNCTION CAN BE ACCESSIBLE INSIDE ANOTHER FUNCTION DEFINED AFTER THE VARIABLE DECLIRATION ...OPPOSITE IS NOT TRUE
function outerFunc(){
    let x=2;
    let y=6;
    function innerFunc(){
        console.log(x,y);
    }
    innerFunc();

}
outerFunc();
let greet='hello';
function changeGreet(){
    let greet="salam";
    console.log(greet);
    function nestedGreet(){
        console.log(greet);//LEXICAL SCOPE
    }
    nestedGreet();
}
console.log(greet);
changeGreet();

//FUNCTION EXPRESSSION(NAMELESS FUNS)
let sumFunc=function(a,b){
    let sum=a+b;
    console.log(sum);

}
sumFunc(3,2);
//HIGHER ORDER FUNCTION:A FUNCTION THAT FUNCTION/S AS AN ARGUMENT or returns a function(or does the both things)
function multipleGreet(func,n){
    for(let i=1;i<=n;i++){
        func();
    }
}
let greeting =function(){
    console.log("asalamualaikum");
}
multipleGreet(greeting,5);
//multipleGreet(function(){console.log("asalamualaikum");},5);

//HIGHER ORDER FUNCTIONS RETURNS A FUNCTION
let oddEven=function(n){
    if(!(n%2==0)){
    return "odd";
    }
    else{
        return "even";
    }
}

function evenOddFactory(numb){
    if(numb=="odd"){
        return function(){
            console.log("number is odd");
        }
       
    }
        else if(numb=="even"){
            return function(){
                console.log("number is even");
            }
            
        }
        else{console.log("wrong request");}

    }
//let request="odd"; 
let request=oddEven(19);
let reslt=evenOddFactory(request);//it will return corrosponding anominous function (even or odd ),we can check on console which anomymous function is getting executed
console.log(reslt);

//METHODS :ACTIONS THAT CAN BE PERFORMED ON AN OBJECT
const calculator={
    add:function(a,b){
        return a+b;

    },
    sub:function(a,b){
        return a-b;

    },
    mul:function(a,b){
        return a*b;

    },
    div:function(a,b){
        return a/b;

    }

}
//the below code for calculator will perporm the same task even if we do not mention them as key-value pair
/*const calculator={
    add(a,b){
        return a+b;

    },
    sub(a,b){
        return a-b;

    },
    mul(a,b){
        return a*b;

    },
    div(a,b){
        return a/b;

    }

}*/
let addRes=calculator.add(1,2);
console.log(addRes);
let subRes=calculator.sub(22,2);
console.log(subRes);
let mulRes=calculator.mul(10,9);
console.log(mulRes);
let divRes=calculator.div(22,10);
console.log(divRes);
