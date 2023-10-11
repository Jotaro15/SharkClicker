let clickCount = 0;

const cookie = document.getElementById("shark");
const clickCounter = document.getElementById("click-counter");
const clickDisplay = document.getElementById("click-display");

cookie.addEventListener("click", () => {
    clickCount++;
    clickCounter.textContent = clickCount;
    cookie.style.transform = "scale(1.1)";
    setTimeout(() => {
        cookie.style.transform = "scale(1)";
    }, 200);

    const clickText = document.createElement("div");
    clickText.textContent = "+1";
    clickText.style.position = "absolute";
    clickText.style.left = `${event.clientX}px`;
    clickText.style.top = `${event.clientY}px`;
    clickDisplay.appendChild(clickText);
    setTimeout(() => {
        clickDisplay.removeChild(clickText);
    }, 1000);
});

cookie.addEventListener("mouseover", () => {
    cookie.style.boxShadow = "0 0 7px rgba(0, 0, 0, 0.3)";
    cookie.style.borderRadius = "50%"; // Ajoutez cette ligne pour créer un cercle
});

cookie.addEventListener("mouseout", () => {
    cookie.style.boxShadow = "none";
    cookie.style.borderRadius = "0"; // Réinitialisez le border-radius pour supprimer la forme de cercle
});





