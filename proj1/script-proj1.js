//challenge 1: your age in days 
d = new Date(); 
function ageInDays() {
    var birthYear = prompt("what year were you born?");  
    var ageInYears = d.getFullYear() -  birthYear;
    var ageInDays = ageInYears*365;  
    document.getElementById("resuult").innerHTML = (`your age in days is ${ageInDays} and in years is ${ageInYears}`)
}  
function reset () { 
    document.getElementById("resuult").remove();
}  
// Challenge 2 : Generate Cat

function generateCat() {
    var image = document.createElement('img'); 
    var div = document.getElementById("flex-cat-gen"); 
    image.src = "./images/cat.jpg"  ;
    // image.width = "50%" 
    div.appendChild(image);
} 
function removecat() {
    var div = document.getElementById("flex-cat-gen"); 
    if(div.childNodes.length>0){
    div.removeChild(div.childNodes[0]) ;
    }
}

// Challenge 3 : Rock , paper and scissor

function rpsGame(yourChoice) { 
    var humanChoice, botChoice;
    humanChoice = yourChoice.id; 
  
    botChoice = numberToChoice(randToRpsInt());  
  
    var result = decideWinner(humanChoice, botChoice); 
    
    message = finalmessage(result); 
    console.log(message);
   
    // console.log(`human ${humanChoice} bot ${botChoice}`);
    // console.log(message); 
   
    rpsFrontEnd(humanChoice, botChoice, message)
} 

function randToRpsInt(){
    return Math.floor(Math.random()*3)
} 

function numberToChoice(number) {
    return ['rock', 'paper', 'scissor'][number]
}

function decideWinner(yourChoice, computerChoice) { 
    var rpsDatabase =  {
        'rock': {'scissor': 1, 'rock': 2, 'paper': 3}, 
        'paper': {'rock': 1, 'paper' : 2, 'scissor': 3},
        'scissor': {'paper': 1, 'scissor' : 2, 'rock': 3}
    } 
   
    return rpsDatabase[yourChoice][computerChoice] ;

} 

function finalmessage(score) {
    if(score==1) {
        return {'message': 'you won!', 'color': 'green'};
    } else if(score==2) {
        return {'message': 'tied!', 'color': 'yellow'};
    }else {
        return {'message': 'you lose!', 'color': 'red'};
    }
} 

function rpsFrontEnd(humanImgChoice,botImgChoice, finalMessage) {
    var imageDatabase = {
        'rock' : document.getElementById('rock').src,
        'paper' : document.getElementById('paper').src,
        'scissor' : document.getElementById('scissor').src
    } 
    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove(); 

    var humanDiv = document.createElement('div'); 
    var botDiv = document.createElement('div'); 
    var messageDiv = document.createElement('div');  

    humanDiv.innerHTML = "<img src = '" + imageDatabase[humanImgChoice] + "' height= 150 width=150  box-shadow: 0px 10px 50px rgba(37,53,233, 1)>";
    botDiv.innerHTML = "<img src = '" + imageDatabase[botImgChoice] + "'height= 150 width=150 style=''>"; 
    messageDiv.innerHTML = "<h2 style = 'color:" + finalMessage['color'] + "; font-size: 60px; padding:30px; '>"+ finalMessage['message']+"</h2>";

    document.getElementById("flex-box-rps-div").appendChild(humanDiv);
    document.getElementById("flex-box-rps-div").appendChild(messageDiv);
    document.getElementById("flex-box-rps-div").appendChild(botDiv);
}





// function rpsGame(yourChoice){
//     humanChoice = yourChoice.id; 
//     botChoiceOptions = [document.getElementById("rock"), document.getElementById("paper"), document.getElementById("scissor")];
//     botChoice = botChoiceOptions[Math.floor(Math.random()*botChoiceOptions.length)].id ;
//     message = decideWinner(humanChoice, botChoice);
//     console.log(message, `botchoice: ${botChoice}`);  
//     var humanChoiceElement = document.getElementById("flex-box-rps-div").childNodes[1]; 
//     humanChoiceElement.src = yourChoice.src;   
//     var messageElement = document.getElementById("flex-box-rps-div").childNodes[3] 
//     messageElement.removeChild()
// } 

// function decideWinner(h, b) {
//     if(h == "rock" && b == "paper") {
//         var flag = 0;
//     } else if(h == "rock" && b == "scissor") {
//         flag = 1;
//     } else if(h == "paper" && b == "rock") {
//         flag = 1;
//     } else if(h == "paper" && b == "scissor") {
//         flag = 0;
//     } else if(h == "scissor" && b == "rock") {
//         flag = 0;
//     } else if(h == "scissor" && b == "paper") {
//         flag =  1;
//     }else {
//         flag = 2;
//     }  
//     if(flag == 1){
//         return "you won!";
//     }else if(flag == 0) {
//         return "Computer won!" ;
//     } else{
//         return "tied!!";
//     }

// }



























