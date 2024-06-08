//methods-actions that can be performed on objects---farmat  stringName.method()
//trim method
//trims whitespaces from both ends of string and returns a new one
let msg="    hello       ";
newMsg=msg.trim();
console.log(msg);
console.log(newMsg);

//toaupperCese and toLowerCase mathods
let str="Snobbar Jaffer";
let uppercase=str.toUpperCase();
console.log(uppercase);
let lowerCase=uppercase.toLowerCase();
console.log(lowerCase);

//**string methods with arguments**
//indexOf()--returns the first index of occurance of some value in string .or gives -1 if not found
let msge="iLoveCoding";
console.log(msge.indexOf("Love"));

console.log(msge.indexOf("code"));
console.log(msge.indexOf("Cod"));
console.log(msge.indexOf("o"));

//**method chaining **
let MSG="    hello      ";
//let newMsgg=MSG.trim();
//console.log("after trim:"+newMsgg);
//newMsgg=newMsgg.toUpperCase();
//console.log(newMsgg);
let newMsge=MSG.trim().toUpperCase();//method chaining
console.log(newMsge);

//slicereturns a part of the original string as a new string
let strr="iLoveCoding";
console.log(strr.slice(1,5));
console.log(strr.slice(5));
console.log(strr.slice(-5));

//replace--
let strrep="iLoveCoding";
console.log(strrep.replace("Love","do"));
console.log(strrep.replace("o","x"));

//repeat---a string with athe no. of copies of a string
let strsrep='snobbar';
console.log(strsrep.repeat(3));
//practice--get a slice of a string and replace all its 'l' with 't'
let name='apna college';
console.log(name.slice(5).replace('l','t').replace('l','t'));