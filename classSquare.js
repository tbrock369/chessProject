//Thought process: I will have a square object for each square on the board. When a piece is clicked, the squares that it can move to are highlighted. These square objects will be sent the name
//of the piece that is currently selected. Then, if one of these highlighted squares is clicked while the piece was still selected, the square object will call the movePiece function on the
//piece that it was just given the name of, and the piece will be moved to that square.

class Square
{
	constructor(squareId, occupyingPieceId) //squareId is named like squareA1 for example
	{
		this.squareId = squareId;
		this.occupyingPieceId = occupyingPieceId; //This holds the piece that is currently on this square. If there is no occupying piece, it will be "none".
		this.comingPieceId = "none"; //This holds the piece that is about to move to this square
		
		if (squareId[squareId.length - 2] == "A")
			this.xCoordinate = 0;
		else if (squareId[squareId.length - 2] == "B")
			this.xCoordinate = 1;
		else if (squareId[squareId.length - 2] == "C")
			this.xCoordinate = 2;
		else if (squareId[squareId.length - 2] == "D")
			this.xCoordinate = 3;
		else if (squareId[squareId.length - 2] == "E")
			this.xCoordinate = 4;
		else if (squareId[squareId.length - 2] == "F")
			this.xCoordinate = 5;
		else if (squareId[squareId.length - 2] == "G")
			this.xCoordinate = 6;
		else if (squareId[squareId.length - 2] == "H")
			this.xCoordinate = 7;
		
		if (squareId[squareId.length - 1] == "1")
			this.yCoordinate = 0;
		else if (squareId[squareId.length - 1] == "2")
			this.yCoordinate = 1;
		else if (squareId[squareId.length - 1] == "3")
			this.yCoordinate = 2;
		else if (squareId[squareId.length - 1] == "4")
			this.yCoordinate = 3;
		else if (squareId[squareId.length - 1] == "5")
			this.yCoordinate = 4;
		else if (squareId[squareId.length - 1] == "6")
			this.yCoordinate = 5;
		else if (squareId[squareId.length - 1] == "7")
			this.yCoordinate = 6;
		else if (squareId[squareId.length - 1] == "8")
			this.yCoordinate = 7;		
		
		if ((this.xCoordinate + this.yCoordinate) % 2 == 0)
		{
			this.squareColor = "black";
		}
		else
		{
			this.squareColor = "white";
		}
		
		this.xScreenLocation = document.getElementById(this.squareId).style.left;
		this.yScreenLocation = document.getElementById(this.squareId).style.top;
		
		this.xLocations = {0: "120px", 1: "200px", 2: "280px", 3: "360px", 4: "440px", 5: "520px", 6: "600px", 7: "680px"};
		this.yLocations = {0: "715px", 1: "635px", 2: "555px", 3: "475px", 4: "395px", 5: "315px", 6: "235px", 7: "155px"};
	}
	getSquareId()
	{
		return this.squareId;
	}
	getXCoordinate()
	{
		return this.xCoordinate;
	}
	setXCoordinate(xCoordinate)
	{
		this.xCoordinate() = xCoordinate;
	}
	getYCoordinate()
	{
		return this.yCoordinate;
	}
	setYCoordinate(yCoordinate)
	{
		this.yCoordinate() = yCoordinate;
	}
	getXScreenLocation()
	{
		return this.xScreenLocation
	}
	setXScreenLocation(xScreenLocation)
	{
		this.xScreenLocation = xScreenLocation;
	}
	getYScreenLocation()
	{
		return this.yScreenLocation
	}
	setYScreenLocation(yScreenLocation)
	{
		this.yScreenLocation = yScreenLocation;
	}
	getXScreenLocationForOccupyingPiece()
	{
		return this.xScreenLocation.substr(0, this.xScreenLocation.length - 2) -(-20) + "px"; //when I add normally, it thinks I am concatentating, so I am subtracting a negative instead.
	}
	getYScreenLocationForOccupyingPiece()
	{
		return this.yScreenLocation.substr(0, this.yScreenLocation.length - 2) -(-15) + "px"; //when I add normally, it thinks I am concatentating, so I am subtracting a negative instead.
	}
	getSquareColor()
	{
		return this.squareCOlor;
	}
	unhighlightSquare()
	{
		//document.getElementById(this.squareId).style.backgroundColor = "red";
		if (this.squareColor == "white")
			document.getElementById(this.squareId).style.backgroundColor = "beige";
		else
			document.getElementById(this.squareId).style.backgroundColor = "brown";
	}
	getOccupyingPieceId()
	{
		return this.occupyingPieceId;
	}
	setOccupyingPieceId(occupyingPieceId)
	{
		this.occupyingPieceId = occupyingPieceId;
	}
	getComingPieceId()
	{
		return this.comingPieceId;
	}
	setComingPieceId(comingPieceId)
	{
		this.comingPieceId = comingPieceId;
	}
	squareClicked()
	{
		if (this.comingPieceId != "none")
		{
			//if a king is being moved, we will also keep track of this in a seperate variable
			if (this.comingPieceId == "whiteKingE1")
			{
				whiteKingSquare = this.squareId;
			}
			if (this.comingPieceId == "blackKingE8")
			{
				blackKingSquare = this.squareId;
			}
			
			//if a pawn moves twice on its starting move, it is vulnerable to an en passant attack on the opponent's next move.
			if (this.yCoordinate - pieceObjects[this.comingPieceId].getYCoordinate() == 2 && this.comingPieceId.substr(0, 9) == "whitePawn")
			{
				whiteEnPassant = this.comingPieceId;
			}
			if (this.yCoordinate - pieceObjects[this.comingPieceId].getYCoordinate() == -2 && this.comingPieceId.substr(0, 9) == "blackPawn")
			{
				blackEnPassant = this.comingPieceId;
			}
			
			//With a piece coming to this square, that piece is no longer occupying its old square
			squareObjects[pieceObjects[this.comingPieceId].getXCoordinate()][pieceObjects[this.comingPieceId].getYCoordinate()].setOccupyingPieceId("none");
			
			//if the move was an attack instead of to an empty square, the piece that was attacked must be taken off the board
			if (this.occupyingPieceId != "none") 
			{
				pieceObjects[this.occupyingPieceId].wasTaken();
			}
			
			//if the move was an en passant, the piece that was attacked must be taken off the board, and the square it was on will now have no pieces on it.
			if (this.xCoordinate - pieceObjects[this.comingPieceId].getXCoordinate() != 0 && this.occupyingPieceId == "none" && this.comingPieceId.substr(0, 9) == "whitePawn")
			{
				pieceObjects[blackEnPassant].wasTakenByEnPassant();
			}
			if (this.xCoordinate - pieceObjects[this.comingPieceId].getXCoordinate() != 0 && this.occupyingPieceId == "none" && this.comingPieceId.substr(0, 9) == "blackPawn")
			{
				pieceObjects[whiteEnPassant].wasTakenByEnPassant();
			}
			
			//if the move was a castle, the respective rook must also be moved.
			if (this.xCoordinate - pieceObjects[this.comingPieceId].getXCoordinate() == -2 && this.comingPieceId.substr(5, 4) == "King") //left castle
			{
				//reminder: this.xCoordinate is the xCoordinate of the king after it has been castled
				let rooksOldXCoordinate = this.xCoordinate - 2;
				let rooksNewXCoordinate = this.xCoordinate + 1;
							
				//This updates the squares about if they are being occupyied by the rook
				squareObjects[rooksNewXCoordinate][this.yCoordinate].setOccupyingPieceId(squareObjects[rooksOldXCoordinate][this.yCoordinate].getOccupyingPieceId());
				squareObjects[rooksOldXCoordinate][this.yCoordinate].setOccupyingPieceId("none");
				
				//These instructions move the rook during castling on the board and has the rook update its saved location
				document.getElementById(squareObjects[rooksNewXCoordinate][this.yCoordinate].getOccupyingPieceId()).style.left = squareObjects[rooksNewXCoordinate][this.yCoordinate].getXScreenLocationForOccupyingPiece();
				pieceObjects[squareObjects[rooksNewXCoordinate][this.yCoordinate].getOccupyingPieceId()].setXCoordinate(rooksNewXCoordinate);
				
				//The rook that just moved to this square has now at least moved once.
				pieceObjects[squareObjects[rooksNewXCoordinate][this.yCoordinate].getOccupyingPieceId()].setHasMoved(true);
			}
			if (this.xCoordinate - pieceObjects[this.comingPieceId].getXCoordinate() == 2 && this.comingPieceId.substr(5, 4) == "King") //right castle
			{
				//reminder: this.xCoordinate is the xCoordinate of the king after it has been castled
				let rooksOldXCoordinate = this.xCoordinate + 1;
				let rooksNewXCoordinate = this.xCoordinate - 1;
				
				//This updates the squares about if they are being occupyied by the rook
				squareObjects[rooksNewXCoordinate][this.yCoordinate].setOccupyingPieceId(squareObjects[rooksOldXCoordinate][this.yCoordinate].getOccupyingPieceId());
				squareObjects[rooksOldXCoordinate][this.yCoordinate].setOccupyingPieceId("none");
				
				//These instructions move the rook during castling on the board and has the rook update its saved location
				document.getElementById(squareObjects[rooksNewXCoordinate][this.yCoordinate].getOccupyingPieceId()).style.left = squareObjects[rooksNewXCoordinate][this.yCoordinate].getXScreenLocationForOccupyingPiece(); 
				pieceObjects[squareObjects[rooksNewXCoordinate][this.yCoordinate].getOccupyingPieceId()].setXCoordinate(rooksNewXCoordinate);
				
				//The rook that just moved to this square has now at least moved once.
				pieceObjects[squareObjects[rooksNewXCoordinate][this.yCoordinate].getOccupyingPieceId()].setHasMoved(true);
			}
			
			//These instructions move the piece on the board and has the piece update its saved location
			document.getElementById(this.comingPieceId).style.left = this.getXScreenLocationForOccupyingPiece();//this.xScreenLocation; //this.xLocations[this.xCoordinate];
			document.getElementById(this.comingPieceId).style.top = this.getYScreenLocationForOccupyingPiece(); //this.yScreenLocation; //this.yLocations[this.yCoordinate];
			pieceObjects[this.comingPieceId].setXCoordinate(this.xCoordinate);
			pieceObjects[this.comingPieceId].setYCoordinate(this.yCoordinate);
			
			//The coming piece to this square becomes the occupying piece of this square, and there is now no longer a piece that is coming to this square.
			this.occupyingPieceId = this.comingPieceId;
			this.comingPieceId = "none";
			
			//a move has occured, so now whose turn it is to move must change. Also, after a turn is over, an oppurtunity to use en passent on your opponent may have past
			if (turnToMove == "white")
			{
				turnToMove = "black";
				blackEnPassant = "none";
			}
			else
			{
				turnToMove = "white";
				whiteEnPassant = "none";
			}
				
			//All highlighting on the board should be undone. 
			resetColorsOnBoard();
			document.getElementById(idLastPiece).getContext("2d").fillStyle = fillStyleLastPiece;
			document.getElementById(idLastPiece).getContext("2d").fill();	
			
			//The piece that just moved to this square has now at least moved once.
			pieceObjects[idLastPiece].setHasMoved(true);
			
			//After a move is made, each square has no comingPieceId until a new piece is selected
			resetComingPieceIdOnBoard();
			
			//pawn promotion. Additionally, after the end of any move, whether the opponent is now in check is determined. Since whether or not this move results in your opponent's king being in 
			//check depends on which piece you choose to promote your pawn into, if this move was a pawn promotion, seeing if the opponent is now in check is done in the pawnPromotion() function.
			if (this.occupyingPieceId.substr(0, 9) == "whitePawn" && this.yCoordinate == 7)
			{
				promotedPawn = this.occupyingPieceId;
				promotedPawnSquare = this.squareId;
				document.getElementById("formPawnPromotion").style.display = "block";//"none"; I want the opposite of none
				turnToMove = "none";
			}
			else if (this.occupyingPieceId.substr(0, 9) == "blackPawn" && this.yCoordinate == 0)
			{
				promotedPawn = this.occupyingPieceId;
				promotedPawnSquare = this.squareId;
				document.getElementById("formPawnPromotion").style.display = "block";//"none"; I want the opposite of none
				turnToMove = "none";
			}
			else if (turnToMove == "white")
			{
				isWhiteKingInCheck();
				blackKingInCheck = false; //anytime a black piece is moved, black should no longer be in check
				displayTurnToMove();
				checkmateOrDraw(); 
				rotateBoard();
			}
			else
			{
				isBlackKingInCheck();
				whiteKingInCheck = false; //anytime a white piece is moved, white should no longer be in check
				displayTurnToMove();
				checkmateOrDraw(); 
				rotateBoard();
			}
		}
	}	
	possibleMove(comingPieceId, determiningCheck, determiningCheckmateOrDraw)
	{
		if (determiningCheck == false && inCheckAfterYourOwnMove(this.squareId, comingPieceId) == false)
		{			
			if (determiningCheckmateOrDraw == true)
			{
				if (turnToMove == "white")
				{
					whiteHasAMove = true;
				}
				else
				{
					blackHasAMove = true;
				}
			}
			else
			{
				document.getElementById(this.squareId).style.backgroundColor = "yellow";
				this.comingPieceId = comingPieceId;
			}
		}
		else if (determiningCheck == true && comingPieceId.substr(0, 5) == "white" && this.squareId == blackKingSquare)
		{
			blackKingInCheck = true;
		}
		else if (determiningCheck == true && comingPieceId.substr(0, 5) == "black" && this.squareId == whiteKingSquare)
		{
			whiteKingInCheck = true;
		}
	}
	
