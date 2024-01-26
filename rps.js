let score = JSON.parse(localStorage.getItem('score')) || {
    wins:0,
    losses:0,
    ties:0
};

/*

if (!score){
    score={
        wins:0,
        losses:0,
        ties:0
    }
};
*/
updateScoreElements();



function updateScoreElements(){
    document.querySelector('.display').innerHTML=`Wins : ${score.wins}, Losses : ${score.losses}, Ties : ${score.ties}`;

}

// Computer Move Function
let  computermove='';
function pickcomputermove(){
    const N = Math.random();
    
    if(N>=0 && N<1/3)
    { 
        computermove ='rock';
    }
    else if(N>=1/3 && N<2/3)
    {
        computermove ='paper';
    }
    else if(N>=2/3 && N<1)
    {
        computermove ='scissors';
    }
    return computermove;
 }



//player function code
 function playgame(playermove){
    const computermove=pickcomputermove();
    let result = '';
    if(playermove === 'rock'){
        if (computermove === 'rock')
        {
            result = 'Tie';
        }
        else if (computermove === 'paper')
        {
            result = 'Lose';
        }
        else if (computermove === 'scissors')
        {
            result = 'Win';
        }
        

    }
    else if (playermove === 'paper'){
        if (computermove === 'rock')
        {
            result = 'Win';
        }
        else if (computermove === 'paper')
        {
            result = 'Tie';
        }
        else if (computermove === 'scissors')
        {
            result = 'Lose';
        }
    }
    else if (playermove === 'scissors'){
        if (computermove === 'rock')
        {
            result = 'Lose';
        }
        else if (computermove === 'paper')
        {
            result = 'Win';
        }
        else if (computermove === 'scissors')
        {
            result = 'Tie';
        }
    }

    if(result === 'Win')
    {
        score.wins += 1;
    }
    else if(result === 'Lose')
    {
        score.losses += 1;
    }
    else if(result === 'Tie')
    {
        score.ties += 1;
    }
    //creating a local storage
    localStorage.setItem('score',JSON.stringify(score));

    updateScoreElements();
    //Output
    document.querySelector('.js-moves').innerHTML=`Computer Move : <img src="${computermove}-emoji.png" class="moveicon">, Player Move : <img src="${playermove}-emoji.png" class="moveicon">`;
    document.querySelector('.js-result').innerHTML= result ;

    // alert(`You picked ${playermove} and Computer picked ${computermove}, ${result} 
    // Wins : ${score.wins}, Losses : ${score.losses}, Ties : ${score.ties}`);
    
 }

 function keyhandle(event){
    if (event === 'r'){
        playgame('rock');
    }
    else if (event === 'p'){
        playgame('paper');
    }
    else if (event === 's'){
        playgame('scissors');
    }
    else if (event === 'Backspace'){
        score.wins=0;
        score.losses=0;
        score.ties=0; 
        localStorage.removeItem('score');
        updateScoreElements();
    }
}