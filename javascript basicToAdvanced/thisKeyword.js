//this keyword refers to an objectthat is executing the current piece of code
const student={
    name:"snobbar",
    age:24,
    cMarks:98,
    jsMarks:99,
    java:99,
    getAvg()
    {
        console.log(this)
        let avg=(this.cMarks+this.jsMarks+this.java)/3
        console.log(avg)
    }
 
}
console.log(student.name)
student.getAvg()