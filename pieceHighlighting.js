let idLastPiece = "no last piece";
let fillStyleLastPiece = "no last piece";
function pieceHighlighting(thisId)
{
	//Case 1: This click of a piece occured when none of the pieces on the board were highlighted
		//The piece clicked becomes highlighted and its original color is saved
		
	//Case 2: This click of a piece occured on a piece that was already highlighted
		//The piece clicked is returned to its original color, leaving no highlighted pieces on the board
		
	//Case 3: This click of a piece occured on a piece that is different from the one that is already highlighted
		//The piece clicked is highlighted and its original color is saved
		//The piece that was highlighted is returned to its original color
	
	if (idLastPiece == "no last piece") //Case 1
	{
		fillStyleLastPiece = document.getElementById(thisId).getContext("2d").fillStyle;
		idLastPiece = thisId;
		
		document.getElementById(thisId).getContext("2d").fillStyle = "yellow";
		document.getElementById(thisId).getContext("2d").fill();
	}
	else if (idLastPiece == thisId) //Case 2
	{
		document.getElementById(thisId).getContext("2d").fillStyle = fillStyleLastPiece;
		document.getElementById(thisId).getContext("2d").fill();
		
		idLastPiece = "no last piece";
		fillStyleLastPiece = "no last piece";
	}
	else //Case 3
	{
		document.getElementById(idLastPiece).getContext("2d").fillStyle = fillStyleLastPiece;
		document.getElementById(idLastPiece).getContext("2d").fill();
		
		fillStyleLastPiece = document.getElementById(thisId).getContext("2d").fillStyle;
		idLastPiece = thisId;
		
		document.getElementById(thisId).getContext("2d").fillStyle = "yellow";
		document.getElementById(thisId).getContext("2d").fill();
	}
}