function x(){
    var a=10;
    function y(){
        console.log(a);

    }
    y();
}
x();
//return function inside function
function fun(){
    var b=20;
    function insideFun(){
        console.log(b);
    
    }
    return insideFun();
}
fun();

function fun2(){
    var c=30;
    return function insideFun2(){
        console.log(c);
        insideFun2();
    }


}
fun2();