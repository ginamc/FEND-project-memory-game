// Global Variables
var allCards = document.querySelectorAll('.card'); // calling all the cards
var openCards = []; // keeping track of open cards

// A list that holds all the cards

// listening for a click
allCards.forEach(function(card) {
    // pass all cards through a function that allows for clicking and flipping

    card.addEventListener('click', function(e) { //'e' is an anonymous function name, was in reference to console.log that's no longer here
        openCards.push(card);
        card.classList.add('open', 'show'); // flip and show card symbol on click

        if (openCards.length == 2) { // limit openCards to 2 cards
            setTimeout(function() { // set reset delay
                openCards.forEach(function(card) {
                    card.classList.remove('open', 'show'); //hide card
                });

                openCards = []; //resets number of 'open cards' on the board to zero
            }, 1000);
        }

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