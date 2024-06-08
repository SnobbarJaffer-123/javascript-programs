//loops are used to iterate a piece of code
for(let i=0;i<33;i++){
    
    console.log(i+1+". allah hu akbar");
}
for(let i=0;i<33;i++){
    
    console.log(i+1+". alhumdulillah");
}
for(let i=0;i<33;i++){
    
    console.log(i+1+". subhanallah");
}
//print all odd numbers btw 1-15
for(let j=1;j<16;j=j+2){
    console.log(j);
}
for(let i=2;i<=10;i=i+2){
    console.log(i);
}
for(let i=5;i<=50;i=i+5)
{
    console.log(i);
}

//console.log("creating a multiplication table");
//let n=prompt("write a number");
//n=parseInt(n);
//for(let i=n;i<=n*10;i=i+n){
//    console.log(i);
//}

console.log("NESTED LOOPS");
for(let i=0;i<5;i++){
    for(let j=0;j<5;j++){
        console.log(j);
    }
}
console.log("WHILE LOOPS");
let i=0;
while(i<=10){
    console.log("5 *"+i+"="+i*5);
    i++;
}
//LOOPS with arrays
let fruits=['mango','apple','orange','pineapple'];
for(let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}
//nested  for loop with arrays
let heroes=[['ironman','spider man','thor'],['superman','wonderwomen','flash']];
for(let i=0;i<heroes.length;i++)
{
    console.log(i,heroes[i],heroes[i].length);
    for(let j=0;j<heroes[i].length;j++){
        console.log(`j=${j},${heroes[i][j]}`);
    }
}
//students info
let students=[['snobbar',99],['rabia',98],['saima',97]];
for(let i=0;i<students.length;i++){
    console.log(`information of student ${i+1}`);
    for(let j=0;j<students[i].length;j++){
        console.log(students[i][j]);
    }
}

//**FOR OF LOOP**:THIS IS USED TO ACCESS THE INDIVIDUAL ELEMTS OG AN ARRAY OR TO ACCESS THE INDIVIDUAL CHARS OF A STRING
//for(element of collection){......}
let books=["c","c++","java","javascript","python"]
console.log('for of loop in an array');
for(book of books){
    console.log(book);
}
let myName="SNOBBAR JAFFER";
console.log('for of loop in a string');
for(char of myName){
    console.log(char);
}
console.log("NESTED FOR OF LOOP");
let pairs=[["father","brother","husband"],["mother","sister","wife"]];
for(list of pairs){
    console.log(list);
    for(p of list){
        console.log(p);
    }
}
