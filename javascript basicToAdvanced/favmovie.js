const favMovie="3 ideots";
let guess=prompt("GUESS MY FAV. MOVIE");
while(guess!=favMovie && guess!="quit"){
   guess=prompt("wrong guess....plz try again");
}
if(guess==favMovie){
    console.log("congrates");
}
else{
    console.log("you quit");
}
