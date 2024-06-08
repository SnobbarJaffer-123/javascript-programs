function a(y)
{
    console.log("function a called");
}
function y()
{
    console.log("y finction called");
};  
a(y());

//first class functions :the abality of using functions as values
//we can pass pass function inside function and also can return function from a function
var b=function(z){
    console.log("b called");
    
}
function z(){
    console.log("z called");
}
b(z());