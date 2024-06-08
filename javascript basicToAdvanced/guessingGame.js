//user enters a maxnumber and then tries to guess a random gennerated number btw 1 to max
const max=prompt("Enter the maximum value");
let random=Math.floor(Math.random()*max)+1;
let guess=prompt("please guess the number");
while(true){
    if(guess=="quit"){
        console.log("you qiut");
        break;

    }
        if(guess==random){
            prompt(`you are right ,the random number was ${random},congrates!!`);
            break;
        }
        else if(guess<random){
            guess=prompt("hint:your guess was small,please try again");
        }
        else{
            guess=prompt("hint:your guess was larger,please try again");
        }

    
}
 