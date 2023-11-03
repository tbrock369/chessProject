class King extends Piece
{
	constructor(pieceId)
	{
		super(pieceId);
	}
	createPiece()
	{
		super.createPiece();
		document.getElementById(this.pieceId).getContext("2d").lineWidth = 5; //4;
		document.getElementById(this.pieceId).getContext("2d").beginPath(); 
		document.getElementById(this.pieceId).getContext("2d").moveTo(5, 45); 
		document.getElementById(this.pieceId).getContext("2d").lineTo(35, 45); 

		document.getElementById(this.pieceId).getContext("2d").lineTo(25, 19);
		document.getElementById(this.pieceId).getContext("2d").lineTo(30, 19);
		document.getElementById(this.pieceId).getContext("2d").lineTo(32, 16);
		//begin cross
		document.getElementById(this.pieceId).getContext("2d").lineTo(22, 14);
		document.getElementById(this.pieceId).getContext("2d").lineTo(22, 11);
		document.getElementById(this.pieceId).getContext("2d").lineTo(25, 11);
		document.getElementById(this.pieceId).getContext("2d").lineTo(25, 8);
		document.getElementById(this.pieceId).getContext("2d").lineTo(22, 8);
		document.getElementById(this.pieceId).getContext("2d").lineTo(22, 5);
		
		document.getElementById(this.pieceId).getContext("2d").lineTo(18, 5);
		document.getElementById(this.pieceId).getContext("2d").lineTo(18, 8);
		document.getElementById(this.pieceId).getContext("2d").lineTo(15, 8);
		document.getElementById(this.pieceId).getContext("2d").lineTo(15, 11);
		document.getElementById(this.pieceId).getContext("2d").lineTo(18, 11);
		document.getElementById(this.pieceId).getContext("2d").lineTo(18, 14);
		//end cross
		document.getElementById(this.pieceId).getContext("2d").lineTo(8, 16);
		document.getElementById(this.pieceId).getContext("2d").lineTo(10, 19);
		document.getElementById(this.pieceId).getContext("2d").lineTo(15, 19);
		
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
		//calculating up move
		if (this.yCoordinate + 1 <= 7 && squareObjects[this.xCoordinate][this.yCoordinate + 1].getOccupyingPieceId().substr(0, 5) != this.pieceColor)
		{
			squareObjects[this.xCoordinate][this.yCoordinate + 1].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
		}
		
		//calculating right move
		if (this.xCoordinate + 1 <= 7 && squareObjects[this.xCoordinate + 1][this.yCoordinate].getOccupyingPieceId().substr(0, 5) != this.pieceColor)
		{
			squareObjects[this.xCoordinate + 1][this.yCoordinate].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
		}
		
		//calculating down move
		if (this.yCoordinate - 1 >= 0 && squareObjects[this.xCoordinate][this.yCoordinate - 1].getOccupyingPieceId().substr(0, 5) != this.pieceColor)
		{
			squareObjects[this.xCoordinate][this.yCoordinate - 1].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
		}
		
		//calculating left move
		if (this.xCoordinate - 1 >= 0 && squareObjects[this.xCoordinate - 1][this.yCoordinate].getOccupyingPieceId().substr(0, 5) != this.pieceColor)
		{
			squareObjects[this.xCoordinate - 1][this.yCoordinate].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
		}
		
		//calculating up-left move
		if (this.xCoordinate - 1 >= 0 && this.yCoordinate + 1 <= 7 && squareObjects[this.xCoordinate - 1][this.yCoordinate + 1].getOccupyingPieceId().substr(0, 5) != this.pieceColor)
		{
			squareObjects[this.xCoordinate - 1][this.yCoordinate + 1].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
		}
		
		//calculating up-right move
		if (this.xCoordinate + 1 <= 7 && this.yCoordinate + 1 <= 7 && squareObjects[this.xCoordinate + 1][this.yCoordinate + 1].getOccupyingPieceId().substr(0, 5) != this.pieceColor)
		{
			squareObjects[this.xCoordinate + 1][this.yCoordinate + 1].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
		}
		
		//calculating down-right move
		if (this.xCoordinate + 1 <= 7 && this.yCoordinate - 1 >= 0 && squareObjects[this.xCoordinate + 1][this.yCoordinate - 1].getOccupyingPieceId().substr(0, 5) != this.pieceColor)
		{
			squareObjects[this.xCoordinate + 1][this.yCoordinate - 1].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
		}
		
		//calculating down-left move
		if (this.xCoordinate - 1 >= 0 && this.yCoordinate - 1 >= 0 && squareObjects[this.xCoordinate - 1][this.yCoordinate - 1].getOccupyingPieceId().substr(0, 5) != this.pieceColor)
		{
			squareObjects[this.xCoordinate - 1][this.yCoordinate - 1].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
		}
		
		//calculating left castle (this also requires the king to not be in check)
		//if (this.hasMoved == false && squareObjects[this.xCoordinate - 4][this.yCoordinate].getPieceObjects()[squareObjects[this.xCoordinate - 4][this.yCoordinate].getOccupyingPieceId()].getHasMoved() == false && squareObjects[this.xCoordinate - 3][this.yCoordinate].getOccupyingPieceId() == "none" && squareObjects[this.xCoordinate - 2][this.yCoordinate].getOccupyingPieceId() == "none" && squareObjects[this.xCoordinate - 1][this.yCoordinate].getOccupyingPieceId() == "none")
		if (this.hasMoved == false && squareObjects[this.xCoordinate - 4][this.yCoordinate].getOccupyingPieceId() != "none" && pieceObjects[squareObjects[this.xCoordinate - 4][this.yCoordinate].getOccupyingPieceId()].getHasMoved() == false && squareObjects[this.xCoordinate - 3][this.yCoordinate].getOccupyingPieceId() == "none" && squareObjects[this.xCoordinate - 2][this.yCoordinate].getOccupyingPieceId() == "none" && squareObjects[this.xCoordinate - 1][this.yCoordinate].getOccupyingPieceId() == "none")
		{
			if (this.pieceId.substr(0, 5) == "white" && whiteKingInCheck == false)
			{
				squareObjects[this.xCoordinate - 2][this.yCoordinate].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
			}
			if (this.pieceId.substr(0, 5) == "black" && blackKingInCheck == false)
			{
				squareObjects[this.xCoordinate - 2][this.yCoordinate].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
			}
		}
		
		//calculating right castle (this also requires the king to not be in check)
		//if (this.hasMoved == false && squareObjects[this.xCoordinate + 3][this.yCoordinate].getPieceObjects()[squareObjects[this.xCoordinate + 3][this.yCoordinate].getOccupyingPieceId()].getHasMoved() == false && squareObjects[this.xCoordinate + 2][this.yCoordinate].getOccupyingPieceId() == "none" && squareObjects[this.xCoordinate + 1][this.yCoordinate].getOccupyingPieceId() == "none")
		if (this.hasMoved == false && squareObjects[this.xCoordinate + 3][this.yCoordinate].getOccupyingPieceId() != "none" && pieceObjects[squareObjects[this.xCoordinate + 3][this.yCoordinate].getOccupyingPieceId()].getHasMoved() == false && squareObjects[this.xCoordinate + 2][this.yCoordinate].getOccupyingPieceId() == "none" && squareObjects[this.xCoordinate + 1][this.yCoordinate].getOccupyingPieceId() == "none")
		{
			if (this.pieceId.substr(0, 5) == "white" && whiteKingInCheck == false)
			{
				squareObjects[this.xCoordinate + 2][this.yCoordinate].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
			}
			if (this.pieceId.substr(0, 5) == "black" && blackKingInCheck == false)
			{
				squareObjects[this.xCoordinate + 2][this.yCoordinate].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
			}
		}
	}
}