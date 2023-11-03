//The square that each king is on will be held in these variabels to help with determining if a king is in checked
let whiteKingSquare = "squareE1";
let blackKingSquare = "squareE8";

//These variables hold whether or not each player is in check
let whiteKingInCheck = false;
let blackKingInCheck = false;

//These variables determine if each player has a move to make. If they don't have any moves to make, than either it is check mate if they are in check, or a draw if they are not in check
let whiteHasAMove = true;
let blackHasAMove = true;

//This function is called after a possible move is determined. If this move leads to themselves being in check, this move won't actually be a possible move.
//For this function, I may need to temporarily set the comingPieceId as the occupyingPieceId, then check if this leads to a check, then set the occupyingPieceId back to what it was
function inCheckAfterYourOwnMove(squareId, comingPieceId)
{
	let inCheck = false; //if for example a white piece moving leads to the white king being in check, that white piece can't move that way
	
	let kingInCheckPlaceHolder, originalWhiteEnPassantSquare, originalBlackEnPassantSquare;

	//save if the king is already in check
	if (turnToMove == "white") 
	{	
		kingInCheckPlaceHolder = whiteKingInCheck;
	}
	else
	{
		kingInCheckPlaceHolder = blackKingInCheck;
	}
	
	//save original versions of variables before the move is made
	let originalWhiteKingSquare = whiteKingSquare;
	let originalBlackKingSquare = blackKingSquare;
	let originalSquareObjectOfComingPiece = squareObjects[pieceObjects[comingPieceId].getXCoordinate()][pieceObjects[comingPieceId].getYCoordinate()];
	let originalOccupyingPieceId = squareObjectsBySquareId[squareId].getOccupyingPieceId();
	let originalComingPieceId = comingPieceId;
	
	if (whiteEnPassant == "none")
	{
		originalWhiteEnPassantSquare = "none";
	}
	else
	{
		originalWhiteEnPassantSquare = squareObjects[pieceObjects[whiteEnPassant].getXCoordinate()][pieceObjects[whiteEnPassant].getYCoordinate()];
	}
	if (blackEnPassant == "none")
	{
		originalBlackEnPassantSquare = "none";
	}
	else
	{
		originalBlackEnPassantSquare = squareObjects[pieceObjects[blackEnPassant].getXCoordinate()][pieceObjects[blackEnPassant].getYCoordinate()];
	}
	
	//set this piece as the comingPieceId for the square in question, then make the move
	squareObjectsBySquareId[squareId].setComingPieceId(comingPieceId);
	squareObjectsBySquareId[squareId].testAMove();
	
	//Store the result of whether this move would lead to a check
	if (turnToMove == "white") 
	{	
		isWhiteKingInCheck();
		inCheck = whiteKingInCheck;
	}
	else
	{
		isBlackKingInCheck();
		inCheck = blackKingInCheck;
	}
	
	//unmake the move, then set the comingPieceId of this square back to "none". If it turns out that this move is valid, it will be set back to comingPieceId eventually
	squareObjectsBySquareId[squareId].revertTestedMove(originalWhiteKingSquare, originalBlackKingSquare, originalSquareObjectOfComingPiece, originalOccupyingPieceId, originalComingPieceId, originalWhiteEnPassantSquare, originalBlackEnPassantSquare);
	squareObjectsBySquareId[squareId].setComingPieceId("none");
	
	//reset whiteKingInCheck or blackKingInCheck back to what they were before inCheckAfterYourOwnMove(squareId, comingPieceId) was called
	if (turnToMove == "white") 
	{	
		whiteKingInCheck = kingInCheckPlaceHolder;
	}
	else
	{
		blackKingInCheck = kingInCheckPlaceHolder;
	}

	return inCheck;
}



//This function should be called every time turnToMove switches between white and black, checking for if the color whose turn it is now is in check.
//for example. Say we are seeing if the white king is in check. Then, for each square on the board, if that square is occupyied by a black piece, we will check if that black piece has a move that 
//can attack the square the white king is on. If there is a black piece that can target the square the white king is on, the white king is in check. 
function isWhiteKingInCheck()
{	
	whiteKingInCheck = false;//presume the king is not in check until proven otherwise
	
	for (let i = 0; i < 8; i++)
	{
		for (let j = 0; j < 8; j++)
		{
			if (squareObjects[i][j].getOccupyingPieceId().substr(0, 5) == "black")//turnToMove //&& piecesObject[squareObjects[i][j].getOccupyingPiece()].calculateChecksKing() == true)
			{
				pieceObjects[squareObjects[i][j].getOccupyingPieceId()].calculateMoves(true, false);
			}
		}
	}
}

function isBlackKingInCheck()
{	
	blackKingInCheck = false;//presume the king is not in check until proven otherwise
	
	for (let i = 0; i < 8; i++)
	{
		for (let j = 0; j < 8; j++)
		{
			if (squareObjects[i][j].getOccupyingPieceId().substr(0, 5) == "white")//turnToMove //&& piecesObject[squareObjects[i][j].getOccupyingPiece()].calculateChecksKing() == true)
			{
				pieceObjects[squareObjects[i][j].getOccupyingPieceId()].calculateMoves(true, false);
			}
		}
	}
}


//This function tests for if one side has no possible moves. If this is the case, then either this is check mate or a draw depending on if they were in check
function checkmateOrDraw()
{	
	if (turnToMove == "white")
	{
		whiteHasAMove = false;
		for (let i = 0; i < 8; i++)
		{
			for (let j = 0; j < 8; j++)
			{
				if (squareObjects[i][j].getOccupyingPieceId().substr(0, 5) == "white")
				{
					pieceObjects[squareObjects[i][j].getOccupyingPieceId()].calculateMoves(false, true);
				}
			}
		}
		
		//look for checkmate
		if (whiteHasAMove == false)
		{
			turnToMove = "none";
			if (whiteKingInCheck == true)
			{
				//white is in checkmate, so black wins.
				document.getElementById("checkmateOrStalemate").innerHTML = "Checkmate: black wins";	
				document.getElementById("gameInformation").innerHTML = "";
			}
			else
			{
				//This is a draw
				document.getElementById("checkmateOrStalemate").innerHTML = "Stalemate: no one wins";
				document.getElementById("gameInformation").innerHTML = "";
			}
		}
	}
	else
	{
		blackHasAMove = false;
		for (let i = 0; i < 8; i++)
		{
			for (let j = 0; j < 8; j++)
			{
				if (squareObjects[i][j].getOccupyingPieceId().substr(0, 5) == "black")
				{
					pieceObjects[squareObjects[i][j].getOccupyingPieceId()].calculateMoves(false, true);
				}
			}
		}
		
		//look for checkmate
		if (blackHasAMove == false)
		{
			turnToMove = "none";
			if (blackKingInCheck == true)
			{
				//black is in checkmate, so white wins.	
				document.getElementById("checkmateOrStalemate").innerHTML = "Checkmate: white wins";	
				document.getElementById("gameInformation").innerHTML = "";				
			}
			else
			{
				//This is a stalemate
				document.getElementById("checkmateOrStalemate").innerHTML = "Stalemate: no one wins";
				document.getElementById("gameInformation").innerHTML = "";
			}
		}
	}
}