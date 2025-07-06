let player=0;
let comp=0;

const choices=document.querySelectorAll(".choice");
let mssg=document.getElementById("mssg");
let user_score=document.getElementById("player-score");
let comp_score=document.getElementById("comp-score");

function gencompchoice(){
    let choice=["paper","rock","sissor"];
    let ind=    Math.floor(Math.random()*3);
    return choice[ind];
}

function draw(){
    mssg.innerText="MATCH DRAWN";
    mssg.style.backgroundColor="#081b31";
}

function showWinner(userWin){
    if(userWin){
        player++;
        user_score.innerText=player;
        mssg.innerText="PLAYER WIN";
        mssg.style.backgroundColor="green";
    }
    else{
        comp++;
        comp_score.innerText=comp;
        mssg.innerText="COMPUTER WIN";
        mssg.style.backgroundColor="red";
    }
}

function playgame(playerChoice,compChoice){
    if(playerChoice===compChoice){
        draw();
    }
    else{
        let userWin=false;
        if(playerChoice==="rock"){
            userWin= compChoice==="paper"? false: true;
        }
        else if(playerChoice==="paper"){
            userWin= compChoice==="sissor"? false:true;
        }
        else{
            userWin= compChoice==="rock"? false: true;
        }
        showWinner(userWin);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const playerChoice = choice.id;
        const compChoice = gencompchoice();
        playgame(playerChoice,compChoice);
    })


});

