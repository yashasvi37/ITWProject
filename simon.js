let gameSeq = [];
let userSeq = [];
let highScore=[ ];
let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;
let h2 = document.querySelector("#startgame");
 



document.addEventListener("keypress", function() {
    if (!started) {
        started = true;
        levelUp();
        let high=document.getElementById("highscore");
        let max=Math.max(...highScore);
        high.innerText=`Highest Score : ${max}`;
    }
}); 

function gameflash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userflash(btn) {
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq=[];
    level++;
    h2.innerText = `level ${level}`;
    // random button selection
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    gameflash(randbtn);
}
function reset(){
    highScore.push(level-1);
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0;
    
}
function checkAns(idx){
    
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length== gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else{
        h2.innerText=`Game Over! \nYour Score is ${level-1}\nPress any key to start again`;
        reset();
    }
}

function btnPress() {
    let btn = this;
    userflash(btn);

    let usercolor= btn.getAttribute("id");
    userSeq.push(usercolor);

    checkAns(userSeq.length-1);
}

// accessing all the buttons
let allBtns = document.querySelectorAll(".btn");
allBtns.forEach(function(btn) {
    btn.addEventListener("click", btnPress);
});


