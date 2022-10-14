let yCoordinate=370;
let xCoordinate=750;
let xCoordinateBody= 740;
let yCoordinateBody= 370;
let copyY=yCoordinate;
let copyX= xCoordinate;
const startButton= document.getElementById("startingButton");
let snake= document.getElementById("snake");
let snake_body= document.getElementById("snake_body");
startButton.addEventListener("click", runGame);
let coordinates=[];
let newCell;
coordinates=createBait();
let divList=[];
for(let i=0; i<10;i++){
    copyX-=10;
    let initialPart= document.createElement("div");
    initialPart.style.position="fixed";
    initialPart.style.width="10px";
    initialPart.style.height="10px";
    initialPart.style.top=copyY + "px";
    initialPart.style.left=copyX + "px";
    initialPart.style.backgroundColor= "green";
    
    snake.appendChild(initialPart);
    divList.push(initialPart);
}
function positionCheck(coordinates, xCoordinate, yCoordinate){
    if (coordinates[0]==xCoordinate && coordinates[1]==yCoordinate){
        return true
    }
    return false;

}

function runGame(){
    let tick;
    let firstTime=true;
    console.log("ilk fonk girildi.");
    
    window.addEventListener("keyup", start);
    console.log(firstTime);
    
   
    function start(event){
        document.getElementById("startingButton").style.display= "none";
        if (!firstTime){
            console.log("yo");
            clearInterval(tick);
        }
        firstTime=false;
        let key= event.key;
        console.log("ikinci fonk girildi.",key);
        tick= window.setInterval(move,50,key);

        function move(key){
            console.log("ucuncu fonk girildi.",key);
            /*let xCoordinate=snake.style.left;
            let yCoordinate=snake.style.top;*/
            
            console.log("x: ", xCoordinate, " y: ",yCoordinate);
            if(key=="ArrowUp"){
                let tempY=yCoordinate +"px";
                let tempX=xCoordinate+"px";
                let tempForTempY;
                let tempForTempX;
                yCoordinate-=10; 
                snake.style.top= yCoordinate + "px";
                for (let i=0; i < divList.length;i++){
                    
                    tempForTempY=divList[i].style.top;
                    tempForTempX=divList[i].style.left;
                    
                    divList[i].style.top= tempY;
                    divList[i].style.left= tempX;
                    tempY=tempForTempY;
                    tempX=tempForTempX;
                }
                if (positionCheck(coordinates,xCoordinate,yCoordinate)){
                    
                    newCell=eat(tempForTempX, tempForTempY,key);
                    divList.push(newCell);
                    snake.appendChild(newCell);
                    coordinates[2].remove();
                    coordinates=createBait();
                }
                if (gameOver(divList)){
                    window.alert("You have died!");
                }
                if(snake.style.top=="0px"){
                    snake.style.top="740px";
                    yCoordinate=740;
                    for(let k =0; k < divList.length;k++){
                        console.log("teleporting!!");
                        
                        divList[k].style.top="750px";

                    }
                }
            }
            else if(key=="ArrowDown"){
                let tempY=yCoordinate +"px";
                let tempX=xCoordinate+"px";
                let tempForTempY;
                let tempForTempX;
                yCoordinate+=10;
                snake.style.top= yCoordinate + "px";
                for (let i=0; i < divList.length;i++){
                    
                    tempForTempY=divList[i].style.top;
                    tempForTempX=divList[i].style.left;
                    console.log(tempForTempX, tempForTempY);
                    divList[i].style.top= tempY;
                    divList[i].style.left= tempX;
                    tempY=tempForTempY;
                    tempX=tempForTempX;
                }
                if (positionCheck(coordinates,xCoordinate,yCoordinate)){
                    
                    newCell=eat(tempForTempX, tempForTempY,key);
                    divList.push(newCell);
                    snake.appendChild(newCell);
                    coordinates[2].remove();
                    coordinates=createBait();
                }
                if (gameOver(divList)){
                    window.alert("You have died!");
                }
                if(snake.style.top=="750px"){
                    snake.style.top="10px";
                    yCoordinate=10;
                    for(let k =0; k < divList.length;k++){
                        console.log("teleporting!!");
                        
                        divList[k].style.top="0px";

                    }
                }
            }
            else if(key=="ArrowLeft"){
                let tempY=yCoordinate +"px";
                let tempX=xCoordinate+"px";
                let tempForTempY;
                let tempForTempX;
                xCoordinate-=10;
                snake.style.left= xCoordinate + "px";
                for (let i=0; i < divList.length;i++){
                
                    tempForTempY=divList[i].style.top;
                    tempForTempX=divList[i].style.left;
                    
                    divList[i].style.top= tempY;
                    divList[i].style.left= tempX;
                    tempY=tempForTempY;
                    tempX=tempForTempX;
                }
                if (positionCheck(coordinates,xCoordinate,yCoordinate)){
                    console.log("eaten!");
                    newCell=eat(tempForTempX, tempForTempY,key);
                    divList.push(newCell);
                    snake.appendChild(newCell);
                    coordinates[2].remove();
                    coordinates=createBait();
                }
                if (gameOver(divList)){
                    window.alert("You have died!");
                }
                if(snake.style.left=="0px"){
                    snake.style.left="1540px";
                    xCoordinate=1540;
                    for(let k =0; k < divList.length;k++){
                        console.log("teleporting!!");
                        
                        divList[k].style.left="1550px";

                    }
                }
            }
            else if(key=="ArrowRight"){
                let tempY=yCoordinate +"px";
                let tempX=xCoordinate+"px";
                let tempForTempY;
                let tempForTempX;
                xCoordinate+=10;
                snake.style.left= xCoordinate + "px";
                for (let i=0; i < divList.length;i++){
                    
                    tempForTempY=divList[i].style.top;
                    tempForTempX=divList[i].style.left;
                    
                    divList[i].style.top= tempY;
                    divList[i].style.left= tempX;
                    tempY=tempForTempY;
                    tempX=tempForTempX;
                }
                if (positionCheck(coordinates,xCoordinate,yCoordinate)){
                    newCell=eat(tempForTempX, tempForTempY,key);
                    divList.push(newCell);
                    snake.appendChild(newCell);
                    coordinates[2].remove();
                    coordinates=createBait();
                }
                if (gameOver(divList)){
                    window.alert("You have died!");
                }
                if(snake.style.left=="1550px"){
                    snake.style.left="10px";
                    xCoordinate=10;
                    for(let k =0; k < divList.length;k++){
                        console.log("teleporting!!");
                        
                        divList[k].style.left="0px";

                    }
                }
            }
            
           
            
        }
    }
}
function gameOver(divList){
    for (let i =1; i < divList.length; i++){
        if (divList[i].style.top== divList[0].style.top && divList[i].style.left== divList[0].style.left){
            /*console.log(divList[i].style.width, divList[0].style.width, divList[0].style.height, divList[i].style.height)*/
            return true;
        }
    }
    return false;
}
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
function createBait(){
    let baitCoordinateX= getRandomInt(1,5)*120;
    let baitCoordinateY= getRandomInt(1,5)*120;
    console.log(baitCoordinateX,baitCoordinateY);
    let bait= document.createElement("div"); 
    bait.style.position="fixed";
    bait.style.width="10px";
    bait.style.height="10px";
    bait.style.top=baitCoordinateY + "px";
    bait.style.left=baitCoordinateX + "px";
    bait.style.backgroundColor= "red";
    document.body.appendChild(bait);
    console.log("bait is created.");
    let coordinates=[]
    coordinates.push(baitCoordinateX);
    coordinates.push(baitCoordinateY);
    coordinates.push(bait);
    return coordinates;
}

function eat(xCoordinateTail, yCoordinateTail, key){
    console.log("eat function called.");
    let newCell= document.createElement("div");
    xCoordinateTail-=10;
    newCell.style.position="fixed";
    newCell.style.width="10px";
    newCell.style.height="10px";
    newCell.style.top= yCoordinateTail +"px";
    newCell.style.left= xCoordinateTail + "px";
    newCell.style.backgroundColor="green";
    
    
    return newCell;
}