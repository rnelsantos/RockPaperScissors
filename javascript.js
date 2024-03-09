
const Rbutton = document.getElementById('rockButton');
const Pbutton = document.getElementById('paperButton');
const Sbutton = document.getElementById('scissorsButton');

const CP = document.getElementById("CP");
const Player = document.getElementById("Player");
const result = document.getElementById("RESULT");

let playerHand;
let RPScomp ;
let CPhand;

Rbutton.addEventListener('click', rockClick);
Pbutton.addEventListener('click', paperClick);
Sbutton.addEventListener('click', scissorsClick);
//Sbutton.addEventListener('click', klik);


function getComputerChoice() {
   let random=Math.floor(Math.random()*2);
    switch (random) {
    case 0:
      CPhand="rock";
      break;
    case 1:
        CPhand="paper";
      break;
    case 2:
        CPhand="Scissors";
        break;
}

}


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
    //console.log(alert(CPhand))
    }

function scissorsClick() {
    getComputerChoice();
    playerHand = "SCISSORS";
    Player.innerText = "Your Hand: " + playerHand;
    CP.innerText = "Computer's Hand: " + CPhand;
    displayResult()
    //console.log(alert(CPhand))
    }

    let results
    function Result() {
        let win;
        playerHand.toLowerCase() === CPhand.toLowerCase()? win=0:  (playerHand === "ROCK" && CPhand === "paper")||(playerHand === "PAPER" && CPhand === "scissors")||(playerHand === "SCISSORS" && CPhand === "rock") ? win=1: win=2
        

        switch (win) {
            case 0:
              results="TIE"
              break;
            case 1:
                results="YOU LOSE"
              break;
            case 2:
                results="YOU WIN";
                break;
        }
        
        

      }

 function displayResult(){   
     Result(playerHand, CPhand) ;
    


    result.innerText = results; 
 }

