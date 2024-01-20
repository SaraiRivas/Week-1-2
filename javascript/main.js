// definicion de la secuencia KC
const konamiCode = [
  "arrowup",
  "arrowup",
  "arrowdown",
  "arrowdown",
  "arrowleft",
  "arrowright",
  "arrowleft",
  "arrowright",
  "b",
  "a",
];
let userInput = [];
let sequenceIndex = 0;

// el evento se activa cuando el usuario interactua con una tecla
document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  console.log(key);

  //  verifica si la tecla coincide con la siguiente tecla en la secuencia 
  if (key === konamiCode[sequenceIndex]) {
    userInput.push(key);
    sequenceIndex++;

    // Verifica si se ha ingresado toda la secuencia del Konami Code
    if (sequenceIndex === konamiCode.length) {
      konamiGif();
    }
    // reinicia la secuencia si el patron no es el correcto y envia un alert para informar cuando se inserte un comando incorrecto
  } else {
    resetSequence();
    alert("La secuencia no coincide");
  }
});

// Funcion para reiniciar la secuencia
function resetSequence() {
  userInput = [];
  sequenceIndex = 0;
}

// Función para mostrar el gif cuando se ingresa la secuencia correcta
function konamiGif() {
  const gifContainer = document.getElementById("gif-container");
  gifContainer.style.display = "block";
}
