const add=(a,b)=>console.log(a+b)
add(2,3)
console.log(add)

const pow=(a,b)=>{
    return a**b}
    let c=pow(2,4)
    console.log(c)

const hello=()=>{console.log("hello snobbar")}    
hello()

//implicit return in arrow function
const mul=(a,b)=>a*b
let m=mul(2,3)
console.log(m)

//this with arrow functions
const student={
    name:"sania",
    age:24,
    marks:1000,
    getname()
    {
        console.log(this)
        console.log(this.name)
    },
    myMarks:()=>{
        console.log(this)//parents scope->window
        console.log(marks)
    }
}
student.getname()
//student.myMarks()
marks=99

