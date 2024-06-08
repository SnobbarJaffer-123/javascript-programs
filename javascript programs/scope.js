var a=10;
let b=20;
const c=30;
console.log(a);
console.log(b);
console.log(c);
function scope(){
    const c=40;
    console.log(a);
    console.log(b);
    console.log(c);//shadowing
}
scope();