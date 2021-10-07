function computerPlay(){
    let items=['rock', 'paper', 'scissors'];
    return items[Math.floor(Math.random()*items.length)];
}

function playerSelection(){
    let selection = prompt("Choose rock / paper / scissors:").toLowerCase();
    if(selection=="rock"||selection=="paper"||selection=="scissors"){
        return selection;
    }
    else{
        console.log("Invalid choice");
        return false;
    }
}
let cpoints=0;
let ppoints=0;
function playRound(computerSelection, playerselection){
    if(computerSelection=='paper'){
        if(playerselection=='rock')
            cpoints++;
        else if(playerselection=='scissors')
            ppoints++;
        else return "tie";
    }
    else if(computerSelection=='rock'){
        if(playerselection=='scissors')
            cpoints++;
        else if(playerselection=='paper')
            ppoints++;
        else return "tie";
    }
    if(computerSelection=='scissors'){
        if(playerselection=='paper')
            cpoints++;
        else if(playerselection=='rock')
            ppoints++;
        else return "tie";
    }
}

function game(){
    let i=0;
    while(i<5){
        let computerSelection = computerPlay();
        let playerselection = playerSelection();
        console.log(computerSelection+"-"+playerselection);
        playRound(computerSelection, playerselection);
        console.log(cpoints+"-"+ppoints);
        i++;
    }
    if(cpoints>ppoints){
        console.log("The Computer Won"); 
    }
    else if(cpoints<ppoints){
        console.log("You Won!"); 
    }
    else console.log("It's a tie!");
}
game();
