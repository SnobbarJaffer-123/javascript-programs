//1.write an arrow function that returns the square of a number n
const sqre=(n)=>{    
    return n*n
}
const sq=sqre(7)
console.log(sq)

//2.write a function that prints "Hello World "5 times at intervals of 2s each
let id=setInterval(()=>{
    console.log("Hello world")},2000
)
setTimeout(()=>{
    clearInterval(id);
    console.log("clear interval run")
},12000)