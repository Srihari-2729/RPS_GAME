let isAutoPlaying = false;
let intervalId;

let scores=JSON.parse(localStorage.getItem('scores')) || 
    {
        wins:0,
        Losses:0,
        Draws:0
    }
ScoreUpdate();
const result1=document.querySelector('.result').innerHTML=`Result is ${result}`
const score1=document.querySelector('.yscore').innerHTML=`You Picked <img src="./images/${playerMove}-emoji.png">`
const score2=document.querySelector('.cscore').innerHTML=`computer picked <img src="./images/${computerMove}-emoji.png">`


function autoplay(){
    if(!isAutoPlaying){
        intervalId=setInterval(function(){
            const playerMove=pickcomputerMove()
            playGame(playerMove)
        },1000);
        isAutoPlaying = true;
    }else{
        clearInterval(intervalId)
        isAutoPlaying = false;
        
    }
    
}

function playGame(playerMove){
    const computerMove= pickcomputerMove()
    let result='';
    if (playerMove==='Rock'){
        if (computerMove==='Rock'){
            result='Tie';
        }
        else if(computerMove==='Paper'){
            result='You Lose';
        }
        else if (computerMove==='Scissors'){
            result='You Win';
        }
      
    }
    else if(playerMove==='Paper'){
        
        if (computerMove==='Rock'){
            result='You Win';
        }
        else if(computerMove==='Paper'){
            result='Tie';
        }
        else if (computerMove==='Scissors'){
            result='You Lose';
        }
      
    }
    else if (playerMove==='Scissors'){

        if (computerMove==='Rock'){
            result='You Lose';
        }
        else if(computerMove==='Paper'){
            result='You Win';
        }
        else if (computerMove==='Scissors'){
            result='Tie';
        }      
    }


    if(result==='You Win'){
        scores.wins+=1;
    }else if(result==='You Lose'){
        scores.Losses+=1;
    }else if(result==='Tie'){
        scores.Draws+=1
    }

    localStorage.setItem('scores',JSON.stringify(scores))
    
    
          
    ScoreUpdate();
    
    const result1=document.querySelector('.result').innerHTML=`${result}`
    const score1=document.querySelector('.yscore').innerHTML=`You Picked <img src="./images/${playerMove}-emoji.png">`
    const score2=document.querySelector('.cscore').innerHTML=`computer picked <img src="./images/${computerMove}-emoji.png">`

}

function ScoreUpdate(){
    const latestScore=document.querySelector('.updateScore').innerHTML=`Wins:${scores.wins} Losses:${scores.Losses} Draws:${scores.Draws} `
}


function pickcomputerMove(){
    const randomNumber=Math.random();
    let computerMove='';
    if (randomNumber>=0 && randomNumber<1/3){
        computerMove='Rock';
    }
    else if (randomNumber>=1/3 && randomNumber<2/3){
        computerMove='Paper';
    }
    else if (randomNumber>=2/3 && randomNumber<1){
        computerMove='Scissors';
    }
    
    return computerMove
}