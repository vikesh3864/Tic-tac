let boxes=document.querySelectorAll('.box');
let resetBtn=document.querySelector('#reset-btn');
let msgContainer=document.querySelector('.msg-container')
let newGameBtn = document.querySelector('#new-btn');
let msg=document.querySelector('#msg')
let turn0=true;
const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=function(){
    turn0=false;
    enableBoxes()
    msgContainer.classList.add('hide')
    msg.innerText=""
}
const enableBoxes=function(){
    for(let box of boxes){
        box.disabled=false;
        box.innerText=""
    }
};


boxes.forEach(function(box){
box.addEventListener('click',function(){
    console.log("box was clicked");
    if(turn0){
        box.innerText='0';
        turn0=false;
    }else{
        box.innerText='X'
        turn0=true;
    }
    box.disabled=true;
    checkWinner()
});

});
 const disableBoxes=function(){
     for(let box of boxes){
         box.disabled=true;
     }
 };
const showWinner=function(winner){
    msg.innerText=`congratulations,winner is ${winner}`;
    msgContainer.classList.remove('hide')
    disableBoxes(boxes);
}
const checkWinner=function(){
for(let pattern of winPattern){
    let pos1val=boxes[pattern[0]].innerText
    let pos2val=boxes[pattern[1]].innerText
    let pos3val=boxes[pattern[2]].innerText
    
    if(pos1val !="" && pos2val !="" && pos3val !==""){
        if(pos1val==pos2val && pos2val==pos3val){
            console.log("Winner",pos1val)
            showWinner(pos1val)
        }
    }

}
}

newGameBtn.addEventListener('click',resetGame)
resetBtn.addEventListener('click',resetGame)