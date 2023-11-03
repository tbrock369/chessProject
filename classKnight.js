class Knight extends Piece
{
	constructor(pieceId)
	{
		super(pieceId);
	}
	createPiece()
	{
		super.createPiece();
		document.getElementById(this.pieceId).getContext("2d").lineWidth = 5; 
		document.getElementById(this.pieceId).getContext("2d").beginPath(); 
		document.getElementById(this.pieceId).getContext("2d").moveTo(5, 45);
		document.getElementById(this.pieceId).getContext("2d").lineTo(35, 45); 
		document.getElementById(this.pieceId).getContext("2d").lineTo(25, 35); 
		document.getElementById(this.pieceId).getContext("2d").lineTo(25, 25) 
		document.getElementById(this.pieceId).getContext("2d").lineTo(35, 25);
		document.getElementById(this.pieceId).getContext("2d").lineTo(35, 15);
		document.getElementById(this.pieceId).getContext("2d").lineTo(25, 5);
		document.getElementById(this.pieceId).getContext("2d").lineTo(10, 5); 
		document.getElementById(this.pieceId).getContext("2d").lineTo(5, 10);
		document.getElementById(this.pieceId).getContext("2d").lineTo(10, 35); 
		document.getElementById(this.pieceId).getContext("2d").lineTo(5, 45); 
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
		//calculating up-up-left move
		if (this.xCoordinate - 1 >=  0 && this.yCoordinate + 2 <= 7 && squareObjects[this.xCoordinate - 1][this.yCoordinate + 2].getOccupyingPieceId().substr(0, 5) != this.pieceColor)
		{
			squareObjects[this.xCoordinate - 1][this.yCoordinate + 2].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
		}
		//calculating up-up-right move
		if (this.xCoordinate + 1 <= 7 && this.yCoordinate + 2 <= 7 && squareObjects[this.xCoordinate + 1][this.yCoordinate + 2].getOccupyingPieceId().substr(0, 5) != this.pieceColor)
		{
			squareObjects[this.xCoordinate + 1][this.yCoordinate + 2].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
		}
		//calculating up-right-right move
		if (this.xCoordinate + 2 <= 7 && this.yCoordinate + 1 <= 7 && squareObjects[this.xCoordinate + 2][this.yCoordinate + 1].getOccupyingPieceId().substr(0, 5) != this.pieceColor)
		{
			squareObjects[this.xCoordinate + 2][this.yCoordinate + 1].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
		}
		
		//calculating down-right-right move
		if (this.xCoordinate + 2 <= 7 && this.yCoordinate -1 >=  0 && squareObjects[this.xCoordinate + 2][this.yCoordinate - 1].getOccupyingPieceId().substr(0, 5) != this.pieceColor)
		{
			squareObjects[this.xCoordinate + 2][this.yCoordinate - 1].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
		}
		
		//calculating down-down-right move
		if (this.xCoordinate + 1 <= 7 && this.yCoordinate - 2 >=  0 && squareObjects[this.xCoordinate + 1][this.yCoordinate - 2].getOccupyingPieceId().substr(0, 5) != this.pieceColor)
		{
			squareObjects[this.xCoordinate + 1][this.yCoordinate - 2].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
		}
		
		//calculating down-down-left move
		if (this.xCoordinate - 1 >=  0 && this.yCoordinate - 2 >=  0 && squareObjects[this.xCoordinate - 1][this.yCoordinate - 2].getOccupyingPieceId().substr(0, 5) != this.pieceColor)
		{
			squareObjects[this.xCoordinate - 1][this.yCoordinate - 2].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
		}
		
		//calculating down-left-left move
		if (this.xCoordinate - 2 >=  0 && this.yCoordinate - 1 >=  0 && squareObjects[this.xCoordinate - 2][this.yCoordinate - 1].getOccupyingPieceId().substr(0, 5) != this.pieceColor)
		{
			squareObjects[this.xCoordinate - 2][this.yCoordinate - 1].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
		}
		
		//calculating up-left-left move
		if (this.xCoordinate - 2 >=  0 && this.yCoordinate + 1 <= 7 && squareObjects[this.xCoordinate - 2][this.yCoordinate + 1].getOccupyingPieceId().substr(0, 5) != this.pieceColor)
		{
			squareObjects[this.xCoordinate - 2][this.yCoordinate + 1].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
		}
	}
}