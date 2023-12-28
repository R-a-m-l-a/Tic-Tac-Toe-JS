let allBoxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true; //player0

const winPatterens=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];
const resetGame=()=>{
  turnO=true;
  enableBoxes();
  msgContainer.classList.add("hide");
}

allBoxes.forEach((box)=>{
    box.addEventListener("click",()=>{

      if(turnO)
      {
        box.innerText="O";
        turnO=false;
      }
      else{
        box.innerText="X";
        turnO=true;
      }
      box.disabled=true;

      checkWinner(); 
    });
});

const disableBoxes=()=>{
for(box of allBoxes){
  box.disabled=true;
}
};

const enableBoxes=()=>{
  for(box of allBoxes){
    box.disabled=false;
    box.innerText="";
  }
  }



const showWinner=(winner)=>{
 
 msg.innerHTML=`Conratulations! Winner is ${winner}`;
 msgContainer.classList.remove("hide");
 disableBoxes();
};

const checkWinner=()=>{
    for(let pattern of winPatterens)
    {
        // console.log(
        //     pattern[0],
        //     pattern[1]
        //     pattern[2]); FOR showing patterens of 2d array 
        
            let pos1=allBoxes[pattern[0]].innerText;
            let pos2=allBoxes[pattern[1]].innerText;
            let pos3=allBoxes[pattern[2]].innerText;

            if(pos1 !="" && pos2 !="" &&pos3 !="")
            {
              if(pos1===pos2 && pos2===pos3){
                showWinner(pos1);
              }
            }
        
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame)