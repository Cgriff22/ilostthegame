Fun little project for my friends. 

Ultimate goal: site that allows friends to join and track when they 'lose the game'. Users will login and log every time they lose the game. Will include time logs
of loss instances, as well as leaderboards (loserboards) for how many times indivuals have lost the game.

You lose the game by thinking about the game. There is no way to win the game unless you forget about the game entirely for the rest of your life.
This game is probably the only case on earth in which dementia is actually a valuable trait. 

May 27, 2025 17:46 est:
The current state of the game is as follows: I have created a database using sqlalchemy and sqlite that tracks user accounts. Each row in the database 
has 3 columns: username,password (hashed using bcrypt) and a value. The value is currently non-functional and starts as an integer 1. 
We do not allow users to start at 0 because by the very nature of the game, creating an account forces the user to think about the game and therefore lose 
the game. The value row will eventually increment by 1 every time a user logs in and presses the 'I lost the game' button. The web page is very rudimentary: 
simple html, css, JS that displays a place to add new accounts and another place to 'login' and verify an existing account. 
