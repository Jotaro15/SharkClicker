let Bulles = 0;
let Bulles_Bonus = 1;
let Cout_Bonus = 10;
const Shark = document.getElementById("Requin_Rose");
const Compteur = document.getElementById("Compteur");
const Bouton_Bonus = document.getElementById("Bouton_Bonus");
const Bonus_ChronoDisplay = document.getElementById("Bonus_Chrono");
let sharkIcon = "./Images/pink_shark.png";
let megaShark_Cout = 100;
let MegaShark_Multiplicateur = 10;
let counter = 30;
let intervalId = null;
let isCountingDown = false;
let AutoSharkCost = 100;
let AutoSharkRate = 0;

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

function updateBonusChronoDisplay() {
    Bonus_ChronoDisplay.innerHTML = isCountingDown ? counter + " secondes restantes" : "TERMINE!";
}

function startCountdown() {
    isCountingDown = true;
    updateBonusChronoDisplay();
    intervalId = setInterval(() => {
        if (counter <= 0) {
            finish();
        } else {
            counter--;
            updateBonusChronoDisplay();
        }
    }, 1000);
}

function finish() {
    clearInterval(intervalId);
    isCountingDown = false;
    counter = 30;
    updateBonusChronoDisplay();
    sharkIcon = "./Images/pink_shark.png";
    Shark.src = sharkIcon;
}

function Activation_MegaShark() {
    if (isCountingDown) {
        finish();
    } else if (Bulles >= megaShark_Cout) {
        Bulles -= megaShark_Cout;
        sharkIcon = "./Images/red_shark.png";
        Shark.src = sharkIcon;
        startCountdown();
    }
}

function activateAutoShark() {
    if (Bulles >= AutoSharkCost) {
        Bulles -= AutoSharkCost;
        AutoSharkCost += 100;
        AutoSharkRate += 1;
        document.getElementById("Bouton_AutoShark").textContent = `AutoShark : +${AutoSharkRate} /sec - Coût : ${AutoSharkCost} bulles`;
        startAutoShark();
    }
}
let autoSharkInterval;

function startAutoShark() {
    autoSharkInterval = setInterval(() => {
        Bulles += AutoSharkRate;
    }, 1000);
}
startAutoShark();

const SharkyImage = document.getElementById("SharkyImage");
const SharkyReward = 100;
let sharkyInterval;

function showSharky() {
    SharkyImage.style.display = "block";
    randomPosition();
}

function hideSharky() {
    SharkyImage.style.display = "none";
}

SharkyImage.addEventListener("click", () => {
    Bulles += SharkyReward;
    hideSharky();
});

function startSharkyInterval() {
    sharkyInterval = setInterval(() => {
        showSharky();
    }, 30000);
}

startSharkyInterval();