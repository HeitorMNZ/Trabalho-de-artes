const cover = document.getElementById("cover");
const mainContent = document.getElementById("mainContent");
const startButton = document.getElementById("startButton");

const tracks = document.querySelectorAll(".track");
const notes = document.querySelectorAll(".note");
const tonearm = document.getElementById("tonearm");
const labelYear = document.getElementById("labelYear");

// Ângulo do braço do toca-discos para cada época (do início ao fim do disco)
const angles = [-22, -8, 4, 16, 26];
const years = ["1900", "1950", "1970", "1980", "1990"];

if (startButton) {
    startButton.addEventListener("click", () => {
        cover.classList.add("hidden");
        mainContent.classList.add("active");
    });
}

function activate(index) {
    tracks.forEach(track => track.classList.remove("active"));
    notes.forEach(note => note.classList.remove("active"));

    tracks[index].classList.add("active");
    notes[index].classList.add("active");

    tonearm.style.transform = `rotate(${angles[index]}deg)`;
    labelYear.textContent = years[index];
}

tracks.forEach(track => {
    track.addEventListener("click", () => {
        activate(Number(track.dataset.index));
    });
});

// Estado inicial: agulha na primeira faixa
activate(0);
