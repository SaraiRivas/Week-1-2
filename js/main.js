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

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();
  console.log(key);

  if (key === konamiCode[sequenceIndex]) {
    userInput.push(key);
    sequenceIndex++;

    if (sequenceIndex === konamiCode.length) {
      konamiGif();
    }
  } else {
    resetSequence();
  }
});

function resetSequence() {
  userInput = [];
  sequenceIndex = 0;
}

function konamiGif() {
  const gifContainer = document.getElementById("gif-container");
  gifContainer.style.display = "block";
}