	testAMove()
	{		
		//if a king is being moved, we will also keep track of this in a seperate variable
		if (this.comingPieceId == "whiteKingE1")
		{
			whiteKingSquare = this.squareId;
		}
		if (this.comingPieceId == "blackKingE8")
		{
			blackKingSquare = this.squareId;
		}
		
		//With a piece coming to this square, that piece is no longer occupying its old square
		squareObjects[pieceObjects[this.comingPieceId].getXCoordinate()][pieceObjects[this.comingPieceId].getYCoordinate()].setOccupyingPieceId("none");
		
		//if the move was an attack instead of to an empty square, the piece that was attacked must be taken off the board
		if (this.occupyingPieceId != "none") 
		{
			pieceObjects[this.occupyingPieceId].wasTaken();
		}
	
		//if the move was an en passant, the piece that was attacked must be taken off the board, and the square it was on will now have no pieces on it.
		if (this.xCoordinate - pieceObjects[this.comingPieceId].getXCoordinate() != 0 && this.occupyingPieceId == "none" && this.comingPieceId.substr(0, 9) == "whitePawn")
		{
			pieceObjects[blackEnPassant].wasTakenByEnPassant();
		}
		if (this.xCoordinate - pieceObjects[this.comingPieceId].getXCoordinate() != 0 && this.occupyingPieceId == "none" && this.comingPieceId.substr(0, 9) == "blackPawn")
		{
			
			pieceObjects[whiteEnPassant].wasTakenByEnPassant();
		}
		
		//if the move was a castle, the respective rook must also be moved.
		if (this.xCoordinate - pieceObjects[this.comingPieceId].getXCoordinate() == -2 && this.comingPieceId.substr(5, 4) == "King") //left castle
		{
			//reminder: this.xCoordinate is the xCoordinate of the king after it has been castled
			let rooksOldXCoordinate = this.xCoordinate - 2;
			let rooksNewXCoordinate = this.xCoordinate + 1;
			
			//This updates the squares about if they are being occupyied by the rook
			squareObjects[rooksNewXCoordinate][this.yCoordinate].setOccupyingPieceId(squareObjects[rooksOldXCoordinate][this.yCoordinate].getOccupyingPieceId());
			squareObjects[rooksOldXCoordinate][this.yCoordinate].setOccupyingPieceId("none");
			
			//These instructions move the rook during castling on the board and has the rook update its saved location
			document.getElementById(squareObjects[rooksNewXCoordinate][this.yCoordinate].getOccupyingPieceId()).style.left = squareObjects[rooksNewXCoordinate][this.yCoordinate].getXScreenLocationForOccupyingPiece();
			pieceObjects[squareObjects[rooksNewXCoordinate][this.yCoordinate].getOccupyingPieceId()].setXCoordinate(rooksNewXCoordinate);
			
			//The rook that just moved to this square has now at least moved once.
			pieceObjects[squareObjects[rooksNewXCoordinate][this.yCoordinate].getOccupyingPieceId()].setHasMoved(true);
		}
		if (this.xCoordinate - pieceObjects[this.comingPieceId].getXCoordinate() == 2 && this.comingPieceId.substr(5, 4) == "King") //right castle
		{
			//reminder: this.xCoordinate is the xCoordinate of the king after it has been castled
			let rooksOldXCoordinate = this.xCoordinate + 1;
			let rooksNewXCoordinate = this.xCoordinate - 1;
			
			//This updates the squares about if they are being occupyied by the rook
			squareObjects[rooksNewXCoordinate][this.yCoordinate].setOccupyingPieceId(squareObjects[rooksOldXCoordinate][this.yCoordinate].getOccupyingPieceId());
			squareObjects[rooksOldXCoordinate][this.yCoordinate].setOccupyingPieceId("none");
			
			//These instructions move the rook during castling on the board and has the rook update its saved location
			document.getElementById(squareObjects[rooksNewXCoordinate][this.yCoordinate].getOccupyingPieceId()).style.left = squareObjects[rooksNewXCoordinate][this.yCoordinate].getXScreenLocationForOccupyingPiece();
			pieceObjects[squareObjects[rooksNewXCoordinate][this.yCoordinate].getOccupyingPieceId()].setXCoordinate(rooksNewXCoordinate);
			
			
			//The rook that just moved to this square has now at least moved once.
			pieceObjects[squareObjects[rooksNewXCoordinate][this.yCoordinate].getOccupyingPieceId()].setHasMoved(true);
		}
		
		//These instructions move the piece on the board and has the piece update its saved location
		document.getElementById(this.comingPieceId).style.left = this.getXScreenLocationForOccupyingPiece(); //this.xScreenLocation;//this.xLocations[this.xCoordinate];
		document.getElementById(this.comingPieceId).style.top = this.getYScreenLocationForOccupyingPiece(); //this.yScreenLocation;//this.yLocations[this.yCoordinate];
		pieceObjects[this.comingPieceId].setXCoordinate(this.xCoordinate);
		pieceObjects[this.comingPieceId].setYCoordinate(this.yCoordinate);
		
		//The coming piece to this square becomes the occupying piece of this square, and there is now no longer a piece that is coming to this square.
		this.occupyingPieceId = this.comingPieceId;
		this.comingPieceId = "none";
	}
	revertTestedMove(originalWhiteKingSquare, originalBlackKingSquare, originalSquareObjectOfComingPiece, originalOccupyingPieceId, originalComingPieceId, originalWhiteEnPassantSquare, originalBlackEnPassantSquare)
	{
		//Reverse: "//The coming piece to this square becomes the occupying piece of this square, and there is now no longer a piece that is coming to this square."
		this.comingPieceId = originalComingPieceId;
		this.occupyingPieceId = originalOccupyingPieceId;
		
		//Reverse: "//These instructions move the piece on the board and has the piece update its saved location"
		pieceObjects[this.comingPieceId].setXCoordinate(originalSquareObjectOfComingPiece.getXCoordinate());
		pieceObjects[this.comingPieceId].setYCoordinate(originalSquareObjectOfComingPiece.getYCoordinate());
		document.getElementById(this.comingPieceId).style.left = originalSquareObjectOfComingPiece.getXScreenLocationForOccupyingPiece();//this.xLocations[originalSquareObjectOfComingPiece.getXCoordinate()];
		document.getElementById(this.comingPieceId).style.top = originalSquareObjectOfComingPiece.getYScreenLocationForOccupyingPiece();//this.yLocations[originalSquareObjectOfComingPiece.getYCoordinate()];
		
		//Reverse: "//if the move was a castle, the respective rook must also be moved."
		if (this.xCoordinate - pieceObjects[this.comingPieceId].getXCoordinate() == -2 && this.comingPieceId.substr(5, 4) == "King") //left castle
		{
			//reminder: this.xCoordinate is the xCoordinate of the king after it has been castled
			let rooksOldXCoordinate = this.xCoordinate - 2;
			let rooksNewXCoordinate = this.xCoordinate + 1;
			
			//The rook that just moved to this square has now at least moved once.
			pieceObjects[squareObjects[rooksNewXCoordinate][this.yCoordinate].getOccupyingPieceId()].setHasMoved(false);
			
			//This updates the squares about if they are being occupyied by the rook
			squareObjects[rooksOldXCoordinate][this.yCoordinate].setOccupyingPieceId(squareObjects[rooksNewXCoordinate][this.yCoordinate].getOccupyingPieceId());
			squareObjects[rooksNewXCoordinate][this.yCoordinate].setOccupyingPieceId("none");
			
			//These instructions move the rook during castling on the board and has the rook update its saved location
			document.getElementById(squareObjects[rooksOldXCoordinate][this.yCoordinate].getOccupyingPieceId()).style.left = squareObjects[rooksOldXCoordinate][this.yCoordinate].getXScreenLocationForOccupyingPiece();//this.xLocations[rooksOldXCoordinate];
			pieceObjects[squareObjects[rooksOldXCoordinate][this.yCoordinate].getOccupyingPieceId()].setXCoordinate(rooksOldXCoordinate);
		}
		if (this.xCoordinate - pieceObjects[this.comingPieceId].getXCoordinate() == 2 && this.comingPieceId.substr(5, 4) == "King") //right castle
		{
			//reminder: this.xCoordinate is the xCoordinate of the king after it has been castled
			let rooksOldXCoordinate = this.xCoordinate + 1;
			let rooksNewXCoordinate = this.xCoordinate - 1;
			
			//The rook that just moved to this square has now at least moved once.
			pieceObjects[squareObjects[rooksNewXCoordinate][this.yCoordinate].getOccupyingPieceId()].setHasMoved(false);
			
			//This updates the squares about if they are being occupyied by the rook
			squareObjects[rooksOldXCoordinate][this.yCoordinate].setOccupyingPieceId(squareObjects[rooksNewXCoordinate][this.yCoordinate].getOccupyingPieceId());
			squareObjects[rooksNewXCoordinate][this.yCoordinate].setOccupyingPieceId("none");
			
			//These instructions move the rook during castling on the board and has the rook update its saved location
			document.getElementById(squareObjects[rooksOldXCoordinate][this.yCoordinate].getOccupyingPieceId()).style.left = squareObjects[rooksOldXCoordinate][this.yCoordinate].getXScreenLocationForOccupyingPiece();//this.xLocations[rooksOldXCoordinate];
			pieceObjects[squareObjects[rooksOldXCoordinate][this.yCoordinate].getOccupyingPieceId()].setXCoordinate(rooksOldXCoordinate);
		}
		
		//Reverse: "//if the move was an en passant, the piece that was attacked must be taken off the board, and the square it was on will now have no pieces on it."
		if (this.xCoordinate - pieceObjects[this.comingPieceId].getXCoordinate() != 0 && this.occupyingPieceId == "none" && this.comingPieceId.substr(0, 9) == "whitePawn")
		{
			document.getElementById(blackEnPassant).style.display = "block"; 
			originalBlackEnPassantSquare.setOccupyingPieceId(blackEnPassant);
		}
		if (this.xCoordinate - pieceObjects[this.comingPieceId].getXCoordinate() != 0 && this.occupyingPieceId == "none" && this.comingPieceId.substr(0, 9) == "blackPawn")
		{
			document.getElementById(whiteEnPassant).style.display = "block"; 
			originalWhiteEnPassantSquare.setOccupyingPieceId(whiteEnPassant);//originalBlackEnPassantSquare.setOccupyingPieceId(whiteEnPassant);
		}
		
		//Reverse: "//if the move was an attack instead of to an empty square, the piece that was attacked must be taken off the board"
		if (this.occupyingPieceId != "none") 
		{
			document.getElementById(this.occupyingPieceId).style.display = "block";
		}
		
		//Reverse: "//With a piece coming to this square, that piece is no longer occupying its old square"
		originalSquareObjectOfComingPiece.setOccupyingPieceId(this.comingPieceId);
		
		//Reverse: "//if a king is being moved, we will also keep track of this in a seperate variable"
		if (this.comingPieceId == "whiteKingE1")
		{
			whiteKingSquare = originalWhiteKingSquare;
		}
		if (this.comingPieceId == "blackKingE8")
		{
			blackKingSquare = originalBlackKingSquare;
		}
	}
}