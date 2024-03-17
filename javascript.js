//get elements for event triggers
const Rbutton = document.getElementById('rockButton');
const Pbutton = document.getElementById('paperButton');
const Sbutton = document.getElementById('scissorsButton');
//get elements for display/revisions/prints
const CP = document.getElementById("CP");
const Player = document.getElementById("Player");
const result = document.getElementById("RESULT");
const result2 = document.getElementById("RESULT2");
//declare variables for game
let playerHand;
let RPScomp ;
let CPhand;

//event listener for buttons
Rbutton.addEventListener('click', rockClick);
Pbutton.addEventListener('click', paperClick);
Sbutton.addEventListener('click', scissorsClick);
//Sbutton.addEventListener('click', klik);


function getComputerChoice() { //Generate pseudo random computer choice
   let random=Math.floor(Math.random()*3);
    switch (random) {
    case 0:
      CPhand="rock";
      showRock();
      break;
    case 1:
        CPhand="paper";
        showPaper();
      break;
    case 2:
        CPhand="scissors";
        showScissors();
        break;
        default:
        CPhand="scissors";
        break;
}

}



//replace display hand divs
//const handContainer = document.getElementById("displayHand");
//const createDisHand = document.createElement('img');
const disHand = document.getElementById("displayHand-container");

function showRock() {
  const disHand = document.getElementById("displayHand-container");
  disHand.innerHTML ='<img src=\".\\images\\rock.png\"class=\"displayHand\">';}

function showPaper() {
  const disHand = document.getElementById("displayHand-container");
  disHand.innerHTML ='<img src=\".\\images\\paper.png\"class=\"displayHand\">';}
  
function showScissors() {
  const disHand = document.getElementById("displayHand-container");
  disHand.innerHTML ='<img src=\".\\images\\scissors.png\"class=\"displayHand\">';}


//draw a round upon a click on any buttons///////////////////////////////////////////
function rockClick() {
getComputerChoice();
playerHand = "ROCK";
Player.innerText = "Your Hand: " + playerHand;
CP.innerText = "Computer's Hand: " + CPhand;
displayResult()

//console.log(alert(CPhand))
}

function paperClick() {
    getComputerChoice();
    playerHand = "PAPER";
    Player.innerText = "Your Hand: " + playerHand;
    CP.innerText = "Computer's Hand: " + CPhand;
    displayResult()
    
    }

function scissorsClick() {
    getComputerChoice();
    playerHand = "SCISSORS";
    Player.innerText = "Your Hand: " + playerHand;
    CP.innerText = "Computer's Hand: " + CPhand;
    displayResult()
    //console.log(alert(CPhand))
    const disHand = document.getElementById("displayHand-container");
    disHand.innerHTML ='<img src=\".\\images\\scissors.png\"class=\"displayHand\">';
    }
////////////////////////////////////////////////////////////////////////////////

//declare varaibles for points keeping and results
    let results;
    let results2;
    let CPpoints=0;
    let playerPoints=0;

    function Result() {
        let win;
        playerHand.toLowerCase() === CPhand.toLowerCase()? win=0:  (playerHand === "ROCK" && CPhand === "paper")||(playerHand === "PAPER" && CPhand === "scissors")||(playerHand === "SCISSORS" && CPhand === "rock") ? win=1: win=2
        

        switch (win) {
            case 0:
              results="TIE"
              break;
            case 1:
                results=`YOU LOSE, ${CPhand} beats ${playerHand}`;
                ++CPpoints;
              break;
            case 2:
                results=`YOU WIN, ${playerHand} beats ${CPhand}`
                ++playerPoints;
                break;
        }
        
        

      }

function PlayGame() {
  result2.innerText = `PLAYER: ${playerPoints} COMPUTER: ${CPpoints} `
  if (CPpoints===5||playerPoints===5) { 
    let winner;
    playerPoints===5 ? winner="PLAYER":winner="COMPUTER"
    CPpoints=0;
    playerPoints=0;
    result2.innerText = `MATCH ENDS: ${winner} WINS! `
  }
}

 function displayResult(){   
     Result(playerHand, CPhand) ;
     PlayGame()


    result.innerText = results; 
    
 }

