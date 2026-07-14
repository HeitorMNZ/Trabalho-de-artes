const points = document.querySelectorAll(".point");
const cards = document.querySelectorAll(".card");
const cover = document.getElementById("cover");
const mainContent = document.getElementById("mainContent");
const startButton = document.getElementById("startButton");

if (startButton) {
    startButton.addEventListener("click", () => {
        cover.classList.add("hidden");
        mainContent.classList.add("active");
    });
}

function showCard(targetCardId) {
    cards.forEach(card => {
        card.classList.remove("show");
    });

    points.forEach(point => {
        point.classList.remove("active");
    });

    const selectedCard = document.getElementById(targetCardId);
    if (selectedCard) {
        selectedCard.classList.add("show");
    }
}

points.forEach(point => {
    point.addEventListener("click", () => {
        showCard(point.dataset.card);
        point.classList.add("active");
    });

    point.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            showCard(point.dataset.card);
            point.classList.add("active");
        }
    });
});