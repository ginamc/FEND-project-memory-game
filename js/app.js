// Global Variables


// A list that holds all the cards

// listening for a click
var allCards = document.querySelectorAll('.card'); // calling all the cards

allCards.forEach(function(card) { // pass all cards through a function that allows for clicking and flipping
    card.addEventListener('click', function(e) {
        card.classList.add('open', 'show'); // flip and show card symbol on click
    });
});





// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length,
        temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}