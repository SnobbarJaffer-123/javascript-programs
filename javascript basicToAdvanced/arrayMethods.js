
//these methods are higher order functions that uses callback function,that take callback as input
//arrayMethods:forEach, map,filter ,reduce.some,every
//arr.forEach(some functio definition or name)
let arr=[1,2,3,4,5]
/*let print=function (el){
    console.log(el)
}
arr.forEach(print)*/
arr.forEach(function print(el){
    console.log(el)
}
)

arr.forEach((el)=>console.log(el))   //arrow func

let studentInfo=[{
    name:"snobbar",
    marks:99,
},
{
    name:"nargis",
    marks:98,
},
{
    name:"sadath",
    marks:97
}
]
//console.log(studentInfo.forEach(marks))
studentInfo.forEach((student)=>{
    console.log(student)

})
//map function
console.log("MAP FUNCTION")
//let newArray =arr.map(some function definition or name)
let num=[1,2,3,4,5]
let double=num.map(function(el){return el*2});
console.log(double)

let double2=num.map((el)=>el*2)  //using arraw func
console.log(double2)

let gpa=studentInfo.map(el=>el.marks/10);
console.log(gpa)

console.log("FILTER METHOD")
//let newarr=arr.filter(some func definition or name)
let nums=[2,4,5,5,7,8,10]
let even=nums.filter(e=>e%2==0);
console.log(even)

//every method
console.log("EVERY METHOD")
//returns true if every element of array gives for some func .else returns false
//arr.every(some finc definition or name)
let numbs=[1,3,5,7,9,8]
let odd=numbs.every(el=>el%2!=0)
console.log(odd)

console.log("SOME METHOD")
//SOME METHOD...returns true if some element of array give true for some func,else returns false
//arr.some(function def or nme)
let evenn=nums.some(even=>even%2==0)
console.log(evenn)

//REDUCE METHOD:REDUCES THE ARRAY TO A SINGLE VALUE
//arr.reduce(reducer function with 2 variables for (accumulator,element));
let NumArray=[1,2,3,4,5]
let arrSum=NumArray.reduce((res,n)=>(res+n));
console.log(arrSum)

//maximum num in array
let arrN=[1,2,3,4,7,56,88,5]
let max=-1
for(let i=0;i<arrN.length;i++)
    {
        if(max<arrN[i])
            max=arrN[i]
    }
    console.log(max)