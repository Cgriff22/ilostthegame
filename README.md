Fun little project for my friends. 

Ultimate goal: site that allows friends to join and track when they 'lose the game'. Users will login and log every time they lose the game. Will include time logs
of loss instances, as well as leaderboards (loserboards) for how many times indivuals have lost the game.

You lose the game by thinking about the game. There is no way to win the game unless you forget about the game entirely for the rest of your life.
This game is probably the only case on earth in which dementia is a valuable trait. 

May 27, 2025 17:46 est:
The current state of the game is as follows: I have created a database using sqlalchemy and sqlite that tracks user accounts. Each row in the database 
has 3 columns: username, password (hashed using bcrypt) and a value. The value is currently non-functional and starts as an integer 1. 
We do not allow users to start at 0 because, by the very nature of the game, creating an account forces the user to lose 
the game. The value row will eventually increment by 1 every time a user logs in and presses the 'I lost the game' button. The web page is very rudimentary: 
simple html, css, JS that displays a place to add new accounts and another place to 'login' and verify an existing account and a table displaying the database.
This table will eventually be a leaderboard.

May 27, 2025 22:49
Implemented token authorization using PyJWT. Users may now log in using their username and password and press the 'I lost the game' button to update their 
loss value in the database. 
To Do: create a better UI/UX, Implement Calendar, create proper login page. 

UPDATE: May 27, 2025 23:14 
Added logout functionality. TODO: create better UI/UX, implement calendar, create separate login page.
