class Rook extends Piece
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
		document.getElementById(this.pieceId).getContext("2d").moveTo(5, 45); //ctxPawn.moveTo(0,50);
		document.getElementById(this.pieceId).getContext("2d").lineTo(35, 45); //ctxPawn.lineTo(40, 50);
		document.getElementById(this.pieceId).getContext("2d").lineTo(35, 5);
		document.getElementById(this.pieceId).getContext("2d").lineTo(29, 5);
		document.getElementById(this.pieceId).getContext("2d").lineTo(29, 10);
		document.getElementById(this.pieceId).getContext("2d").lineTo(23, 10);
		document.getElementById(this.pieceId).getContext("2d").lineTo(23, 5);
		document.getElementById(this.pieceId).getContext("2d").lineTo(17, 5);
		document.getElementById(this.pieceId).getContext("2d").lineTo(17, 10);
		document.getElementById(this.pieceId).getContext("2d").lineTo(11, 10);
		document.getElementById(this.pieceId).getContext("2d").lineTo(11, 5);
		document.getElementById(this.pieceId).getContext("2d").lineTo(5, 5); //ctxPawn.lineTo(40, 10);
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
		//calculating possible upward moves
		let up = 1;
		let stop = false;
		while (stop == false)
		{	
			if (this.yCoordinate + up == 8 || squareObjects[this.xCoordinate][this.yCoordinate + up].getOccupyingPieceId().substr(0, 5) == this.pieceColor)
			{
				stop = true;
			}
			else if (squareObjects[this.xCoordinate][this.yCoordinate + up].getOccupyingPieceId().substr(0, 5) == "none")
			{
				squareObjects[this.xCoordinate][this.yCoordinate + up].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
			}
			else if (squareObjects[this.xCoordinate][this.yCoordinate + up].getOccupyingPieceId().substr(0, 5) != this.pieceColor)
			{
				squareObjects[this.xCoordinate][this.yCoordinate + up].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
				stop = true;
			}
			up = up + 1;
		}
		
		//calculating possible downward moves
		let down = -1;
		stop = false;
		while (stop == false)
		{	
			if (this.yCoordinate + down == -1 || squareObjects[this.xCoordinate][this.yCoordinate + down].getOccupyingPieceId().substr(0, 5) == this.pieceColor)
			{
				stop = true;
			}
			else if (squareObjects[this.xCoordinate][this.yCoordinate + down].getOccupyingPieceId().substr(0, 5) == "none")
			{
				squareObjects[this.xCoordinate][this.yCoordinate + down].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
			}
			else if (squareObjects[this.xCoordinate][this.yCoordinate + down].getOccupyingPieceId().substr(0, 5) != this.pieceColor)
			{
				squareObjects[this.xCoordinate][this.yCoordinate + down].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
				stop = true;
			}
			down = down - 1;
		}
		
		//calculating possible leftward moves
		let left = -1;
		stop = false;
		while (stop == false)
		{	
			if (this.xCoordinate + left == -1 || squareObjects[this.xCoordinate + left][this.yCoordinate].getOccupyingPieceId().substr(0, 5) == this.pieceColor)
			{
				stop = true;
			}
			else if (squareObjects[this.xCoordinate + left][this.yCoordinate].getOccupyingPieceId().substr(0, 5) == "none")
			{
				squareObjects[this.xCoordinate + left][this.yCoordinate].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
			}
			else if (squareObjects[this.xCoordinate + left][this.yCoordinate].getOccupyingPieceId().substr(0, 5) != this.pieceColor)
			{
				squareObjects[this.xCoordinate + left][this.yCoordinate].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
				stop = true;
			}
			left = left - 1;
		}
		
		//calculating possible rightward moves
		let right = 1;
		stop = false;
		while (stop == false)
		{	
			if (this.xCoordinate + right == 8 || squareObjects[this.xCoordinate + right][this.yCoordinate].getOccupyingPieceId().substr(0, 5) == this.pieceColor)
			{
				stop = true;
			}
			else if (squareObjects[this.xCoordinate + right][this.yCoordinate].getOccupyingPieceId().substr(0, 5) == "none")
			{
				squareObjects[this.xCoordinate + right][this.yCoordinate].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
			}
			else if (squareObjects[this.xCoordinate + right][this.yCoordinate].getOccupyingPieceId().substr(0, 5) != this.pieceColor)
			{
				squareObjects[this.xCoordinate + right][this.yCoordinate].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
				stop = true;
			}
			right = right + 1;
		}
	}
}