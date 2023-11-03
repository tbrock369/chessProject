class Pawn extends Piece
{
	constructor(pieceId)
	{
		super(pieceId);
	}
	wasTakenByEnPassant()
	{
		document.getElementById(this.pieceId).style.display = "none"; //this removes the piece from the board
		squareObjects[this.xCoordinate][this.yCoordinate].setOccupyingPieceId("none");//.occupyingPieceId = "none";
	}
	createPiece()
	{
		super.createPiece();
		document.getElementById(this.pieceId).getContext("2d").lineWidth = 5; //4;
		document.getElementById(this.pieceId).getContext("2d").beginPath(); 
		document.getElementById(this.pieceId).getContext("2d").moveTo(5, 45); //ctxPawn.moveTo(0,50);
		document.getElementById(this.pieceId).getContext("2d").lineTo(35, 45); //ctxPawn.lineTo(40, 50);
		document.getElementById(this.pieceId).getContext("2d").lineTo(30, 20);
		document.getElementById(this.pieceId).getContext("2d").lineTo(35, 10); //ctxPawn.lineTo(40, 10);
		document.getElementById(this.pieceId).getContext("2d").lineTo(30, 5); //ctxPawn.lineTo(30, 0);
		document.getElementById(this.pieceId).getContext("2d").lineTo(10, 5); //ctxPawn.lineTo(10, 0);
		document.getElementById(this.pieceId).getContext("2d").lineTo(5, 10); //ctxPawn.lineTo(0, 10);
		document.getElementById(this.pieceId).getContext("2d").lineTo(10, 20);
		document.getElementById(this.pieceId).getContext("2d").lineTo(5, 45); //ctxPawn.lineTo(0,50);
		document.getElementById(this.pieceId).getContext("2d").stroke();
		document.getElementById(this.pieceId).getContext("2d").fill();
	}
	pieceSelected()
	{
		if (turnToMove == this.pieceColor) //if for example it is white's turn and a black piece is selected, nothing will happen.
		{
			super.pieceSelected();
			if (idLastPiece != "no last piece") //if the same piece is clicked twice, this piece will not show its possible moves or be able to move until it is clicked again
			{
				this.calculateMoves(false, false);
			}
		}
	}
	calculateMoves(determiningCheck, determiningCheckmateOrDraw)
	{
		if (this.pieceColor == "white")
		{
			if (squareObjects[this.xCoordinate][this.yCoordinate + 1].getOccupyingPieceId() == "none") //standard move up one space
			{
				squareObjects[this.xCoordinate][this.yCoordinate + 1].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
			}
			if (this.hasMoved == false && squareObjects[this.xCoordinate][this.yCoordinate + 1].getOccupyingPieceId() == "none" && squareObjects[this.xCoordinate][this.yCoordinate + 2].getOccupyingPieceId() == "none") //move up two spaces on the first move
			{
				squareObjects[this.xCoordinate][this.yCoordinate + 2].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
			}
			if (this.xCoordinate != 0 && squareObjects[this.xCoordinate - 1][this.yCoordinate + 1].getOccupyingPieceId().substr(0, 5) == "black") //attack a piece left diagnoally
			{
				squareObjects[this.xCoordinate - 1][this.yCoordinate + 1].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
			}
			if (this.xCoordinate != 7 && squareObjects[this.xCoordinate + 1][this.yCoordinate + 1].getOccupyingPieceId().substr(0, 5) == "black") //attack a piece right diagnoally
			{
				squareObjects[this.xCoordinate + 1][this.yCoordinate + 1].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
			}
			if (this.xCoordinate != 0 && squareObjects[this.xCoordinate - 1][this.yCoordinate].getOccupyingPieceId() == blackEnPassant && blackEnPassant != "none") //left en passant
			{
				squareObjects[this.xCoordinate - 1][this.yCoordinate + 1].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
			}
			if (this.xCoordinate != 7 && squareObjects[this.xCoordinate + 1][this.yCoordinate].getOccupyingPieceId() == blackEnPassant && blackEnPassant != "none") //right en passant
			{
				squareObjects[this.xCoordinate + 1][this.yCoordinate + 1].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
			}
		}
		else
		{			
			if (squareObjects[this.xCoordinate][this.yCoordinate - 1].getOccupyingPieceId() == "none") //standard move up one space
			{
				squareObjects[this.xCoordinate][this.yCoordinate - 1].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
			}
			if (this.hasMoved == false && squareObjects[this.xCoordinate][this.yCoordinate - 1].getOccupyingPieceId() == "none" && squareObjects[this.xCoordinate][this.yCoordinate - 2].getOccupyingPieceId() == "none") //move up two spaces on the first move
			{
				squareObjects[this.xCoordinate][this.yCoordinate - 2].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
			}
			if (this.xCoordinate != 0 && squareObjects[this.xCoordinate - 1][this.yCoordinate - 1].getOccupyingPieceId().substr(0, 5) == "white") //attack a piece left diagnoally
			{
				squareObjects[this.xCoordinate - 1][this.yCoordinate - 1].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
			}
			if (this.xCoordinate != 7 && squareObjects[this.xCoordinate + 1][this.yCoordinate - 1].getOccupyingPieceId().substr(0, 5) == "white") //attack a piece right diagnoally
			{
				squareObjects[this.xCoordinate + 1][this.yCoordinate - 1].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
			}
			if (this.xCoordinate != 0 && squareObjects[this.xCoordinate - 1][this.yCoordinate].getOccupyingPieceId() == whiteEnPassant && whiteEnPassant != "none") //left en passant
			{
				squareObjects[this.xCoordinate - 1][this.yCoordinate - 1].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
			}
			if (this.xCoordinate != 7 && squareObjects[this.xCoordinate + 1][this.yCoordinate].getOccupyingPieceId() == whiteEnPassant && whiteEnPassant != "none") //right en passant
			{
				squareObjects[this.xCoordinate + 1][this.yCoordinate - 1].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
			}
		}
	}
}