//templete literals are used to add embedded expressions in a string
//${n1+n2}
//``(backtick)
let pencilPrice=10;
let erasorPrice=5;
//let output="the total price is:"+(pencilPrice+erasorPrice)+"Rupees."
//console.log(output);
let output=`the total price is:${pencilPrice+erasorPrice}Rupees.` ;//as there is a string concatinated with an expresion we use templete literal.we put them inside backtick and the expression is inside the curly braces started with a doller sign
console.log(output);
