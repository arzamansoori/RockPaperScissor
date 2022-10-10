const userScore = document.getElementById("userScoreVal");
const compScore = document.getElementById("compScoreVal");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissor = document.getElementById("s");
const userResult = document.getElementById("result-user-stat");
const compResult = document.getElementById("result-comp-stat");
const finalResult = document.getElementById("result-final-stat");
let userCount = 1;
let compCount = 1;

function computerClick() {
    const random = document.querySelectorAll(".choice");
    const randomValue = random[Math.floor(Math.random() * 3)]
    return randomValue;
}


rock.addEventListener('click', () => {
    let compValue = computerClick();
    if (compValue == rock) {
        userResult.innerHTML = "User: Rock";
        compResult.innerHTML = "Computer: Rock";
        finalResult.innerText = "Draw";
    }
    if (compValue == paper) {
        userResult.innerHTML = "User: Rock";
        compResult.innerHTML = "Computer: Paper";
        finalResult.innerHTML = "Computer Wins";
        compScore.innerText = compCount++;
    }
    if (compValue == scissor) {
        userResult.innerHTML = "User: Rock";
        compResult.innerHTML = "Computer: Scissor";
        finalResult.innerHTML = "User Wins";
        userScore.innerText = userCount++;
    }
})
paper.addEventListener('click', () => {
    let compValue = computerClick();
    if (compValue == rock) {
        userResult.innerHTML = "User: Paper";
        compResult.innerHTML = "Computer: Rock";
        finalResult.innerText = "User Wins";
        userScore.innerText = userCount++;
    }
    if (compValue == paper) {
        userResult.innerHTML = "User: Paper";
        compResult.innerHTML = "Computer: Paper";
        finalResult.innerHTML = "Draw";
    }
    if (compValue == scissor) {
        userResult.innerHTML = "User: Paper";
        compResult.innerHTML = "Computer: Scissor";
        finalResult.innerHTML = "Computer Wins";
        compScore.innerText = compCount++;
    }

})
scissor.addEventListener('click', () => {
    let compValue = computerClick();
    if (compValue == rock) {
        userResult.innerHTML = "User: Scissor";
        compResult.innerHTML = "Computer: Rock";
        finalResult.innerText = "Computer Wins";
        compScore.innerText = compCount++;
    }
    if (compValue == paper) {
        userResult.innerHTML = "User: Scissor";
        compResult.innerHTML = "Computer: Paper";
        finalResult.innerHTML = "User Wins";
        userScore.innerText = userCount++;
    }
    if (compValue == scissor) {
        userResult.innerHTML = "User: Scissor";
        compResult.innerHTML = "Computer: Scissor";
        finalResult.innerHTML = "Draw";
    }
})
