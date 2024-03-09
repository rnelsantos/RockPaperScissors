
const button = document.getElementById('button');
const CP = document.getElementById("CP");

let RPScomp ;
let CPhand;

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


function ClickButton() {
getComputerChoice();
CP.innerText = "Computer's Hand: " + CPhand;
//console.log(alert(CPhand))
}

button.addEventListener('click', ClickButton);