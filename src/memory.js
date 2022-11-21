class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    // add the rest of the class properties here
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    // ... write your code here
    // fisher-yates algorith
    // from right to left, randomly switch places of two cards untill i = 0
    // the demande is not clear, in the test runner, it uses no arguments to shuffle the
    // game cards, but the  
    if(this.cards === undefined) return undefined
    for (let i = this.cards.length - 1; i > 0; i--) {
        const targetIndex = Math.floor(Math.random() * (i + 1));
        const currentCard = this.cards[i];
        this.cards[i] = this.cards[targetIndex];
        this.cards[targetIndex] = currentCard;
      }
  }

  checkIfPair(card1, card2) {
    this.pairsClicked++;
    if (card1 === card2) this.pairsGuessed++;
    return card1 === card2;
  }

  checkIfFinished() {
    if (this.pairsGuessed === this.cards.length / 2) return true;
    return false;
  }
}
