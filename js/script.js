// dice skapa ett tärnings spel
// stegen
// skapa en counter
// tärning en funktion som slumpar ett nummer mellan 1 - 6
// variable som vi kan spara värdet i
// skapa ett click event på knappen
// köra funktionen randomnumber när vi klickar på knappen
// skapa en till variable med goalnumber
// spara antal kast i en varialbel

// skapa en ifsats som kollar om number = goalnumber
//visa random numret i tärningen i mitten

//om nummer e goalnumber visa tärning med samma nummer

let goalNumber = 1;
console.log(typeof goalNumber);
let throws = 0;
let previousResult = "";
let mainDice = document.getElementById("dice");
let btn = document.querySelector("button");

document.querySelector("button").addEventListener("click", () => {
  const result = Math.ceil(Math.random() * 6); // randomnumber

  mainDice.classList.remove(`dots-${previousResult}`);
  mainDice.classList.add(`dots-${result}`);
  previousResult = result;
  throws++;
  console.log(throws);

  if (result !== goalNumber) {
    const headerDice = document.querySelector(`header .dots-${goalNumber}`);
    headerDice.classList.remove("faded");
    goalNumber = goalNumber + 1;
    console.log("rad 33", goalNumber);
  }
  btn.innerText = `kasta(${throws})`;

  if (goalNumber > 6) {
    btn.innerText = `grattis du klarade det på ${throws} kast`;
    btn.disabled = true;
    document.getElementById("reset").style.display = "block";
  }
});

const resetButton = document.getElementById("reset");
resetButton.addEventListener("click", resetGame);

function resetGame() {
  throws = 0;
  goalNumber = 1;
  mainDice.classList.remove(`dots-${previousResult}`);
  for (let i = 1; i < 7; i++) {
    let dices = document.getElementsByClassName(`dots-${i}`);
    dices[0].classList.add("faded");
  }
  btn.disabled = false;
  btn.innerText = "kasta";
  resetButton.style.display = "none";
}
