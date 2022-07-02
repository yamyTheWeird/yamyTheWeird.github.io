window.onload= function(){
    //importing html elements and specifically elements form class name "boxes" and converting boxes to an array for foreach function
    const boxes=Array.from(document.getElementsByClassName("boxes"));
    const player = document.ge 
    const backDrop = document.getElementById("backDrop");
    const textColor = document.getElementById  ("title");
    const reset = document.getElementById("reset");
    let playerOne = document.getElementById("p1");
    let playerTwo =document.getElementById("p2");
    
    //creating a board to store value of each TTT board(useful for checking if any match has been made)
   
    let board = [1,2,3,4,5,6,7,8,9];
     //arraylist stores boxes that have already been clicked
     
    let arrayList = [];
    //toggle boolean indicated if turn is for player one or player two
     let toggle = true;
    //isGame allows to stop eventlistener when winner has been found

    let isGame = true;
  //  index of box allows to identify the exact box that has been pressed. this allows board to store value in the right undex

    //player scores
    let score1 =0;
    let score2 = 0;
    let counter = 0;
    

//resets game for replay
    const resetGame = function (){
                
                arrayList.length  =0;
                counter = 0;
                board = [1,2,3,4,5,6,7,8,9];
        boxes.forEach(
        box=> {
                box.style.background = "#52FFA8";
                box.textContent= "\u00a0"; 
            })
                isGame = true;
                toggle = true;
                
                reset.style.borderColor= "#52FFA8"
                reset.style.color="#52FFA8"
                p1.style.color= "#52FFA8"
                p2.style.color= "#52FFA8"
                backDrop.style.boxShadow = "0 0 10px #52FFA8";
                textColor.style.color="#52FFA8";
                
                reset.removeEventListener("click", resetGame);
                gamePlay()
            }
            
            
            
//sets isgame to false and allows reset button to be triggered         
    const endGame = function (){
                      backDrop.style.boxShadow = "0 0 40px #C9F7FF";
                      textColor.style.color="#C9F7FF";
                      reset.style.borderColor= "#c9F7FF"
                     reset.style.color="#C9F7FF"
                        p1.style.color= "#C9F7FF"
                        p2.style.color= "#C9F7FF"
                      isGame = false;
                      boxes.forEach(
        boxOg=> {
               boxOg.click()   
  //
            })
                      //reset.addEventListener("click", resetGame);
    }
    
// checks if theres a winner on the board  
    const boardChecker = function(){
        if ((board[0] === board[1] && board[0] === board[2]) || 
        (board[0] === board[3] && board[0] === board[6]) || 
        (board[0] === board[4] && board[0] === board[8]) ||
        (board[1] === board[4] && board[1] === board[7]) ||
        (board[2] === board[5] && board[2] === board[8]) ||
        (board[3] === board[4] && board[3] === board[5]) ||
        (board[6] === board[7] && board[6] === board[8]) ||
        (board[2] === board[4] && board[2] === board[6])){
        //console.log("win",board);
            return true;
        }else{
            return false;
        }
    }
    
    
 //for editing  color of winning box
    const boxSelector =function(indexa, indexb, indexc){
                      boxes[indexa].style.background = "linear-gradient(to bottom right, #68C3D4, #C9F7FF)"
                      boxes[indexb].style.background = "linear-gradient(to bottom right, #68C3D4, #C9F7FF)"
                        boxes[indexc].style.background = "linear-gradient(to bottom right, #68C3D4, #C9F7FF)"
    
            //increases score count
            if (board[indexa] === "x"){
                score1++;
            }
            else{
                score2 ++;
            }
    }
    

 //checks for exact winning box and calls the function to color winning box   
    const boardShow = function() {
        if ((board[0] === board[1] && board[0] === board[2])){
            boxSelector(0,1,2);
        }
        if ((board[0] === board[3] && board[0] === board[6])){
            boxSelector(0,3,6);
        }
        if ( (board[0] === board[4] && board[0] === board[8])){
            boxSelector(0,4,8);
        }
        if (  (board[1] === board[4] && board[1] === board[7])){
            boxSelector(1,4,7);
        }
        if ( (board[2] === board[5] && board[2] === board[8])){
            boxSelector(2,5,8);
        }
        if ( (board[3] === board[4] && board[3] === board[5])){
            boxSelector(3,4,5);
        }
        if ((board[6] === board[7] && board[6] === board[8])){
            boxSelector(6,7,8);
        }
        if ( (board[2] === board[4] && board[2] === board[6])){
            boxSelector(2,4,6);
        }
    }
    
 const eventAdder = box => {
     //console.log("ping")
     box.addEventListener("click", function colorer(){
            if(isGame === true){
               
                
                 if (toggle){
                 box.innerText= "x";
                 board[boxes.indexOf(box)] = "x";
                 toggle = !toggle;
                box.style.background = "radial-gradient(#52FFA8, #449d70)";}
                else{
                     box.innerText= "o";
                     board[boxes.indexOf(box)] = "o";
                     toggle = !toggle;
                     box.style.background = "radial-gradient(#52FFA8, #449d70)";}
                     
                     
               
               box.removeEventListener("click", colorer);
               counter++;
               arrayList.push(box);
              // console.log(arrayList.length, toggle, box );
               
                
                checkBoard= boardChecker();
                if(checkBoard === true){
                    boardShow();
                    playerOne.innerText  = score1;
                    playerTwo.innerText = score2;
                    endGame();
                    if(arrayList.length ===9){
                        reset.addEventListener("click", resetGame);}
                             
            }
                
                
               if (arrayList.length  === 9 && checkBoard === false){
               
              // console.log(board)
                for(let i = 0; i<boxes.length; i++){
                      boxes[i].style.background = "linear-gradient(to bottom right, #68C3D4, #C9F7FF)";
            }     
                endGame();
                reset.addEventListener("click", resetGame);
     
}
 
 }else{
     box.removeEventListener("click", colorer);
     //console.log("removed")
     arrayList.push(box);
     if(arrayList.length ===9){
     reset.addEventListener("click", resetGame);
     //reset.style.borderColor= "#c9F7FF"
     //reset.style.color="#C9F7FF"
     }
 }
 
 })  
 }
    
    
//Main Function

    const gamePlay= function(){
    //console.log("checklist", board, arrayList, toggle, counter)
    boxes.forEach(
        boxOg=> {
               eventAdder(boxOg)   
  //
            })
            }
            
        gamePlay();
            
}