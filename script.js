const slides = document.querySelectorAll(".slide");
const gotoButtons = document.querySelectorAll("[data-goto]");

const tracks = document.querySelectorAll(".track");
const notes = document.querySelectorAll(".note");
const tonearm = document.getElementById("tonearm");
const labelYear = document.getElementById("labelYear");

// Ângulo do braço do toca-discos para cada época (do início ao fim do disco)
const angles = [-22, -8, 4, 16, 26];
const years = ["1900", "1950", "1970", "1980", "1990"];

function goToSlide(id) {
    const target = document.getElementById(id);
    if (!target) return;

    slides.forEach(slide => slide.classList.remove("active"));
    target.classList.add("active");
    target.scrollTop = 0;

    if (id === "slide-cover") {
        activateTrack(0);
    }
}

gotoButtons.forEach(button => {
    button.addEventListener("click", () => goToSlide(button.dataset.goto));
});

function activateTrack(index) {
    tracks.forEach(track => track.classList.remove("active"));
    notes.forEach(note => note.classList.remove("active"));

    tracks[index].classList.add("active");
    notes[index].classList.add("active");

    tonearm.style.transform = `rotate(${angles[index]}deg)`;
    labelYear.textContent = years[index];
}

tracks.forEach(track => {
    track.addEventListener("click", () => {
        activateTrack(Number(track.dataset.index));
    });
});

// Estado inicial: agulha na primeira faixa
activateTrack(0);
