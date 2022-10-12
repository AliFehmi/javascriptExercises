class Board{

    constructor(letter, number){
        this.letter=letter;
        this.number=number;
    }
}
let myBoard=[new Board("","1"), new Board("","2"), new Board("","3"), new Board("","4"), new Board("","5")
, new Board("","6"), new Board("","7"), new Board("","8"), new Board("","9")];

let round=0;
let winX=false;
let winO=false;
function checkWin(currentBoard, playerCh){
    for(let i=0; i<3; i++){
        if (currentBoard[i].letter==playerCh && currentBoard[i+3].letter==playerCh&& currentBoard[i+6].letter==playerCh){
            return true;
        }
    }
    for(let i=0; i<=6; i+=3){
        if(currentBoard[i].letter==playerCh&& currentBoard[i+1].letter==playerCh && currentBoard[i+2].letter==playerCh){
            return true;
        }
    }
    if (currentBoard[0].letter==playerCh && currentBoard[4].letter==playerCh && currentBoard[8].letter==playerCh){
        return true;
    }
    else if (currentBoard[6].letter==playerCh && currentBoard[4].letter==playerCh && currentBoard[2].letter==playerCh){
        return true;
    }
    return false
}


document.getElementById("submitButton").onclick= function(){
    console.log("round is, "+round);
    let numOfCell= document.getElementById("textInput").value;
    if (myBoard[numOfCell-1].letter!= ""){
        console.log("ok");
        document.getElementById("wrongInput").innerHTML= "The cell has already been claimed!";
    }
    else{
    if(round%2==0){
        myBoard[numOfCell-1].letter="X";
        document.getElementById("box"+numOfCell).innerHTML="X";
        winX=checkWin(myBoard, "X");
        if (winX){
            document.getElementById("Win Condition").innerHTML= "Player X has won!";
            window.alert("Player X has won!")
        }
        document.getElementById("textLabel").innerHTML="Enter a slot number to place O in:";
    }
    else{
        myBoard[numOfCell-1].letter="O";
        document.getElementById("box"+numOfCell).innerHTML="O";
        winO= checkWin(myBoard, "O")
        if (winO){
            document.getElementById("Win Condition").innerHTML= "Player O has won!";
            window.alert("Player O has won!")
        }
        document.getElementById("textLabel").innerHTML="Enter a slot number to place X in:";
    }
     round+=1;
    }
    if (round==9){
        document.getElementById("Win Condition").innerHTML= "Game is over it is a tie."
        window.alert("Game is over it is a tie.")
    }
}

