class Queen extends Piece
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
		
		document.getElementById(this.pieceId).getContext("2d").lineTo(25, 15);
		document.getElementById(this.pieceId).getContext("2d").lineTo(30, 15);
		document.getElementById(this.pieceId).getContext("2d").lineTo(32, 12);
		
		document.getElementById(this.pieceId).getContext("2d").lineTo(25, 10);
		document.getElementById(this.pieceId).getContext("2d").lineTo(25, 8);
		document.getElementById(this.pieceId).getContext("2d").lineTo(22, 5);
		
		document.getElementById(this.pieceId).getContext("2d").lineTo(18, 5);
		document.getElementById(this.pieceId).getContext("2d").lineTo(15, 8);
		document.getElementById(this.pieceId).getContext("2d").lineTo(15, 10);
		
		document.getElementById(this.pieceId).getContext("2d").lineTo(8, 12);
		document.getElementById(this.pieceId).getContext("2d").lineTo(10, 15);
		document.getElementById(this.pieceId).getContext("2d").lineTo(15, 15);
		
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
		let up, down, left, right, stop;
				
		up = 1;
		stop = false;
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
		down = -1;
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
		left = -1;
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
		right = 1;
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
		
		//calculating possible diagonal upward and leftward moves
		up = 1;
		left = -1;
		stop = false;
		while (stop == false)
		{	
			if (this.xCoordinate + left == -1 || this.yCoordinate + up == 8 || squareObjects[this.xCoordinate + left][this.yCoordinate + up].getOccupyingPieceId().substr(0, 5) == this.pieceColor)
			{
				stop = true;
			}
			else if (squareObjects[this.xCoordinate + left][this.yCoordinate + up].getOccupyingPieceId().substr(0, 5) == "none")
			{
				squareObjects[this.xCoordinate + left][this.yCoordinate + up].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
			}
			else if (squareObjects[this.xCoordinate + left][this.yCoordinate + up].getOccupyingPieceId().substr(0, 5) != this.pieceColor)
			{
				squareObjects[this.xCoordinate + left][this.yCoordinate + up].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
				stop = true;
			}
			up = up + 1;
			left = left - 1;
		}
		
		//calculating possible diagonal upward and rightward moves
		up = 1;
		right = 1;
		stop = false;
		while (stop == false)
		{	
			if (this.xCoordinate + right == 8 || this.yCoordinate + up == 8 || squareObjects[this.xCoordinate + right][this.yCoordinate + up].getOccupyingPieceId().substr(0, 5) == this.pieceColor)
			{
				stop = true;
			}
			else if (squareObjects[this.xCoordinate + right][this.yCoordinate + up].getOccupyingPieceId().substr(0, 5) == "none")
			{
				squareObjects[this.xCoordinate + right][this.yCoordinate + up].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
			}
			else if (squareObjects[this.xCoordinate + right][this.yCoordinate + up].getOccupyingPieceId().substr(0, 5) != this.pieceColor)
			{
				squareObjects[this.xCoordinate + right][this.yCoordinate + up].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
				stop = true;
			}
			up = up + 1;
			right = right + 1;
		}
		
		//calculating possible diagonal downward and leftward moves
		down = -1;
		left = -1;
		stop = false;
		while (stop == false)
		{	
			if (this.xCoordinate + left == -1 || this.yCoordinate + down == -1 || squareObjects[this.xCoordinate + left][this.yCoordinate + down].getOccupyingPieceId().substr(0, 5) == this.pieceColor)
			{
				stop = true;
			}
			else if (squareObjects[this.xCoordinate + left][this.yCoordinate + down].getOccupyingPieceId().substr(0, 5) == "none")
			{
				squareObjects[this.xCoordinate + left][this.yCoordinate + down].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
			}
			else if (squareObjects[this.xCoordinate + left][this.yCoordinate + down].getOccupyingPieceId().substr(0, 5) != this.pieceColor)
			{
				squareObjects[this.xCoordinate + left][this.yCoordinate + down].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
				stop = true;
			}
			down = down - 1;
			left = left - 1;
		}
		
		//calculating possible diagonal upward and rightward moves
		down = -1;
		right = 1;
		stop = false;
		while (stop == false)
		{	
			if (this.xCoordinate + right == 8 || this.yCoordinate + down == -1 || squareObjects[this.xCoordinate + right][this.yCoordinate + down].getOccupyingPieceId().substr(0, 5) == this.pieceColor)
			{
				stop = true;
			}
			else if (squareObjects[this.xCoordinate + right][this.yCoordinate + down].getOccupyingPieceId().substr(0, 5) == "none")
			{
				squareObjects[this.xCoordinate + right][this.yCoordinate + down].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
			}
			else if (squareObjects[this.xCoordinate + right][this.yCoordinate + down].getOccupyingPieceId().substr(0, 5) != this.pieceColor)
			{
				squareObjects[this.xCoordinate + right][this.yCoordinate + down].possibleMove(this.pieceId, determiningCheck, determiningCheckmateOrDraw);
				stop = true;
			}
			down = down - 1;
			right = right + 1;
		}
	}
}