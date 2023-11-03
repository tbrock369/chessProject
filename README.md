# Project Name:
chessProject
# Project Description: 
This is a personal project I created to create a website to play chess using HTML, CSS, and JavaScript. 
# Features this project currently has:
*	Design elements including the shape of each piece and the colors of the pieces, squares, and background
*	Each piece can move by first clicking on the piece you would like to move and then clicking on a square it is allowed to move to
*	The squares a piece can move to are highlighted when this piece is clicked on and it is that player’s turn. The squares a piece can move to are determined by that piece’s movement logic and if a move will leave their king in check.
* To determine if a move will leave their king in check, I would first make the move, then see for each of the opponent’s pieces if they have a move that can attack my king, and then undo the move.
*	One piece is highlighted at a time and can be unhighlighted. Only the piece that is highlighted can be moved
*	Whose turn it is switches after each move
*	The board rotates after each move
*	Pawns can be promoted to either knights, bishops, rooks, or queens when they reach the end of the board.
*	Kings can castle when allowed
*	Pawns can take other pawns through en passant
*	Calculating check at the end of each move
*	Calculating checkmate and stalemate/draw at the end of each move. This is done by checking if you have any legal moves and if you are in check.
*	Each piece and square is its own object.
# Features that I may like to add:
*	Being able to undo a move
*	Calculating draws based on which pieces are left on the board. For example, if the only pieces left on the board are the two kings, this should be a draw
*	Other draws related to repeated board positions and the lack of pawn pushes
*	Displaying which pieces have been taken as information to the side or above/below the board
*	Making the locations of the squares and pieces more adaptable depending on the size of the screen.
*	A way to invite others to play against you from their own computer.
# References: 
I used the HTML, CSS, and JavaScript tutorials from w3schools for reference as this was my first major project using these languages.  
*	https://www.w3schools.com/html/default.asp 
*	https://www.w3schools.com/css/default.asp 
*	https://www.w3schools.com/js/default.asp
