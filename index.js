const cscore=document.querySelector("#cpoints");
const pscore=document.querySelector("#ppoints");
const buttons = document.querySelectorAll('button');
const choice = document.querySelector("#round");
let ppoints=0;
let cpoints=0;
let round=0;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if(button.id=='btnRock') selection='rock';
    else if (button.id=='btnScissors') selection='scissors';
    else selection='paper';
    let computerSelection = computerPlay();
    playRound(computerSelection, selection);
    cscore.textContent=cpoints;
    pscore.textContent=ppoints;
    if(cpoints==5){
        alert("The computer won!");
        location.reload();
    }
    else if(ppoints==5){
        alert("You won!");
        location.reload();
    }
  });
});


function computerPlay(){
    let items=['rock', 'paper', 'scissors'];
    let item=items[Math.floor(Math.random()*items.length)];
    choice.textContent = "Computer choose: " + item.toUpperCase();
    return item;
}


function playRound(computerSelection, selection){
    if(computerSelection==selection)  
        choice.textContent="It's a tie!";
    else if(computerSelection=='paper'){
        if(selection=='rock'){
            cpoints++;
            return "You lost this round";
        }
        else if(selection=='scissors'){
            ppoints++;
            return "You won this round";
        }
    }
    else if(computerSelection=='rock'){
        if(selection=='scissors')
            cpoints++;
        else if(selection=='paper')
            ppoints++;
    }
    else if(computerSelection=='scissors'){
        if(selection=='paper')
            cpoints++;
        else if(selection=='rock')
            ppoints++;
    }
}

