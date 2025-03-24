/*function toggleDarkMode() {
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
*/

// Obtener los elementos del DOM
const audio = document.getElementById("audio");
const audioSource = document.getElementById("audioSource");
const lyricsDiv = document.getElementById("lyrics");

// Letras sincronizadas con el tiempo
const lyricsData = {
    "Ma Meilleure Ennemie (from the series Arcane League of Legends).mp3": [
        { "time": 0, "text": "Je t'aime, je te hais, je t'aime, je te hais <br>Je t'aime, je te hais, je t'aime, je te hais" },
        { "time": 5, "text": "Je t'aime, je te hais, je t'aime, je te hais <br>Je t'aime, je te hais, je t'aime, je te hais" },
        { "time": 10, "text": "T'es la meilleure chose qui m'est arrivée <br>Mais aussi la pire chose qui m'est arrivée" },
        { "time": 15, "text": "Ce jour où je t'ai rencontrée, j'aurais peut-être préféré <br>Que ce jour ne soit jamais arrivé (arrivé)" },
        { "time": 22, "text": "La pire des bénédictions <br>La plus belle des malédictions" },
        { "time": 26, "text": "De toi, j'devrais m'éloigner <br>Mais comme dit le dicton 'Plutôt qu'être seul, mieux vaut être mal accompagné'" },
        { "time": 33, "text": "Tu sais c'qu'on dit Sois près d'tes amis les plus chers <br>Mais aussi Encore plus près d'tes adversaires" },
        { "time": 44, "text": "Mais ma meilleure ennemie, c'est toi Fuis-moi, le pire, c'est toi et moi" },
        { "time": 54, "text": "Mais si tu cherches encore ma voix Oublie-moi, le pire, c'est toi et moi" },
        { "time": 66, "text": "Pourquoi ton prénom me blesse <br>Quand il se cache juste là dans l'espace?" },
        { "time": 77, "text": "C'est quelle émotion, la haine? <br>Ou la douceur, quand j'entends ton prénom?" },
        { "time": 88, "text": "Je t'avais dit, 'ne regarde pas en arrière' <br>Le passé qui te suit te fait la guerre" },
        { "time": 97, "text": "Mais ma meilleure ennemie, c'est toi Fuis-moi, le pire, c'est toi et moi" },
        { "time": 108, "text": "Mais ma meilleure ennemie, c'est toi Fuis-moi, le pire, c'est toi et moi" },
        { "time": 120, "text": "Je t'aime, je te hais, je t'aime, je te hais <br>Je t'aime, je te hais, je t'aime, je te hais" },
        { "time": 125, "text": "Je t'aime, je te hais, je t'aime, je te hais <br>Je t'aime, je te hais, je t'aime, je te hais" },
        { "time": 135, "text": "Je t'aime, je te hais, je t'aime, je te hais <br>Je t'aime, je te hais, je t'aime, je te hais" }
     ],
    "Die With A Smile.mp3": [
        { "time": 1, "text": "Ooh " },
        { "time": 7, "text": "I, I just woke up from a dream Where you and I had to say goodbye <br>And I don't know what it all means But since I survived, I realized" },
        { "time": 29, "text": "Wherever you go, that's where I'll follow Nobody's promised tomorrow <br>So I'ma love you every night like it's the last night Like it's the last night" },
        { "time": 45, "text": "If the world was ending, I'd wanna be next to you If the party was over and our time on Earth was through <br>I'd wanna hold you just for a while and die with a smile If the world was ending, I'd wanna be next to you" },
        { "time": 79, "text": "Ooh Ooh," },
        { "time": 85, "text": "lost, lost in the words that we scream I don't even wanna do this anymore <br>'Cause you already know what you mean to me And our love's the only war worth fighting for" },
        { "time": 107, "text": "Wherever you go, that's where I'll follow Nobody's promised tomorrow <br>So I'ma love you every night like it's the last night Like it's the last night" },
        { "time": 123, "text": "If the world was ending, I'd wanna be next to you If the party was over and our time on <br>Earth was through I'd wanna hold you just for a while and die with a smile If the world was ending, I'd wanna be next to you" },
        { "time": 160, "text": "Right next to you Next to you Right next to you Oh-oh, oh" },
        { "time": 173, "text": "🎵 " },
        { "time": 190, "text": "If the world was ending, I'd wanna be next to you If the party was over and our time on <br>Earth was through I'd wanna hold you just for a while and die with a smile If the world was ending, <br>I'd wanna be next to you If the world was ending, I'd wanna be next to you" },
        { "time": 240, "text": "Ooh I'd wanna be next to you" }
    ],
    "Sirens.mp3": [
        { "time": 8, "text": "Fall right down to the bottom Boy with a motto <br>Stay but I oughta leave and Trust me, my heart bleeds" },
        { "time": 15, "text": "I feel everything, I Drip, drop, drink out of the bottle <br>Boy with a heart of gold Get run over by heaven knows what" },
        { "time": 24, "text": "Weary soldier, I get older Life gets colder" },
        { "time": 28, "text": "Sometimes I get a little bit scared at night <br>I get a little preoccupied The sirens in my mind The sirens in my mind" },
        { "time": 39, "text": "I just wanna be good again I wanna make it to the end <br>The sirens in my mind The sirens in my mind" },
        { "time": 49, text: "🎵 " },
        { "time": 57, "text": "Autumn, stuck in the grotto Been trying for the <br>lottery but never win My heart bleeds I feel everything, I" },
        { "time": 66, "text": "Drop, drop way down to the bottom <br>Boy with a heart of gold Get run over by heaven knows what" },
        { "time": 73, "text": "Weary soldier, I get older Life gets colder" },
        { "time": 77, "text": "Sometimes I get a little bit scared at night <br>I get a little preoccupied The sirens in my mind The sirens in my mind" },
        { "time": 88, "text": "I just wanna be good again I wanna make it to the end <br>The sirens in my mind The sirens in my mind" },
        { "time": 97, "text": "🎵 " },
        { "time": 135, "text": "(Oh, sirens in my mind, the sirens in my mind) <br>Sirens, sirens Sirens, sirens Sirens in my mind" }
    ],
    "Tragos Amargos.mp3": [
        { "time": 22, "text": "Clavado en este rincón Como tú clavaste a mi corazón <br>Estos tragos que tomo yo Son pura tristeza Y son mi dolor" },
        { "time": 45, "text": "Te fuiste, no sé por qué Yo sé que me querías <br>Y sé que me adorabas" },
        { "time": 54, "text": "Por si acaso quieres regresar <br>Te voy a esperar, te voy a esperar" },
        { "time": 68, "text": "Tragos de amargo licor Que no me hacen olvidar <br>Y me siento como un cobarde Que hasta me pongo a llorar" },
        { "time": 93, "text": "🎵 " },
        { "time": 111, "text": "Te fuiste no sé por qué Yo sé que me querías <br>Y sé que me adorabas" },
        { "time": 120, "text": "Por si acaso quieres regresar <br>Te voy a esperar, te voy a esperar" },
        { "time": 135, "text": "Tragos de amargo licor Que no me hacen olvidar <br>Y me siento como un cobarde Que hasta me pongo a llorar" }
    ],
    "Wasteland (from the series Arcane League of Legends).mp3": [
        { time: 0, text: "🎵 " },
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
        { time: 132, text: "I know in my heart this is where we belong<br>This world is a wasteland" },
        { time: 142, text: "🎵 " },
        { time: 144, text: "Don't let me go, go, go, go<br>Go, go, go, don't let me go" }
    ],
};

// Función para seleccionar una canción
function selectSong(songName) {
    if (!audio || !audioSource || !lyricsDiv) {
        console.error("Elementos no encontrados en el DOM.");
        return;
    }

    audioSource.src = `./Music/${songName}`;
    audio.load();
    audio.play();

    // Asignar la canción actual al audio
    audio.setAttribute("data-song", songName);
    lyricsDiv.innerHTML = "🎵 Reproduciendo... 🎵";
}

// Función para actualizar la letra sincronizada
function updateLyrics() {
    const currentTime = Math.floor(audio.currentTime);
    const songName = audio.getAttribute("data-song");
    const lyrics = lyricsData[songName] || [];

    let displayedLyrics = "";
    lyrics.forEach(line => {
        if (currentTime >= line.time) {
            displayedLyrics = line.text;
        }
    });

    lyricsDiv.innerHTML = displayedLyrics || "🎵 Reproduciendo... 🎵";
}

// Evento para actualizar la letra conforme avanza la canción
audio.addEventListener("timeupdate", updateLyrics);


