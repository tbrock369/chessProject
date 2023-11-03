//This file contains the creation of objects and some method calls related to their creation
//The four categories of objects are:
//1. pieces that start on the board 2. white pieces that white pawns can be promoted into 3. black pieces that black pawns can be promoted into 4. each square on the board


//This creates an object for each piece that starts on the board and shows these pieces on the board(16 total)
const whitePawnA2Object = new Pawn("whitePawnA2");
const whitePawnB2Object = new Pawn("whitePawnB2");
const whitePawnC2Object = new Pawn("whitePawnC2");
const whitePawnD2Object = new Pawn("whitePawnD2");
const whitePawnE2Object = new Pawn("whitePawnE2");
const whitePawnF2Object = new Pawn("whitePawnF2");
const whitePawnG2Object = new Pawn("whitePawnG2");
const whitePawnH2Object = new Pawn("whitePawnH2");
const blackPawnA7Object = new Pawn("blackPawnA7");
const blackPawnB7Object = new Pawn("blackPawnB7");
const blackPawnC7Object = new Pawn("blackPawnC7");
const blackPawnD7Object = new Pawn("blackPawnD7");
const blackPawnE7Object = new Pawn("blackPawnE7");
const blackPawnF7Object = new Pawn("blackPawnF7");
const blackPawnG7Object = new Pawn("blackPawnG7");
const blackPawnH7Object = new Pawn("blackPawnH7");
whitePawnA2Object.createPiece();
whitePawnB2Object.createPiece();
whitePawnC2Object.createPiece();
whitePawnD2Object.createPiece();
whitePawnE2Object.createPiece();
whitePawnF2Object.createPiece();
whitePawnG2Object.createPiece();
whitePawnH2Object.createPiece();
blackPawnA7Object.createPiece();
blackPawnB7Object.createPiece();
blackPawnC7Object.createPiece();
blackPawnD7Object.createPiece();
blackPawnE7Object.createPiece();
blackPawnF7Object.createPiece();
blackPawnG7Object.createPiece();
blackPawnH7Object.createPiece();

const whiteRookA1Object = new Rook("whiteRookA1");
const whiteRookH1Object = new Rook("whiteRookH1");
const blackRookA8Object = new Rook("blackRookA8");
const blackRookH8Object = new Rook("blackRookH8");
whiteRookA1Object.createPiece();
whiteRookH1Object.createPiece();
blackRookA8Object.createPiece();
blackRookH8Object.createPiece();

const whiteKnightB1Object = new Knight("whiteKnightB1");
const whiteKnightG1Object = new Knight("whiteKnightG1");
const blackKnightB8Object = new Knight("blackKnightB8");
const blackKnightG8Object = new Knight("blackKnightG8");
whiteKnightB1Object.createPiece();
whiteKnightG1Object.createPiece();
blackKnightB8Object.createPiece();
blackKnightG8Object.createPiece();

const whiteBishopC1Object = new Bishop("whiteBishopC1");
const whiteBishopF1Object = new Bishop("whiteBishopF1");
const blackBishopC8Object = new Bishop("blackBishopC8");
const blackBishopF8Object = new Bishop("blackBishopF8");
whiteBishopC1Object.createPiece();
whiteBishopF1Object.createPiece();
blackBishopC8Object.createPiece();
blackBishopF8Object.createPiece();

const whiteQueenD1Object = new Queen("whiteQueenD1");
const blackQueenD8Object = new Queen("blackQueenD8");
whiteQueenD1Object.createPiece();
blackQueenD8Object.createPiece();

const blackKingE8Object = new King("blackKingE8");
const whiteKingE1Object = new King("whiteKingE1");
blackKingE8Object.createPiece();
whiteKingE1Object.createPiece();



//This creates the white pawn promotion objects (4 possibilities for each of the 8 squares a pawn can be promoted to for a total of 32 possible pieces that can replace a promoted pawn)
const whiteKnightA8Object = new Knight("whiteKnightA8");
const whiteBishopA8Object = new Bishop("whiteBishopA8");
const whiteRookA8Object = new Rook("whiteRookA8");
const whiteQueenA8Object = new Queen("whiteQueenA8");
whiteKnightA8Object.createPiece();
whiteBishopA8Object.createPiece();
whiteRookA8Object.createPiece();
whiteQueenA8Object.createPiece();
whiteKnightA8Object.setHasMoved(true);
whiteBishopA8Object.setHasMoved(true);
whiteRookA8Object.setHasMoved(true);
whiteQueenA8Object.setHasMoved(true);

