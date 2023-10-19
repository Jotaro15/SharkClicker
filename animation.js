/*Les variables et les constantes */
let Bulles = 0;
let Bulles_Bonus = 1;
let Cout_Bonus = 10;
const Shark = document.getElementById("Requin_Rose");
const Compteur = document.getElementById("Compteur");
const Bouton_Bonus = document.getElementById("Bouton_Bonus");
const Bonus_ChronoDisplay = document.getElementById("Bonus_Chrono");
const SharkyImage = document.getElementById("SharkyImage");
const SharkyReward = 100;
let Shark_Image = "./Images/pink_shark.png";
let megaShark_Cout = 100;
let MegaShark_Multiplicateur = 10;
let decompte = 30;
let intervalId = null;
let isCountingDown = false;
let AutoSharkCout = 100;
let AutoSharkRate = 0;
let sharkyInterval;

/* Le compteur s'actualiste toutes les secondes*/
setInterval(() => {
    Compteur.textContent = Bulles;
}, 10);

function updateCompteur() {
    Compteur.textContent = Bulles;
}

/* Quand on clique sur le requin on a une animation et si il est rose, on ajoute une bulle + les bonus. 
Si il est rouge, on ajoute le multiplicateur MegaShark en + */
function clickShark() {
    if (Shark_Image === "./Images/red_shark.png") {
        Bulles += Bulles_Bonus * MegaShark_Multiplicateur;
    } else {
        Bulles += Bulles_Bonus;
    }
    Shark.style.transform = "scale(1.1)";
    setTimeout(() => {
        Shark.style.transform = "scale(1)";
    }, 200);
}

/* Quand on clique sur le bouton bonus, il soustrait le nombre de bulles requis, ajoute le bonus par clique et actualise le cout du bonus */
function Activation_Bonus() {
    if (Bulles >= Cout_Bonus) {
        Bulles -= Cout_Bonus;
        Cout_Bonus = Math.ceil(Cout_Bonus * 1.5);
        Bulles_Bonus++;
        Bouton_Bonus.textContent = `Nouvelles dents : +${Bulles_Bonus} Coût : ${Cout_Bonus} points`;
    }
}

/* Quand la souris passe sur le requin, une ombre apparait, et disparait quand la souris s'éloigne */
Shark.addEventListener("mouseover", () => {
    Shark.style.boxShadow = "0 0 7px rgba(0, 0, 0, 0.3)";
    Shark.style.borderRadius = "50%";
});

Shark.addEventListener("mouseout", () => {
    Shark.style.boxShadow = "none";
    Shark.style.borderRadius = "0";
});

/* Quand on clique sur le bonus MegaShark, un décompte de 30 secondes apparaît */
function updateBonusChronoDisplay() {
    Bonus_ChronoDisplay.innerHTML = isCountingDown ? decompte + " secondes restantes" : "TERMINE!";
}

/* Le MegaShark dure 30 secondes, et s'arrête au bout de ces 30 secondes */
function startCountdown() {
    isCountingDown = true;
    updateBonusChronoDisplay();
    intervalId = setInterval(() => {
        if (decompte <= 0) {
            finish();
        } else {
            decompte--;
            updateBonusChronoDisplay();
        }
    }, 1000);
}

/* Quand le décompte est fini, le multiplicateur disparaît, et le requin redeviens rose*/
function finish() {
    clearInterval(intervalId);
    isCountingDown = false;
    decompte = 30;
    updateBonusChronoDisplay();
    Shark_Image = "./Images/pink_shark.png";
    Shark.src = Shark_Image;
}

/* Permet de refaire un MegaShark après un autre MegaShark, tooujours avec les mêmes propriétés*/
function Activation_MegaShark() {
    if (isCountingDown) {
        finish();
    } else if (Bulles >= megaShark_Cout) {
        Bulles -= megaShark_Cout;
        Shark_Image = "./Images/red_shark.png";
        Shark.src = Shark_Image;
        startCountdown();
    }
}

/* Donne les paramètres de l'AutoShark*/
function activateAutoShark() {
    if (Bulles >= AutoSharkCout) {
        Bulles -= AutoSharkCout;
        AutoSharkCout += 100;
        AutoSharkRate += 1;
        document.getElementById("Bouton_AutoShark").textContent = `AutoShark : +${AutoSharkRate} /sec - Coût : ${AutoSharkCout} bulles`;
        startAutoShark();
    }
}
let autoSharkInterval;
/* Permet de lancer l'autoShark*/
function startAutoShark() {
    autoSharkInterval = setInterval(() => {
        Bulles += AutoSharkRate;
        updateCompteur();
    }, 1000);
}
startAutoShark();

/* Permet de faire apparaître Sharky*/
function showSharky() {
    SharkyImage.style.display = "block";
    randomPosition();
}

/* Permet de faire disparaître Sharky*/
function hideSharky() {
    SharkyImage.style.display = "none";
}

/* Cache Sharky dès qu'il est cliqué */
SharkyImage.addEventListener("click", () => {
    Bulles += SharkyReward;
    hideSharky();
});

/* Démarre le décompte avant de faire réapparaître Sharky*/
function startSharkyInterval() {
    sharkyInterval = setInterval(() => {
        showSharky();
    }, 30000);
}

startSharkyInterval();