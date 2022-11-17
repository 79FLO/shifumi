/* const shi = document.getElementById('shi');
const fu = document.getElementById('fu');
const mi = document.getElementById('mi');
const player = document.getElementById('player');
const ia = document.getElementById('ia');
const command = document.getElementById('command');

shi.addEventListener('click', () => console.log('shi'));
fu.addEventListener('click', () => console.log('fu'));
mi.addEventListener('click', () => console.log('mi'));
 */
// Pour le reste, a vous de jouer
//const username = prompt("Veuillez indiquer votre nom d'utilisateur...");


let playerScore = 0;
let computerScore = 0;
const player = document.getElementById('score-player').innerHTML = 1

const choixOrdi=["Shi","Fu","Mi"];

let resultRand=choixOrdi[Math.floor(Math.random() * choixOrdi.length)] 

console.log(resultRand)

const user="shi";            /* shi.addEventListener('click', () => console.log('shi')) */
function result() {
    if (resultRand=="Shi"){
        return "Egal!"
    }

    else if (resultRand=="Fu"){
        ++playerScore
        return "Win!" 
    }

    else {
        ++computerScore
        return "loose!"
    }
    
}
console.log(result());
console.log(playerScore);
console.log(computerScore);