const whiteKnightB8Object = new Knight("whiteKnightB8");
const whiteBishopB8Object = new Bishop("whiteBishopB8");
const whiteRookB8Object = new Rook("whiteRookB8");
const whiteQueenB8Object = new Queen("whiteQueenB8");
whiteKnightB8Object.createPiece();
whiteBishopB8Object.createPiece();
whiteRookB8Object.createPiece();
whiteQueenB8Object.createPiece();
whiteKnightB8Object.setHasMoved(true);
whiteBishopB8Object.setHasMoved(true);
whiteRookB8Object.setHasMoved(true);
whiteQueenB8Object.setHasMoved(true);

const whiteKnightC8Object = new Knight("whiteKnightC8");
const whiteBishopC8Object = new Bishop("whiteBishopC8");
const whiteRookC8Object = new Rook("whiteRookC8");
const whiteQueenC8Object = new Queen("whiteQueenC8");
whiteKnightC8Object.createPiece();
whiteBishopC8Object.createPiece();
whiteRookC8Object.createPiece();
whiteQueenC8Object.createPiece();
whiteKnightC8Object.setHasMoved(true);
whiteBishopC8Object.setHasMoved(true);
whiteRookC8Object.setHasMoved(true);
whiteQueenC8Object.setHasMoved(true);

const whiteKnightD8Object = new Knight("whiteKnightD8");
const whiteBishopD8Object = new Bishop("whiteBishopD8");
const whiteRookD8Object = new Rook("whiteRookD8");
const whiteQueenD8Object = new Queen("whiteQueenD8");
whiteKnightD8Object.createPiece();
whiteBishopD8Object.createPiece();
whiteRookD8Object.createPiece();
whiteQueenD8Object.createPiece();
whiteKnightD8Object.setHasMoved(true);
whiteBishopD8Object.setHasMoved(true);
whiteRookD8Object.setHasMoved(true);
whiteQueenD8Object.setHasMoved(true);

const whiteKnightE8Object = new Knight("whiteKnightE8");
const whiteBishopE8Object = new Bishop("whiteBishopE8");
const whiteRookE8Object = new Rook("whiteRookE8");
const whiteQueenE8Object = new Queen("whiteQueenE8");
whiteKnightE8Object.createPiece();
whiteBishopE8Object.createPiece();
whiteRookE8Object.createPiece();
whiteQueenE8Object.createPiece();
whiteKnightE8Object.setHasMoved(true);
whiteBishopE8Object.setHasMoved(true);
whiteRookE8Object.setHasMoved(true);
whiteQueenE8Object.setHasMoved(true);

const whiteKnightF8Object = new Knight("whiteKnightF8");
const whiteBishopF8Object = new Bishop("whiteBishopF8");
const whiteRookF8Object = new Rook("whiteRookF8");
const whiteQueenF8Object = new Queen("whiteQueenF8");
whiteKnightF8Object.createPiece();
whiteBishopF8Object.createPiece();
whiteRookF8Object.createPiece();
whiteQueenF8Object.createPiece();
whiteKnightF8Object.setHasMoved(true);
whiteBishopF8Object.setHasMoved(true);
whiteRookF8Object.setHasMoved(true);
whiteQueenF8Object.setHasMoved(true);

const whiteKnightG8Object = new Knight("whiteKnightG8");
const whiteBishopG8Object = new Bishop("whiteBishopG8");
const whiteRookG8Object = new Rook("whiteRookG8");
const whiteQueenG8Object = new Queen("whiteQueenG8");
whiteKnightG8Object.createPiece();
whiteBishopG8Object.createPiece();
whiteRookG8Object.createPiece();
whiteQueenG8Object.createPiece();
whiteKnightG8Object.setHasMoved(true);
whiteBishopG8Object.setHasMoved(true);
whiteRookG8Object.setHasMoved(true);
whiteQueenG8Object.setHasMoved(true);

const whiteKnightH8Object = new Knight("whiteKnightH8");
const whiteBishopH8Object = new Bishop("whiteBishopH8");
const whiteRookH8Object = new Rook("whiteRookH8");
const whiteQueenH8Object = new Queen("whiteQueenH8");
whiteKnightH8Object.createPiece();
whiteBishopH8Object.createPiece();
whiteRookH8Object.createPiece();
whiteQueenH8Object.createPiece();
whiteKnightH8Object.setHasMoved(true);
whiteBishopH8Object.setHasMoved(true);
whiteRookH8Object.setHasMoved(true);
whiteQueenH8Object.setHasMoved(true);



