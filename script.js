const shi = document.getElementById('shi');
const fu = document.getElementById('fu');
const mi = document.getElementById('mi');
const player = document.getElementById('player');
const ia = document.getElementById('ia');
const command = document.getElementById('command');

let choixOrdi = ["shi", "fu", "mi"];

let scoreIA = 0;
let scorePlayer = 0;

function resultRandom() {
    return choixOrdi[Math.floor(Math.random() * choixOrdi.length)]
}

shi.addEventListener('click', function () {
    if (scoreIA < 3 && scorePlayer < 3) {
        let resultRand = resultRandom();
        if (resultRand == "shi") {
            console.log(resultRand);
            console.log("Egal!");
        }
        else if (resultRand == "fu") {
            document.getElementById('score-player').innerHTML = ++scorePlayer;
            console.log(resultRand);
            console.log("You Win!");
        }
        else {
            document.getElementById('score-ia').innerHTML = ++scoreIA;;
            console.log(resultRand);
            console.log("You Loose!");
        }
    }
    else { return alert("JEU TERMINE") };
});

fu.addEventListener('click', function () {
    if (scoreIA < 3 && scorePlayer < 3) {
        let resultRand = resultRandom();
        if (resultRand == "shi") {
            document.getElementById('score-ia').innerHTML = ++scoreIA;
            console.log(resultRand);
            console.log("You Loose!");
        }
        else if (resultRand == "fu") {
            console.log(resultRand);
            console.log("Egal!");
        }
        else {
            document.getElementById('score-player').innerHTML = ++scorePlayer;
            console.log(resultRand);
            console.log("You Win!");
        }
    }
    else { return alert("JEU TERMINE") }
});

mi.addEventListener('click', function () {
    if (scoreIA < 3 && scorePlayer < 3) {
        let resultRand = resultRandom();
        if (resultRand == "shi") {
            document.getElementById('score-player').innerHTML = ++scorePlayer;
            console.log(resultRand);
            console.log("You Win!");
        }
        else if (resultRand == "fu") {
            document.getElementById('score-ia').innerHTML = ++scoreIA;
            console.log(resultRand);
            console.log("You Loose!");
        }
        else {
            console.log(resultRand);
            console.log("Egal!");
        }
    }
    else { return alert("JEU TERMINE") }
});