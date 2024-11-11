let boxes = document.querySelectorAll('.box');
let reset = document.querySelector('#reset');
let btn=document.querySelector('#newbtn');
let msgs=document.querySelector('.msg-container');
let p=document.querySelector('#msg');

let turn0 = true;
let count=0;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener('click',() => {
        if(turn0){
            box.innerText = "X";
            turn0= false;
        }
        else{
            box.innerText = "O";
           turn0 = true; 
        }
        box.disabled = true;
        checkWinner();
    });
}) ;

const gameDraw=()=>{
    p.innerText="It's a tie";
    msgs.classList.remove('hide');
    disableBtn();
}
const disableBtn =() => {
    for(let box of boxes){
        box.disabled=true;
    } 
};

const enableBtn =() => {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    } 
};

const showWinner=(winner) => {
    p.innerText=`Congratulations! ${winner} have won the match`;
    msgs.classList.remove("hide");
    disableBtn();
};

const checkWinner = () => {
    count++;
    for (pattern of winPatterns){
        let a= boxes[pattern[0]].innerText;
        let b= boxes[pattern[1]].innerText;
        let c= boxes[pattern[2]].innerText;

        if(a != "" && b !="" && c != ""){
            if ( a  === b && b === c)
                showWinner(a);
        }
    }
    if (count === 9){
        gameDraw();
        count = 0;
    }
};

const resetGame =() => {
    count=0;
    turn0=true;
    enableBtn();
    msgs.classList.add("hide");
}


btn.addEventListener('click',resetGame);
reset.addEventListener('click',resetGame);