let throws = 0;
currentGoal = 1;

const dice = {
  sides: 6,
  throw() {
    return Math.ceil(Math.random() * this.sides);
  },
};

document.querySelector("button").addEventListener("click", () => {
  // Thow dice
  let result = dice.throw();
  console.log(result);

  // Show dice in UI
  document.querySelector("#dice").classList = "";
  document.querySelector("#dice").classList.add("dice", `dots-${result}`);

  // increace throws + 1
  throws++;
  document.querySelector("button").innerHTML = `Kasta ( ${throws} )`;
  console.log(`You threw a ${result}.`);

  // jämför
  if (result === currentGoal && currentGoal < 6) {
    console.log("nice, increasing goal!");

    // remove faded state
    document.querySelector(`.dots-${result}`).classList.remove("faded");

    currentGoal++;
  } else if (result === currentGoal && currentGoal === 6) {
    console.log(`You rolled a ladder in ${throws} throws.`);

    // remove faded state
    document.querySelector(`.dots-${result}`).classList.remove("faded");

    // Announc winner
    setTimeout(() => {
      alert(`you made it in ${throws}`);
      location.reload();
      /* const elements = document.querySelectorAll("[class*=dots-]");
      elements.forEach((element) => {
        element.classList.add("faded");
      });
      document.getElementById("dice").classList.add("dice"); */
    }, 100);

    // reset game
    console.log("resetting game....");
    currentGoal = 1;
    throws = 0;
  }
});
