var xyz=100;
function x()
{
    var a=10;
    console.log("inside x");
    console.log(a);
    function y()
    {
        console.log("inside y");
        var b=20;
        console.log(a);
        console.log(b);
        function z()
    {
        var c=30;
        console.log("inside z");
        console.log(a);
        console.log(b);
        console.log(c);
        console.log(xyz);
        //console.log(abc);//it will give a refrence error when we try to access let variable before initialization.
        //this is because let and const variables are in temporal red zone...they r maintained in saperate memory storage.
        //console.log(def);//same as let even it is more strict then let.it must be initialized at the time of declearation.
    }
    z();
    //let abc=200;
    //const def=300;
    }
    y();
}
x();
