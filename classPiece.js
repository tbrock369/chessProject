class Piece
{
	constructor(pieceId) //example: the pawn whose id is "whitePawnA2" will end up having a pieceColor of white, an	xCoordinate of "A", and a yCoordinate of "2"
	{
		this.pieceId = pieceId;
		this.pieceColor = pieceId.substr(0, 5); //either "white" or "black"
		this.hasMoved = false;
		
		if (pieceId[pieceId.length - 2] == "A")
			this.xCoordinate = 0;
		else if (pieceId[pieceId.length - 2] == "B")
			this.xCoordinate = 1;
		else if (pieceId[pieceId.length - 2] == "C")
			this.xCoordinate = 2;
		else if (pieceId[pieceId.length - 2] == "D")
			this.xCoordinate = 3;
		else if (pieceId[pieceId.length - 2] == "E")
			this.xCoordinate = 4;
		else if (pieceId[pieceId.length - 2] == "F")
			this.xCoordinate = 5;
		else if (pieceId[pieceId.length - 2] == "G")
			this.xCoordinate = 6;
		else if (pieceId[pieceId.length - 2] == "H")
			this.xCoordinate = 7;
		
		if (pieceId[pieceId.length - 1] == "1")
			this.yCoordinate = 0;
		else if (pieceId[pieceId.length - 1] == "2")
			this.yCoordinate = 1;
		else if (pieceId[pieceId.length - 1] == "3")
			this.yCoordinate = 2;
		else if (pieceId[pieceId.length - 1] == "4")
			this.yCoordinate = 3;
		else if (pieceId[pieceId.length - 1] == "5")
			this.yCoordinate = 4;
		else if (pieceId[pieceId.length - 1] == "6")
			this.yCoordinate = 5;
		else if (pieceId[pieceId.length - 1] == "7")
			this.yCoordinate = 6;
		else if (pieceId[pieceId.length - 1] == "8")
			this.yCoordinate = 7;		
	}
	createPiece()
	{
		//set the color to make the piece
		if (this.pieceColor == "white")
			document.getElementById(this.pieceId).getContext("2d").fillStyle = "white";//"beige";
		else
			document.getElementById(this.pieceId).getContext("2d").fillStyle = "dimgray";//"brown";
	}
	getPieceId()
	{
		return this.pieceId;
	}
	getPieceColor()
	{
		return this.pieceColor;
	}
	getHasMoved()
	{
		return this.hasMoved;
	}
	setHasMoved(hasMoved)
	{
		this.hasMoved = hasMoved;
	}
	getXCoordinate()
	{
		return this.xCoordinate;
	}
	setXCoordinate(xCoordinate)
	{
		this.xCoordinate = xCoordinate;
	}
	getYCoordinate()
	{
		return this.yCoordinate;
	}
	setYCoordinate(yCoordinate)
	{
		this.yCoordinate = yCoordinate;
	}
	wasTaken()
	{
		document.getElementById(this.pieceId).style.display = "none"; //this removes the piece from the board
	}
	pieceSelected()
	{
		resetComingPieceIdOnBoard();
		pieceHighlighting(this.pieceId);	
		resetColorsOnBoard();
	}
}