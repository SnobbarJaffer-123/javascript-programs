setTimeout(function(){
    console.log("...booom")
},5000);
function a(b){
    console.log("function a called")
}
function b(){
    console.log("function b called")
}
a(b());