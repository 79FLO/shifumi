const shi = document.getElementById('shi');
const fu = document.getElementById('fu');
const mi = document.getElementById('mi');
const player = document.getElementById('player');
const ia = document.getElementById('ia');
const command = document.getElementById('command');





let choixOrdi = ["shi", "fu", "mi"];    //declaration du tableau de réponse

let scoreIA = 0;    //score IA à incrémenter
let scorePlayer = 0;    //score player à incrémenter

function resultRandom() {
    return choixOrdi[Math.floor(Math.random() * choixOrdi.length)]  //choisi un resultat aleatoire du tableau déclaré ci-dessus
}





shi.addEventListener('click', function () {          //action quand on click sur le bouton "shi" :
    player.src = "/img/shi.png";                    //affiche l'image "shi" lors du click précédent coté player
    if (scoreIA < 3 && scorePlayer < 3) {            //limite de manche du jeu avant la fin (3pour le player OU pour l'IA)
        let resultRand = resultRandom();            //appel la fonction de random ci-dessus et la garde en mémoire

        if (resultRand == "shi") {              //SI le resultat du random IA ci-dessus est "shi" (egalité): 
            ia.src = "/img/shi.png";            //affiche l'image du random de L'IA
            //console.log(resultRand);
            //console.log("Egal!");
        }
        else if (resultRand == "fu") {          //OU SI le resultat du random IA est "fu" :
            ia.src = "/img/fu.png";             //affiche l'image "fu" coté IA
            document.getElementById('score-player').innerHTML = ++scorePlayer;      //ajoute 1 point au score player sur la page
            //console.log(resultRand);
            //console.log("You Win!");
        }
        else {                                   //pour tout autre resultat (donc "mi") :
            ia.src = "/img/mi.png";             //affiche l'image "mi" coté IA
            document.getElementById('score-ia').innerHTML = ++scoreIA;;       //ajoute 1 point au score IA sur la page
            //console.log(resultRand);
            //console.log("You Loose!");
        }
    }
    else { return alert("JEU TERMINE") };         //Puis renvois l'alerte de fin de jeu
});




fu.addEventListener('click', function () {
    player.src="/img/fu.png";
    if (scoreIA < 3 && scorePlayer < 3) {
        let resultRand = resultRandom();
        if (resultRand == "shi") {
            ia.src = "/img/shi.png"; 
            document.getElementById('score-ia').innerHTML = ++scoreIA;
           // console.log(resultRand);
           // console.log("You Loose!");
        }
        else if (resultRand == "fu") {
            ia.src = "/img/fu.png";
            //console.log(resultRand);
            //console.log("Egal!");
        }
        else {
            ia.src = "/img/mi.png"; 
            document.getElementById('score-player').innerHTML = ++scorePlayer;
           // console.log(resultRand);
           // console.log("You Win!");
        }
    }
    else { return alert("JEU TERMINE") }
});






mi.addEventListener('click', function () {
    player.src="/img/mi.png";
    if (scoreIA < 3 && scorePlayer < 3) {
        let resultRand = resultRandom();
        if (resultRand == "shi") {
            ia.src = "/img/shi.png"; 
            document.getElementById('score-player').innerHTML = ++scorePlayer;
            //console.log(resultRand);
            //console.log("You Win!");
        }
        else if (resultRand == "fu") {
            ia.src = "/img/fu.png";
            document.getElementById('score-ia').innerHTML = ++scoreIA;
           // console.log(resultRand);
           // console.log("You Loose!");
        }
        else {
            ia.src = "/img/mi.png"; 
            //console.log(resultRand);
           // console.log("Egal!");
        }
    }
    else { return alert("JEU TERMINE") }
});
