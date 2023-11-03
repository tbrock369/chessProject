let promotedPawn = "none";
let promotedPawnSquare = "none";
//I plan on creating a canvas for each promotion possiblity for each top and bottom square, so 4 * 8 * 2 = 64 new pieces. They will all be set to display = "none" until they replace a pawn
function pawnPromotion()
{
	if (document.getElementById("radioPawnToKnight").checked)
	{
		//get rid of the pawn that was promoted
		document.getElementById(promotedPawn).style.display = "none";
		
		//show the chosen promotion at the correct square
		if (promotedPawnSquare == "squareA1")
		{
			document.getElementById("blackKnightA1").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("blackKnightA1");
		}
		else if (promotedPawnSquare == "squareB1")
		{
			document.getElementById("blackKnightB1").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("blackKnightB1");
		}
		else if (promotedPawnSquare == "squareC1")
		{
			document.getElementById("blackKnightC1").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("blackKnightC1");
		}
		else if (promotedPawnSquare == "squareD1")
		{
			document.getElementById("blackKnightD1").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("blackKnightD1");
		}
		else if (promotedPawnSquare == "squareE1")
		{
			document.getElementById("blackKnightE1").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("blackKnightE1");
		}
		else if (promotedPawnSquare == "squareF1")
		{
			document.getElementById("blackKnightF1").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("blackKnightF1");
		}
		else if (promotedPawnSquare == "squareG1")
		{
			document.getElementById("blackKnightG1").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("blackKnightG1");
		}
		else if (promotedPawnSquare == "squareH1")
		{
			document.getElementById("blackKnightH1").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("blackKnightH1");
		}
		else if (promotedPawnSquare == "squareA8")
		{
			document.getElementById("whiteKnightA8").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("whiteKnightA8");
		}
		else if (promotedPawnSquare == "squareB8")
		{
			document.getElementById("whiteKnightB8").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("whiteKnightB8");
		}
		else if (promotedPawnSquare == "squareC8")
		{
			document.getElementById("whiteKnightC8").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("whiteKnightC8");
		}
		else if (promotedPawnSquare == "squareD8")
		{
			document.getElementById("whiteKnightD8").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("whiteKnightD8");
		}
		else if (promotedPawnSquare == "squareE8")
		{
			document.getElementById("whiteKnightE8").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("whiteKnightE8");
		}
		else if (promotedPawnSquare == "squareF8")
		{
			document.getElementById("whiteKnightF8").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("whiteKnightF8");
		}
		else if (promotedPawnSquare == "squareG8")
		{
			document.getElementById("whiteKnightG8").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("whiteKnightG8");
		}
		else if (promotedPawnSquare == "squareH8")
		{
			document.getElementById("whiteKnightH8").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("whiteKnightH8");
		}
		
		//Now that the pawn promotion is finished, the move has ended, and the game can resume
		pawnPromotionFinished();
	}
	if (document.getElementById("radioPawnToBishop").checked)
	{
		//get rid of the pawn that was promoted
		document.getElementById(promotedPawn).style.display = "none";
		
		//show the chosen promotion at the correct square
		if (promotedPawnSquare == "squareA1")
		{
			document.getElementById("blackBishopA1").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("blackBishopA1");
		}
		else if (promotedPawnSquare == "squareB1")
		{
			document.getElementById("blackBishopB1").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("blackBishopB1");
		}
		else if (promotedPawnSquare == "squareC1")
		{
			document.getElementById("blackBishopC1").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("blackBishopC1");
		}
		else if (promotedPawnSquare == "squareD1")
		{
			document.getElementById("blackBishopD1").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("blackBishopD1");
		}
		else if (promotedPawnSquare == "squareE1")
		{
			document.getElementById("blackBishopE1").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("blackBishopE1");
		}
		else if (promotedPawnSquare == "squareF1")
		{
			document.getElementById("blackBishopF1").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("blackBishopF1");
		}
		else if (promotedPawnSquare == "squareG1")
		{
			document.getElementById("blackBishopG1").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("blackBishopG1");
		}
		else if (promotedPawnSquare == "squareH1")
		{
			document.getElementById("blackBishopH1").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("blackBishopH1");
		}
		else if (promotedPawnSquare == "squareA8")
		{
			document.getElementById("whiteBishopA8").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("whiteBishopA8");
		}
		else if (promotedPawnSquare == "squareB8")
		{
			document.getElementById("whiteBishopB8").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("whiteBishopB8");
		}
		else if (promotedPawnSquare == "squareC8")
		{
			document.getElementById("whiteBishopC8").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("whiteBishopC8");
		}
		else if (promotedPawnSquare == "squareD8")
		{
			document.getElementById("whiteBishopD8").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("whiteBishopD8");
		}
		else if (promotedPawnSquare == "squareE8")
		{
			document.getElementById("whiteBishopE8").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("whiteBishopE8");
		}
		else if (promotedPawnSquare == "squareF8")
		{
			document.getElementById("whiteBishopF8").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("whiteBishopF8");
		}
		else if (promotedPawnSquare == "squareG8")
		{
			document.getElementById("whiteBishopG8").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("whiteBishopG8");
		}
		else if (promotedPawnSquare == "squareH8")
		{
			document.getElementById("whiteBishopH8").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("whiteBishopH8");
		}
		
		//Now that the pawn promotion is finished, the move has ended, and the game can resume
		pawnPromotionFinished();
	}
	if (document.getElementById("radioPawnToRook").checked)
	{
		//get rid of the pawn that was promoted
		document.getElementById(promotedPawn).style.display = "none";
		
		//show the chosen promotion at the correct square
		if (promotedPawnSquare == "squareA1")
		{
			document.getElementById("blackRookA1").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("blackRookA1");
		}
		else if (promotedPawnSquare == "squareB1")
		{
			document.getElementById("blackRookB1").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("blackRookB1");
		}
		else if (promotedPawnSquare == "squareC1")
		{
			document.getElementById("blackRookC1").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("blackRookC1");
		}
		else if (promotedPawnSquare == "squareD1")
		{
			document.getElementById("blackRookD1").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("blackRookD1");
		}
		else if (promotedPawnSquare == "squareE1")
		{
			document.getElementById("blackRookE1").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("blackRookE1");
		}
		else if (promotedPawnSquare == "squareF1")
		{
			document.getElementById("blackRookF1").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("blackRookF1");
		}
		else if (promotedPawnSquare == "squareG1")
		{
			document.getElementById("blackRookG1").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("blackRookG1");
		}
		else if (promotedPawnSquare == "squareH1")
		{
			document.getElementById("blackRookH1").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("blackRookH1");
		}
		else if (promotedPawnSquare == "squareA8")
		{
			document.getElementById("whiteRookA8").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("whiteRookA8");
		}
		else if (promotedPawnSquare == "squareB8")
		{
			document.getElementById("whiteRookB8").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("whiteRookB8");
		}
		else if (promotedPawnSquare == "squareC8")
		{
			document.getElementById("whiteRookC8").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("whiteRookC8");
		}
		else if (promotedPawnSquare == "squareD8")
		{
			document.getElementById("whiteRookD8").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("whiteRookD8");
		}
		else if (promotedPawnSquare == "squareE8")
		{
			document.getElementById("whiteRookE8").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("whiteRookE8");
		}
		else if (promotedPawnSquare == "squareF8")
		{
			document.getElementById("whiteRookF8").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("whiteRookF8");
		}
		else if (promotedPawnSquare == "squareG8")
		{
			document.getElementById("whiteRookG8").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("whiteRookG8");
		}
		else if (promotedPawnSquare == "squareH8")
		{
			document.getElementById("whiteRookH8").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("whiteRookH8");
		}
		
		//Now that the pawn promotion is finished, the move has ended, and the game can resume
		pawnPromotionFinished();
	}
	if (document.getElementById("radioPawnToQueen").checked)
	{
		//get rid of the pawn that was promoted
		document.getElementById(promotedPawn).style.display = "none";
		
		//show the chosen promotion at the correct square
		if (promotedPawnSquare == "squareA1")
		{
			document.getElementById("blackQueenA1").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("blackQueenA1");
		}
		else if (promotedPawnSquare == "squareB1")
		{
			document.getElementById("blackQueenB1").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("blackQueenB1");
		}
		else if (promotedPawnSquare == "squareC1")
		{
			document.getElementById("blackQueenC1").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("blackQueenC1");
		}
		else if (promotedPawnSquare == "squareD1")
		{
			document.getElementById("blackQueenD1").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("blackQueenD1");
		}
		else if (promotedPawnSquare == "squareE1")
		{
			document.getElementById("blackQueenE1").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("blackQueenE1");
		}
		else if (promotedPawnSquare == "squareF1")
		{
			document.getElementById("blackQueenF1").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("blackQueenF1");
		}
		else if (promotedPawnSquare == "squareG1")
		{
			document.getElementById("blackQueenG1").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("blackQueenG1");
		}
		else if (promotedPawnSquare == "squareH1")
		{
			document.getElementById("blackQueenH1").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("blackQueenH1");
		}
		else if (promotedPawnSquare == "squareA8")
		{
			document.getElementById("whiteQueenA8").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("whiteQueenA8");
		}
		else if (promotedPawnSquare == "squareB8")
		{
			document.getElementById("whiteQueenB8").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("whiteQueenB8");
		}
		else if (promotedPawnSquare == "squareC8")
		{
			document.getElementById("whiteQueenC8").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("whiteQueenC8");
		}
		else if (promotedPawnSquare == "squareD8")
		{
			document.getElementById("whiteQueenD8").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("whiteQueenD8");
		}
		else if (promotedPawnSquare == "squareE8")
		{
			document.getElementById("whiteQueenE8").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("whiteQueenE8");
		}
		else if (promotedPawnSquare == "squareF8")
		{
			document.getElementById("whiteQueenF8").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("whiteQueenF8");
		}
		else if (promotedPawnSquare == "squareG8")
		{
			document.getElementById("whiteQueenG8").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("whiteQueenG8");
		}
		else if (promotedPawnSquare == "squareH8")
		{
			document.getElementById("whiteQueenH8").style.display = "block";
			squareObjectsBySquareId[promotedPawnSquare].setOccupyingPieceId("whiteQueenH8");
		}
		
		//Now that the pawn promotion is finished, the move has ended, and the game can resume
		pawnPromotionFinished();
	}
}

function pawnPromotionFinished()
{
	//this removes the pawn promotion form from the board
	document.getElementById("formPawnPromotion").style.display = "none";
	
	//Now that the pawn promotion is finished, the next person's turn can begin
	if (promotedPawn.substr(0, 5) == "white")
	{
		turnToMove = "black";
		isBlackKingInCheck();
		whiteKingInCheck = false; //anytime a white piece is moved, white should no longer be in check
	}
	else
	{
		turnToMove = "white";
		isWhiteKingInCheck();
		blackKingInCheck = false; //anytime a black piece is moved, black should no longer be in check
	}
	
	//Now whose turn it is and if anyone is in check should be displayed
	displayTurnToMove();
	
	//Now that the pawn promotion is finished, it should be evaluated if there is a checkmate or stalemate
	checkmateOrDraw();//checkmateOrStalemate();
	
	//Now that the pawn promotion is finished, the board should be rotated
	rotateBoard();
}