let Bulles = 0;
let Bulles_Bonus = 1; 
let Cout_Bonus = 10; 

const Shark = document.getElementById("Requin_Rose");
const Compteur = document.getElementById("Compteur");
const clickDisplay = document.getElementById("click-display");
const Bouton_Bonus = document.getElementById("Bouton_Bonus");

let sharkIcon = "./Images/pink_shark.png";
let megaShark_Cout = 100;
let MegaShark_Multiplicateur = 10;

setInterval(() => {
    Compteur.textContent = Bulles;
}, 10);

function clickShark() {
    if (sharkIcon === "./Images/red_shark.png") {
        Bulles += Bulles_Bonus * MegaShark_Multiplicateur;
    } else {
        Bulles += Bulles_Bonus;
    }
    
    Shark.style.transform = "scale(1.1)";
    setTimeout(() => {
        Shark.style.transform = "scale(1)";
    }, 200);
}

function Activation_Bonus() {
    if (Bulles >= Cout_Bonus) {
        Bulles -= Cout_Bonus;
        Cout_Bonus = Math.ceil(Cout_Bonus * 1.5);
        Bulles_Bonus++;
        Bouton_Bonus.textContent = `Nouvelles dents : +${Bulles_Bonus} Coût : ${Cout_Bonus} points`;
    }
}

Shark.addEventListener("mouseover", () => {
    Shark.style.boxShadow = "0 0 7px rgba(0, 0, 0, 0.3)";
    Shark.style.borderRadius = "50%";
});

Shark.addEventListener("mouseout", () => {
    Shark.style.boxShadow = "none";
    Shark.style.borderRadius = "0";
});

var counter = 30;
var intervalId = null;

function finish() {
    clearInterval(intervalId);
    document.getElementById("Bonus_Chrono").innerHTML = "TERMINE!";

    sharkIcon = "./Images/pink_shark.png";
    Shark.src = sharkIcon;
}

function Bonus_Chrono() {
    counter--;
    if (counter == 0) finish();
    else {
        document.getElementById("Bonus_Chrono").innerHTML = counter + " secondes restantes";
    }
}

function start() {
    if (Bulles >= megaShark_Cout) {
        Bulles -= megaShark_Cout;
        sharkIcon = "./Images/red_shark.png";
        Shark.src = sharkIcon;
        intervalId = setInterval(Bonus_Chrono, 1000);
    }
    else {
        sharkIcon = "./Images/pink_shark.png";
        Shark.src = sharkIcon;
    }
}




