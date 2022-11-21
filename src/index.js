const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
];

const memoryGame = new MemoryGame(cards);
let isPair = false;

window.addEventListener("load", (event) => {
  let html = "";
  memoryGame.shuffleCards();
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory-board").innerHTML = html;
  let checkPair = [];
  // Bind the click event of each element to a function
  const cardsElem = document.querySelectorAll(".card");
  const cardsElemArray = [...cardsElem];
  cardsElem.forEach((card) => {
    card.addEventListener("click", () => {
      // the card here is a HTMLElement
      //clean last check if lastcheck is false
      if (checkPair.length == 2) {
        if (!isPair) {
          cardsElem.item(checkPair[0]).classList.remove("turned");
          cardsElem.item(checkPair[1]).classList.remove("turned");
        }
        checkPair = [];
      }
      card.classList.add("turned");
      checkPair.push(cardsElemArray.indexOf(card));
      if (checkPair.length == 2) {
        document.getElementById("pairs-clicked").innerHTML = memoryGame.pairsClicked
        isPair = memoryGame.checkIfPair(
          memoryGame.cards[checkPair[0]].name,
          memoryGame.cards[checkPair[1]].name
        );
        if (isPair) {
          document.getElementById("pairs-guessed").innerHTML = memoryGame.pairsGuessed
          if(memoryGame.checkIfFinished()) winGame()
        }
      }
    });
  });
});


function winGame(){
  const winGame = document.createElement("h2")
  winGame.innerHTML = `You finised the game with ${memoryGame.pairsClicked} moves!`
  document.getElementById("title").insertBefore(winGame, document.getElementById('restart-btn'))
}

function refreshPage(){
  window.location.reload()
}