let clickCount = 0;
let bonusPoints = 1; 
let bonusCost = 10; 
let bonusPurchases = 0; 

const cookie = document.getElementById("shark");
const clickCounter = document.getElementById("click-counter");
const clickDisplay = document.getElementById("click-display");
const bonusButton = document.getElementById("bonus-button");

function clickCookie() {
    clickCount += bonusPoints;
    clickCounter.textContent = clickCount;
    cookie.style.transform = "scale(1.1)";
    setTimeout(() => {
        cookie.style.transform = "scale(1)";
    }, 200);
}

function activateBonus() {
    if (clickCount >= bonusCost) {
        clickCount -= bonusCost;
        bonusCost = Math.ceil(bonusCost * 1.5);
        bonusPoints++;
        bonusPurchases++;
        bonusButton.textContent = `Bonus (+${bonusPoints}) - Coût : ${bonusCost} points`;
    }
}

cookie.addEventListener("mouseover", () => {
    cookie.style.boxShadow = "0 0 7px rgba(0, 0, 0, 0.3)";
    cookie.style.borderRadius = "50%";
});

cookie.addEventListener("mouseout", () => {
    cookie.style.boxShadow = "none";
    cookie.style.borderRadius = "0";
});


var counter = 10;
var intervalId = null;
function finish() {
  clearInterval(intervalId);
  document.getElementById("bip").innerHTML = "TERMINE!";	
}
function bip() {
    counter--;
    if(counter == 0) finish();
    else {	
        document.getElementById("bip").innerHTML = counter + " secondes restantes";
    }	
}
function start(){
  intervalId = setInterval(bip, 1000);
}	
