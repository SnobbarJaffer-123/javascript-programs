const users=[
    { firstName:"snobbar",lastName :"jaffer",age:24},
    {firstName:"shameema",lastName:"begum",age:2},
    {firstName:"mohammad",lastName:"baqir",age:1},
    {firstName:"touseef",lastName:"jaffer",age:1},
    {firstName:"aasif",lastName:"jaffer",age:1},


];
const output=users.reduce(function (acc,curr){
    if(acc[curr.lastName]){
        acc[curr.lastName]=++acc[curr.lastName];

    }
    else{
        acc[curr.lastName]=1;
    }
    return acc;
},{});
console.log(output);

//display first names from the users
const fNames=users.reduce(function(acc,curr){
    acc[curr.firstName]=curr.firstName;
    return acc;
},{});

console.log(fNames);