//This creates the black pawn promotion objects (4 possibilities for each of the 8 squares a pawn can be promoted to for a total of 32 possible pieces that can replace a promoted pawn)
const blackKnightA1Object = new Knight("blackKnightA1");
const blackBishopA1Object = new Bishop("blackBishopA1");
const blackRookA1Object = new Rook("blackRookA1");
const blackQueenA1Object = new Queen("blackQueenA1");
blackKnightA1Object.createPiece();
blackBishopA1Object.createPiece();
blackRookA1Object.createPiece();
blackQueenA1Object.createPiece();
blackKnightA1Object.setHasMoved(true);
blackBishopA1Object.setHasMoved(true);
blackRookA1Object.setHasMoved(true);
blackQueenA1Object.setHasMoved(true);

const blackKnightB1Object = new Knight("blackKnightB1");
const blackBishopB1Object = new Bishop("blackBishopB1");
const blackRookB1Object = new Rook("blackRookB1");
const blackQueenB1Object = new Queen("blackQueenB1");
blackKnightB1Object.createPiece();
blackBishopB1Object.createPiece();
blackRookB1Object.createPiece();
blackQueenB1Object.createPiece();
blackKnightB1Object.setHasMoved(true);
blackBishopB1Object.setHasMoved(true);
blackRookB1Object.setHasMoved(true);
blackQueenB1Object.setHasMoved(true);

const blackKnightC1Object = new Knight("blackKnightC1");
const blackBishopC1Object = new Bishop("blackBishopC1");
const blackRookC1Object = new Rook("blackRookC1");
const blackQueenC1Object = new Queen("blackQueenC1");
blackKnightC1Object.createPiece();
blackBishopC1Object.createPiece();
blackRookC1Object.createPiece();
blackQueenC1Object.createPiece();
blackKnightC1Object.setHasMoved(true);
blackBishopC1Object.setHasMoved(true);
blackRookC1Object.setHasMoved(true);
blackQueenC1Object.setHasMoved(true);

const blackKnightD1Object = new Knight("blackKnightD1");
const blackBishopD1Object = new Bishop("blackBishopD1");
const blackRookD1Object = new Rook("blackRookD1");
const blackQueenD1Object = new Queen("blackQueenD1");
blackKnightD1Object.createPiece();
blackBishopD1Object.createPiece();
blackRookD1Object.createPiece();
blackQueenD1Object.createPiece();
blackKnightD1Object.setHasMoved(true);
blackBishopD1Object.setHasMoved(true);
blackRookD1Object.setHasMoved(true);
blackQueenD1Object.setHasMoved(true);

const blackKnightE1Object = new Knight("blackKnightE1");
const blackBishopE1Object = new Bishop("blackBishopE1");
const blackRookE1Object = new Rook("blackRookE1");
const blackQueenE1Object = new Queen("blackQueenE1");
blackKnightE1Object.createPiece();
blackBishopE1Object.createPiece();
blackRookE1Object.createPiece();
blackQueenE1Object.createPiece();
blackKnightE1Object.setHasMoved(true);
blackBishopE1Object.setHasMoved(true);
blackRookE1Object.setHasMoved(true);
blackQueenE1Object.setHasMoved(true);

const blackKnightF1Object = new Knight("blackKnightF1");
const blackBishopF1Object = new Bishop("blackBishopF1");
const blackRookF1Object = new Rook("blackRookF1");
const blackQueenF1Object = new Queen("blackQueenF1");
blackKnightF1Object.createPiece();
blackBishopF1Object.createPiece();
blackRookF1Object.createPiece();
blackQueenF1Object.createPiece();
blackKnightF1Object.setHasMoved(true);
blackBishopF1Object.setHasMoved(true);
blackRookF1Object.setHasMoved(true);
blackQueenF1Object.setHasMoved(true);

const blackKnightG1Object = new Knight("blackKnightG1");
const blackBishopG1Object = new Bishop("blackBishopG1");
const blackRookG1Object = new Rook("blackRookG1");
const blackQueenG1Object = new Queen("blackQueenG1");
blackKnightG1Object.createPiece();
blackBishopG1Object.createPiece();
blackRookG1Object.createPiece();
blackQueenG1Object.createPiece();
blackKnightG1Object.setHasMoved(true);
blackBishopG1Object.setHasMoved(true);
blackRookG1Object.setHasMoved(true);
blackQueenG1Object.setHasMoved(true);

