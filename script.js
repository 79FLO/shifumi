const shi = document.getElementById('shi');
const fu = document.getElementById('fu');
const mi = document.getElementById('mi');
const player = document.getElementById('player');
const ia = document.getElementById('ia');
const command = document.getElementById('command');
let choixOrdi=["Shi","Fu","Mi"];

function resultRandom () {
    return choixOrdi[Math.floor(Math.random() * choixOrdi.length)]
}
let scoreIa = 0;
let scorePlayer = 0;

shi.addEventListener('click', function() {
        if (resultRandom()=="Shi"){
            console.log(resultRandom());
            console.log("Egal!"); 
        }
        else if (resultRandom()=="Fu"){
            document.getElementById('score-player').innerHTML = ++scorePlayer;
            console.log(resultRandom());
            console.log("You Win!");
        }
        else {
            document.getElementById('score-ia').innerHTML = ++scoreIa;;
            console.log(resultRandom());
            console.log("You Loose!");
        }
    });
fu.addEventListener('click', () => console.log('fu'));
mi.addEventListener('click', () => console.log('mi'));


// Pour le reste, a vous de jouer */