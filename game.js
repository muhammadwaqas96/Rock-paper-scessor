let userChoice = 0;
let compChoice = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg-container");
let userChoicepara = document.querySelector("#user-score");
let compChoicepara = document.querySelector("#comp-score");

const genCompChoice = ()=>{
    const options = ["rock","paper","scessor"];
    const ranIdx = Math.floor(Math.random()*3);
    return options[ranIdx];
}

const drawGame = ()=>{
    console.log("game was draw.");
    msg.innerText = "game was draw.";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
}

const showWinner = (userWin) =>{
    if (userWin){
        userChoice++;
        userChoicepara.innerText = userChoice;
        console.log("You win!");
        msg.innerText = "You win";
        msg.style.backgroundColor = "green";
    }
    else {
        compChoice++;
        compChoicepara.innerText = compChoice;
        console.log("You loss!");
        msg.innerText = "You loss!";
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) =>{
    console.log("user choice",userChoice);
    const compChoice = genCompChoice();
    console.log("comp choice", compChoice);

    if (userChoice === compChoice){
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        }

        else if (userChoice === "paper"){
            userWin = compChoice === "scessor" ? false : true;
        }
        
        else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin);
    }
}
choices.forEach((choice) =>{
    // console.log(choice);
    choice.addEventListener("click", ()=>{
        
        const getAtt = choice.getAttribute("id");
        // console.log("box was clicked" , getAtt);
        // console.log(getAtt);
        playGame(getAtt);
    });
});

