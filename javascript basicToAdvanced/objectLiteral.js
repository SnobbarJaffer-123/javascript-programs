//object literals are used to store keyed collections and complex entities
//objects are collrction of properties
//property=>(key,value)pair
let myInfo={
    name:"Snobbar jaffer",
    rollNo:16,
    sem:"2nd",
    city:"srinagar"

    
};
console.log(myInfo);
console.log(myInfo["name"]);
console.log(myInfo.rollNo);
myInfo.gender="female";
console.log(myInfo);
myInfo.marks=[97,98,89,99,100];
console.log(myInfo);
console.log(typeof(myInfo));
console.log(typeof(myInfo.marks));
delete myInfo.city;
console.log(myInfo);
//js automatically converts objects into string even  made the number as a key,the no. will b converted to string
let obj={
    1:"snobbar",
    true:"true",
    undefined:"undefined"
};
console.log(obj[true]);
console.log(obj[1]);
//OBJECT OF OBJECTS
//STORING INFORMATION OF MULTIPLE STUDENTS
const classInfo={
    snobbar:{
        rollNo:16,
        residence:"said pora sopore",
        gender:"female",
        grade:"A+",

    },
    nargis:{
        rollNo:15,
        residence:"handwara",
        gender:"female",
        grade:"A",

    },
    sadath:{
        rollNo:32,
        residence:"baramullah",
        gender:"female",
        grade:"A++",
    }
}
console.log(classInfo);
console.log(`to get a value from inner object ${classInfo.sadath.rollNo}`);
classInfo.sadath.rollNo=35;
console.log(classInfo);

console.log("ARRAY OF OBJECTS");
const studentsArr=[
    {name:"najma",rollNo:"1",sem:"2nd"},
    {name:"snobbar",rollNo:"2",sem:"2nd"},
    {name:"nargis",rollNo:"3",sem:"2nd"},
    {name:"sadath",rollNo:"4",sem:"2nd"}
];
console.log(studentsArr[1].name);
studentsArr[1].gender="female";
console.log(studentsArr[1]);