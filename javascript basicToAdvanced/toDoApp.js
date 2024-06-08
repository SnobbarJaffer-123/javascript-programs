let todo=[];
let req=prompt("please enter your request");
while(true){
    if(req=="quit"){
        console.log("Quitting app");
        break;
    }
    if(req=="list"){
        console.log("----------");
        for(let i=0;i<todo.length;i++) //for(task of todo){
            console.log(i,todo[i]);
        
        console.log("----------");
    }
    else if(req=="add"){
        let task=prompt("please enter the task you want to enter");
        todo.push(task);
        console.log("task added");
    }
    else if(req=="delete"){
        let idx=prompt("plz enter the task index");
        todo.splice(idx,1);
        console.log("task deleted");
    }
    else{
        console.log("wrong request");
    }
    req=prompt("please enter your request");
}