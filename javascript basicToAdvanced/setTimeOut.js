console.log("hi there")
setTimeout(()=>{
    console.log("snobbar jaffer")},5000
)
console.log("java")
console.log("javascript")

//setInterval()
let id=setInterval(()=>{
    console.log("snobbar jaffer")},2000
)
setTimeout(()=>
    {
        clearInterval(id)
    },6000
)
