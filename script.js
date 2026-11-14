const screens = [...document.querySelectorAll(".screen")];
const heartRain = document.getElementById("heartRain");
const memoryPhoto = document.getElementById("memoryPhoto");
const photoPlaceholder = document.getElementById("photoPlaceholder");
const memoryKicker = document.getElementById("memoryKicker");
const memoryHeading = document.getElementById("memoryHeading");
const memoryText = document.getElementById("memoryText");
const photoCounter = document.getElementById("photoCounter");
const prevMemory = document.getElementById("prevMemory");
const nextMemory = document.getElementById("nextMemory");
const toLetter = document.getElementById("toLetter");
const galleryHint = document.getElementById("galleryHint");

let currentScreen = "welcome";
let memoryIndex = 0;

const memories = [
  {
    image: "images/1.jpg",
    title: "El comienzo de algo bonito",
    text: "No sabía que una persona podía convertirse en una parte tan bonita de mi vida. Y entonces llegaste tú."
  },
  {
    image: "images/2.jpg",
    title: "Tu sonrisa",
    text: "Hay sonrisas que iluminan un día entero. La tuya tiene esa capacidad de hacerme feliz incluso en los días más normales."
  },
  {
    image: "images/3.jpeg",
    title: "Mi lugar favorito",
    text: "No importa tanto el lugar ni lo que estemos haciendo. Muchas veces, lo mejor del momento es poder compartirlo contigo."
  },
  {
    image: "images/4.jpg",
    title: "Los pequeños detalles",
    text: "Me gustan esas pequeñas cosas que te hacen ser tú: tus ocurrencias, tus gestos y todo eso que quizás ni notas, pero que yo valoro."
  },
  {
    image: "images/5.jpeg",
    title: "Todo lo bonito que falta",
    text: "Todavía nos quedan recuerdos por crear, risas por compartir y momentos que algún día miraremos con una sonrisa."
  }
];

function showScreen(id) {
  screens.forEach(screen => screen.classList.toggle("active", screen.id === id));
  currentScreen = id;
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll("[data-next]").forEach(button => {
  button.addEventListener("click", () => showScreen(button.dataset.next));
});

function renderMemory() {
  const memory = memories[memoryIndex];

  // Limpiar la imagen anterior
  memoryPhoto.onload = null;
  memoryPhoto.onerror = null;

  memoryPhoto.classList.remove("broken");
  photoPlaceholder.style.display = "flex";

  // Configurar la descripción
  memoryPhoto.alt = `Fotografía ${memoryIndex + 1}: ${memory.title}`;

  memoryKicker.textContent = `RECUERDO 0${memoryIndex + 1}`;
  memoryHeading.textContent = memory.title;
  memoryText.textContent = memory.text;

  photoCounter.textContent = `0${memoryIndex + 1} / 05`;

  // Detectar cuando la nueva imagen cargue
  memoryPhoto.onload = () => {
    photoPlaceholder.style.display = "none";
    memoryPhoto.classList.remove("broken");
  };

  // Detectar errores
  memoryPhoto.onerror = () => {
    memoryPhoto.classList.add("broken");
    photoPlaceholder.style.display = "flex";
    console.error("No se pudo cargar:", memory.image);
  };

  // Cargar la fotografía correspondiente
  memoryPhoto.src = memory.image;

  // Controles
  prevMemory.disabled = memoryIndex === 0;
  nextMemory.disabled = memoryIndex === memories.length - 1;

  galleryHint.textContent = memoryIndex === memories.length - 1
    ? "Has llegado al último recuerdo. 💚"
    : "Toca la flecha para descubrir el siguiente recuerdo.";

  document.querySelectorAll(".dot").forEach((dot, index) => {
    dot.classList.toggle("active", index === memoryIndex);
    dot.setAttribute(
      "aria-current",
      index === memoryIndex ? "step" : "false"
    );
  });

  toLetter.classList.toggle(
    "hidden",
    memoryIndex !== memories.length - 1
  );
}
const dotsContainer = document.getElementById("memoryDots");
memories.forEach((_, index) => {
  const dot = document.createElement("button");
  dot.className = "dot";
  dot.type = "button";
  dot.setAttribute("aria-label", `Ver recuerdo ${index + 1}`);
  dot.addEventListener("click", () => { memoryIndex = index; renderMemory(); });
  dotsContainer.appendChild(dot);
});

prevMemory.addEventListener("click", () => {
  if (memoryIndex > 0) { memoryIndex--; renderMemory(); }
});
nextMemory.addEventListener("click", () => {
  if (memoryIndex < memories.length - 1) { memoryIndex++; renderMemory(); }
});
toLetter.addEventListener("click", () => showScreen("letter"));
document.getElementById("replay").addEventListener("click", () => {
  memoryIndex = 0;
  renderMemory();
  showScreen("welcome");
});

function makeHearts() {
  const count = window.matchMedia("(max-width: 600px)").matches ? 17 : 27;
  for (let i = 0; i < count; i++) {
    const heart = document.createElement("span");
    heart.className = "falling-heart";
    heart.textContent = Math.random() > .5 ? "♥" : "♡";
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${8 + Math.random() * 13}px`;
    heart.style.animationDuration = `${11 + Math.random() * 17}s`;
    heart.style.animationDelay = `${-Math.random() * 25}s`;
    heartRain.appendChild(heart);
  }
}
makeHearts();
renderMemory();

// La música empieza únicamente cuando la visitante toca el control.
const music = document.getElementById("backgroundMusic");
const musicToggle = document.getElementById("musicToggle");
const musicLabel = document.getElementById("musicLabel");
let musicStarted = false;

musicToggle.addEventListener("click", async () => {
  if (!musicStarted) {
    try {
      await music.play();
      musicStarted = true;
      musicLabel.textContent = "Pausar";
      musicToggle.setAttribute("aria-label", "Pausar música");
    } catch {
      musicLabel.textContent = "Añade canción.mp3";
      musicToggle.title = "Coloca un archivo autorizado en music/cancion.mp3";
    }
  } else if (music.paused) {
    await music.play();
    musicLabel.textContent = "Pausar";
  } else {
    music.pause();
    musicLabel.textContent = "Música";
  }
});
