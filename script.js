function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
}

// Restaurar modo oscuro si estaba activado
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
}

// Simulación de notificación
function showNotification() {
    alert("🎶 ¡Nueva canción disponible! 🎶");
}

// Letra sincronizada con la música a partir del segundo 6 con versos agrupados
const lyrics = [
    { time: 6, text: "I've held on for as long as I can<br>For the ones that I had to defend" },
    { time: 16, text: "I've been strong every day of my life<br>If she wants, death could take me this time" },
    { time: 26, text: "This world is a wasteland where nothing can grow<br>I used to have strength, but I ran out of hope" },
    { time: 37, text: "I know it's my fault that I'm here all alone<br>This world is a wasteland" },
    { time: 46, text: "Please let me go, go, go, go<br>Go, go, go" },
    { time: 57, text: "If I could just lay my head down and rest<br>If there was nothing to fight or protect" },
    { time: 67, text: "Maybe then I could finally be free<br>Maybe death is like falling asleep" },
    { time: 77, text: "This world is a wasteland where nothing can grow<br>I used to have strength, but I ran out of hope" },
    { time: 89, text: "I know it's my fault that I'm here all alone<br>This world is a wasteland" },
    { time: 100, text: "🎵 " },
    { time: 102, text: "I'm not ready to face it<br>Don't go saying goodbye" },
    { time: 111, text: "There's a beauty in changes<br>And I wanna try" },
    { time: 121, text: "This world is a wasteland where nothing can grow<br>If it weren't for you, I'd be here all alone" },
    { time: 134, text: "I know in my heart this is where we belong<br>This world is a wasteland" },
    { time: 142, text: "🎵 " },
    { time: 144, text: "Don't let me go, go, go, goGo, go, go, don't let me go" }
];

const audio = document.getElementById("audio");
const lyricsDiv = document.getElementById("lyrics");

// Reiniciar letra cuando la canción inicia
audio.addEventListener("play", () => {
    lyricsDiv.innerHTML = "🎵  🎵";
});

// Mostrar la letra en el momento correcto
audio.addEventListener("timeupdate", () => {
    const currentTime = Math.floor(audio.currentTime);
    for (let i = 0; i < lyrics.length; i++) {
        if (currentTime >= lyrics[i].time && (i === lyrics.length - 1 || currentTime < lyrics[i + 1].time)) {
            lyricsDiv.innerHTML = lyrics[i].text;
            break;
        }
    }
});


