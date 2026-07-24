let counter = 0;
const newInterval = setInterval(() => {
  let msg = document.createElement("p");
  msg.textContent = "Yap";
  document.body.append(msg);
  counter++;
  if (counter === 5) {
    clearInterval(newInterval);
  }
}, 1000);

const bobux = document.querySelectorAll(".bobux");
const changer = setInterval(() => {
  bobux.forEach((element) => {
    element.classList.toggle("animator");
  });
}, 1000);

const keys = ["w", "a", "s", "d"];
let currentKeyIndex = 0;
let score = 0;
let gameInterval;

const statusElement = document.querySelector("#status");
const keyElement = document.querySelector("#key");
const points = document.querySelector("#points");
const restart = document.querySelector("#restart");

const setRandomKey = function () {
  currentKeyIndex = Math.floor(Math.random() * keys.length);
  keyElement.textContent = keys[currentKeyIndex];
};

function startGame() {
  score = 0;
  points.textContent = `Points: ${score}`;

  statusElement.textContent =
    "Game started. Press any key that pops up on the screen!";
  setRandomKey();
  gameInterval = setInterval(() => {
    setRandomKey();
  }, 2000);
}
restart.addEventListener("click", () => startGame());

document.addEventListener("keydown", (e) => {
  let currentKey = keys[currentKeyIndex];
  if (!keyElement.textContent) return;
  if (e.key === currentKey) {
    statusElement.textContent = "Correct!";
    score++;
    points.textContent = `Points: ${score}`;
    setRandomKey();
  } else {
    clearInterval(gameInterval);
  }
});

const delayForm = document.querySelector("#delay-form");
const delayInput = document.querySelector("#delay-input");
const delayBtn = document.querySelector("#delay-submit");

delayForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let delay = Number(delayInput.value) * 1000;

  setTimeout(() => {
    let texti = document.createElement("p");
    texti.textContent = "Hello!!";
    document.body.append(texti);
  }, delay);
});
