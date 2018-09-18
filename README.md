# Memory Game Project

Welcome to the Memory Game, a browser-based game that'll test your memory function in the most elementary way possible. Have fun. Beat the clock, keep all your stars, and more importantly, have fun. :+1:

_This game was made as a project requirement for [Udacity's Front-End Web Development Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001)._

## Table of Contents

* [Game Play](#play)
* [Dependencies](#dependencies)
* [Contributing](#contributing)
* [Resrouces](#resources)

## Play
Download the files into a local directory and open the `index.html` in a web browser of your choice and you'll see a 4x4 grid of gray 'cards.' Everyone starts with **3 stars**. The more moves you take to solve the game, the more stars you lose until you're left with zero.

Clicking on the first pair begins the clock. Each pair clicked counts as a move. If the cards you click _do not_ match, the cards will flip back over and you can choose another pair. If the cards _do_ match, they'll turn green and stay revealed.

After **10 moves** you lose a star. After **20 moves** you lose another star.

Once all cards are matched, a window will pop open showering you with compliments and your stats for Time, Stars, and number of Moves.
At this point, you can either hit `REPLAY` and beat your score, or hit `CANCEL` to close the pop-up window and look at the beautiful matched cards. You can also hit the `X` in the upper right of the pop-up window (not your browser window, unless you're done with the Internet by then). If you realize you want to play the game again after hitting `CANCEL`, you can click on the `CIRCULAR ARROW` :arrows_counterclockwise: on the upper right of the play area to reset the grid.


## Dependencies
- Starter code was provided by Udacity [here](https://github.com/udacity/fend-project-memory-game).
- Google Fonts
- Stack Overflow to shuffle list of cards.

## Contributing

This repository contained the [starter code](https://github.com/udacity/fend-project-memory-game) for _all_ Udacity students. As this is part of a larger course structure, contributions will be closed.

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).

## Resources
This project tested skills in HTML, CSS, and JavaScript. 

1. To get started on the project, I referenced a video walkthru by [Mike Wales](https://www.youtube.com/watch?v=x47oLiTpIVk) to get an understanding of how someone else might approach the project. Afterwards, I also referenced a video walkthru by [Ryan Waite](https://www.youtube.com/watch?v=oECVwum-7Zc).

2. I also referenced this eight-part, written walkthru by [Matthew Cranford](https://matthewcranford.com/memory-game-walkthrough-part-1-setup/), which provided the basis for understanding how to write functions and how to call those functions within an event listener.
   - Cranford's walkthru was particularly helpful in its breakdown, allowing you to experiment and break the code to see in real time what the functions were doing (or not doing).

3. For additional understanding and syntax, I referenced MDN documentation, particularly on event listeners and certain functions (e.g. `event.target`, etc. I also referenced this documentation to figure out how to create a mouse-over effect when the user moves their mouse pointer over teh `X` in the message box that opens upon winning the game.
