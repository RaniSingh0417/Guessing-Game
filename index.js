let computerGuess;
let userGuess= [];
let userGuessUpdate =document.getElementById("textOutput");
let userNumberUpdate=document.getElementById("input-Box");
let audio1 = new Audio("./click.mp3");
let audio2 = new Audio("./incorrect.mp3");

const init = () => {
computerGuess = Math.floor(Math.random()*100);
console.log(computerGuess);
document.getElementById("newGameButton").style.display="none";
document.getElementById("gameArea").style.display="none";
};
init();

const newGameBegin= ()=>{
    audio1.play();
    window.location.reload();
}

const startGame = () =>{
    document.getElementById("gameArea").style.display="block";
document.getElementById("welcomeScreen").style.display="none";
};


// start new game
const startNewGame =() =>{
    document.getElementById("newGameButton").style.display="inline";
    userNumberUpdate.setAttribute("disabled",true);
    audio1.play();
};
// main logic of our game
const compareGuess =() =>{
    // audio1.play();
const userNumber= Number(document.getElementById("input-Box").value);
userGuess=[...userGuess,userNumber];//... is spread operator used for storing previous data
document.getElementById("guesses").innerHTML =userGuess;

// check the value Low or High
if(userGuess.length<maxGuess)
{if(userNumber > computerGuess){
    userGuessUpdate.innerHTML="Your Guess is HIGH 😲";
    userNumberUpdate.value ="";
    audio2.play();
}
else if(userNumber < computerGuess){
    userGuessUpdate.innerHTML ="Your guess is LOW 😞"
    userNumberUpdate.value ="";
    audio2.play();
}
else{
    userGuessUpdate.innerHTML="HURRAY! It's Correct 😁"
    userNumberUpdate.value ="";
    startNewGame();
    audio1.play();
}}
else{
    if(userNumber > computerGuess){
        userGuessUpdate.innerHTML= `You Loose!! Correct number was
         ${computerGuess} 😞`;
        userNumberUpdate.value ="";
        audio2.play();
        startNewGame();
    }
    else if(userNumber < computerGuess){
        userGuessUpdate.innerHTML =`You Loose!! Correct number was
        ${computerGuess} 😞`;
        userNumberUpdate.value ="";
        audio2.play();
        startNewGame();
    }
    else{
        userGuessUpdate.innerHTML="HURRAY! It's Correct 😁"
        userNumberUpdate.value ="";
        audio1.play();
        startNewGame();
    }
}
document.getElementById("Attempts").innerHTML= userGuess.length;
};

const easyMode = () =>{
    audio1.play();
    maxGuess=12;
    startGame();
};
const mediumMode = () =>{
    audio1.play();
    maxGuess=6;
    startGame();

};
const hardMode = () =>{
    audio1.play();
    maxGuess=3;
    startGame();
};