const blackKnightH1Object = new Knight("blackKnightH1");
const blackBishopH1Object = new Bishop("blackBishopH1");
const blackRookH1Object = new Rook("blackRookH1");
const blackQueenH1Object = new Queen("blackQueenH1");
blackKnightH1Object.createPiece();
blackBishopH1Object.createPiece();
blackRookH1Object.createPiece();
blackQueenH1Object.createPiece();
blackKnightH1Object.setHasMoved(true);
blackBishopH1Object.setHasMoved(true);
blackRookH1Object.setHasMoved(true);
blackQueenH1Object.setHasMoved(true);



//This creates an object for each square on the board (64 squares total)
const squareA1Object = new Square("squareA1", "whiteRookA1");
const squareA2Object = new Square("squareA2", "whitePawnA2");
const squareA3Object = new Square("squareA3", "none");
const squareA4Object = new Square("squareA4", "none");
const squareA5Object = new Square("squareA5", "none");
const squareA6Object = new Square("squareA6", "none");
const squareA7Object = new Square("squareA7", "blackPawnA7");
const squareA8Object = new Square("squareA8", "blackRookA8");

const squareB1Object = new Square("squareB1", "whiteKnightB1");
const squareB2Object = new Square("squareB2", "whitePawnB2");
const squareB3Object = new Square("squareB3", "none");
const squareB4Object = new Square("squareB4", "none");
const squareB5Object = new Square("squareB5", "none");
const squareB6Object = new Square("squareB6", "none");
const squareB7Object = new Square("squareB7", "blackPawnB7");
const squareB8Object = new Square("squareB8", "blackKnightB8");

const squareC1Object = new Square("squareC1", "whiteBishopC1");
const squareC2Object = new Square("squareC2", "whitePawnC2");
const squareC3Object = new Square("squareC3", "none");
const squareC4Object = new Square("squareC4", "none");
const squareC5Object = new Square("squareC5", "none");
const squareC6Object = new Square("squareC6", "none");
const squareC7Object = new Square("squareC7", "blackPawnC7");
const squareC8Object = new Square("squareC8", "blackBishopC8");

const squareD1Object = new Square("squareD1", "whiteQueenD1");
const squareD2Object = new Square("squareD2", "whitePawnD2");
const squareD3Object = new Square("squareD3", "none");
const squareD4Object = new Square("squareD4", "none");
const squareD5Object = new Square("squareD5", "none");
const squareD6Object = new Square("squareD6", "none");
const squareD7Object = new Square("squareD7", "blackPawnD7");
const squareD8Object = new Square("squareD8", "blackQueenD8");

const squareE1Object = new Square("squareE1", "whiteKingE1");
const squareE2Object = new Square("squareE2", "whitePawnE2");
const squareE3Object = new Square("squareE3", "none");
const squareE4Object = new Square("squareE4", "none");
const squareE5Object = new Square("squareE5", "none");
const squareE6Object = new Square("squareE6", "none");
const squareE7Object = new Square("squareE7", "blackPawnE7");
const squareE8Object = new Square("squareE8", "blackKingE8");

const squareF1Object = new Square("squareF1", "whiteBishopF1");
const squareF2Object = new Square("squareF2", "whitePawnF2");
const squareF3Object = new Square("squareF3", "none");
const squareF4Object = new Square("squareF4", "none");
const squareF5Object = new Square("squareF5", "none");
const squareF6Object = new Square("squareF6", "none");
const squareF7Object = new Square("squareF7", "blackPawnF7");
const squareF8Object = new Square("squareF8", "blackBishopF8");

const squareG1Object = new Square("squareG1", "whiteKnightG1");
const squareG2Object = new Square("squareG2", "whitePawnG2");
const squareG3Object = new Square("squareG3", "none");
const squareG4Object = new Square("squareG4", "none");
const squareG5Object = new Square("squareG5", "none");
const squareG6Object = new Square("squareG6", "none");
const squareG7Object = new Square("squareG7", "blackPawnG7");
const squareG8Object = new Square("squareG8", "blackKnightG8");

const squareH1Object = new Square("squareH1", "whiteRookH1");
const squareH2Object = new Square("squareH2", "whitePawnH2");
const squareH3Object = new Square("squareH3", "none");
const squareH4Object = new Square("squareH4", "none");
const squareH5Object = new Square("squareH5", "none");
const squareH6Object = new Square("squareH6", "none");
const squareH7Object = new Square("squareH7", "blackPawnH7");
const squareH8Object = new Square("squareH8", "blackRookH8");