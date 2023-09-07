let gameSeq =[];
let userSeq =[];
let btns = ["yellow","red","purple","green"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function (){
    if(started == false){
        console.log("game started");
        
        started = true;

        levelUp();
    }
});
function gameFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
btn.classList.remove("flash");
},250);
}
function userFlash(btn){
btn.classList.add("userflash");
setTimeout(function(){
btn.classList.remove("userflash");
},250);
}

function levelUp(){
    userSeq = [];  //reset user sequence to empty value
    level++;
    h2.innerText = `Level ${level}`;
    let randIdx = Math.floor(Math.random()*3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx);
    // console.log(randColor);
    // console.log(randbtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    //random btn choose
    gameFlash(randbtn);
}
//function for checking color
function checkAns(idx){
    // console.log("current level :",level);  check level
    
    if(userSeq[idx]===gameSeq[idx]){
        // console.log("same value");
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
        h2.innerHTML = `Game over! your Score was <b>${level} </b> <br>Press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "white";
        },300);
        reset();
    }
}

function btnPress(){
    console.log(this);
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    // console.log(userColor);   genrate what user click the color
     userSeq.push(userColor);

     checkAns(userSeq.length-1);
}
let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}
//game over reset all the value
function reset(){
    started = false;
    gameSeq = []; //reset the computer generated value
    userSeq = [];  //reset the user generated value
    level = 0;
}

