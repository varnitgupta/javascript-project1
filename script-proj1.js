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

//challenge 4 : change the colors of all buttons  
 
var all_buttons  = document.getElementsByTagName("button"); 
var copyAllButtons =  []; 
for(let i = 0; i<all_buttons.length; i++) {
    copyAllButtons.push(all_buttons[i].classList[1])
}  


function buttonColorChange(buttonThingy) { 
    if(buttonThingy.value === 'red') { 
        buttonsRed()
    } else if(buttonThingy.value === 'green') { 
        buttonsGreen()
    } else if(buttonThingy.value === 'random') { 
        randomColors()
    } else if(buttonThingy.value === 'reset') { 
        buttonColorReset()
    } 

} 

function buttonsRed() {
    for(let i = 0; i<all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]); 
        all_buttons[i].classList.add("btn-danger");
    } 
}
function buttonsGreen() {
    for(let i = 0; i<all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]); 
        all_buttons[i].classList.add("btn-success");
    }
}  
function randomColors()
{ 
    for(let i = 0; i<all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);  
        all_buttons[i].classList.add(copyAllButtons[Math.floor(Math.random()*all_buttons.length)]); 
        
    }
} 

function buttonColorReset() { 
    for(let i = 0; i<all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);   
        all_buttons[i].classList.add(copyAllButtons[i]);  
    }    
}




// Challengef 5: Blackjack

let blackjackGame = {
    'you' : {'scoreSpan' : '#your-blackjack-result', 'div': '#your-box', 'score': 0},
    'dealer' : {'scoreSpan' : '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0}, 
    'cards': ['2','3','4','5','6','7','8','9','10','K','J','Q','A'], 
    'cardCount' : {'1':1, '2':2, '3':3, '4':4,'5':5, '6':6,'7':7,'8':8,'9':9,'10':10,'K':10,'J':10,'Q':10,'A': [1, 11]},
}; 


var YOU = blackjackGame['you'];
var DEALER = blackjackGame['dealer'];  
var cardScore = blackjackGame['cardCount']  
var onetime = 0; 
var dealTime = 1;

const hitSound = new Audio('./sounds/swish.m4a') 
const winSound = new Audio('./sounds/cash.mp3') 
const lostSound = new Audio('./sounds/aww.mp3')

document.querySelector('#blackjack-hit-button').addEventListener('click', blackjackHit);  
document.querySelector('#blackjack-deal-button').addEventListener('click', blackjackDeal); 
document.querySelector('#blackjack-stand-button').addEventListener('click', blackjackStand);  



function blackjackHit() { 
    if(onetime<1) { 
        let card = randomCard(); 
        showCard(YOU, card);  
        updateScore(YOU,card)  ;
        showScore(YOU);}
}  

function sleep(ms) {
    return new Promise(resolve=>setTimeout(resolve,ms)); }

async function blackjackStand() {
    while(DEALER['score']<=16 && onetime<2)
    {
        onetime = 1;
        let card = randomCard() ;
        showCard(DEALER, card); 
        updateScore(DEALER,card);
        showScore(DEALER);  
        await sleep(500);
    }

        if(DEALER['score']>16) {
            computeWinner(); 
        } 
        dealTime = 4;
    
}   
function showCard(activePlayer, randomHitImage) {
    if(activePlayer['score']<=21) {
        let cardImage = document.createElement('img');
        cardImage.src = `./images/${randomHitImage}.png` ;  
    // cardImage.style = 'width: 100px';
    document.querySelector(activePlayer['div']).appendChild(cardImage);  
    hitSound.play(); }
    
}  

function randomCard() {
    let randomIndex = Math.floor(Math.random()*13) ;
    return(blackjackGame['cards'][randomIndex]); 
} 

function updateScore(activePlayer,hitCard) { 

    if(hitCard ==='A') {
        let flag = activePlayer['score'] + blackjackGame['cardCount'][hitCard][1]  
        if(flag>21) {
            activePlayer['score'] += blackjackGame['cardCount'][hitCard][0]
        }else {
            activePlayer['score'] += blackjackGame['cardCount'][hitCard][1]
        }  
    } else {
        activePlayer['score'] += blackjackGame['cardCount'][hitCard]
    }
}


function showScore(activePlayer) {
    if(activePlayer['score']>21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'BUST!'; 
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red'
    }else{
    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'] ;}
}


function blackjackDeal() { 
    // computeWinner();

    if(dealTime===4)
    {let yourImages = document.querySelector('#your-box').querySelectorAll('img') ;
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img') ;

    for(let i = 0; i<yourImages.length;i++) {
        yourImages[i].remove();     
    }
    for(let i = 0; i<dealerImages.length;i++) {
        dealerImages[i].remove();     
    } 
    YOU['score'] = 0;
    DEALER['score'] = 0;  
    onetime = 0; 
    dealTime = 1;

    document.querySelector('#your-blackjack-result').textContent = 0;
    document.querySelector('#dealer-blackjack-result').textContent = 0;
    document.querySelector('#your-blackjack-result').style.color = '#ffffff';
    document.querySelector('#dealer-blackjack-result').style.color = '#ffffff'; 
    document.querySelector('#blackjack-result').textContent = "Let's Play"; 
    document.querySelector('#blackjack-result').style.color = 'black'; 
 }

}
function computeWinner() {
    let winner; 

    if(YOU['score']<=21) {
        if(YOU['score']>DEALER['score'] || DEALER['score']>21) {
            console.log('YOU WON!');
            winner=YOU;
        } else if(YOU['score']<DEALER['score']) {
            console.log('YOU LOST!');
            winner=DEALER;
        } else if(YOU['socre']===DEALER['score']) {
            console.log('YOU DREW!');
        }
    } else if(YOU['score']>21 && DEALER['score']<=21) {
        console.log('YOU LOST!');
        winner = DEALER;
    } else if (YOU['score']>21 && DEALER['score']>21) {
        console.log('YOU DREW!');
    }  

    console.log('winner is', winner);  
    showResult(winner)
    

} 

function showResult(winner) {
    let message, messageColor; 
    if(winner === YOU) {
        message = 'YOU WON!' ;
        messageColor = 'green' ;
        winSound.play();  
    } else if(winner === DEALER) {
        message = 'YOU LOST!' ;
        messageColor = 'red' ;
        lostSound.play();  
    }else {
        message = 'YOU DREW!' ;
        messageColor = 'blue' ;
        lostSound.play(); 
    } 
    document.querySelector('#blackjack-result').textContent = message; 
    document.querySelector('#blackjack-result').style.color = messageColor; 
    scoreBoard(message)

}

function scoreBoard(result) { 
    if(result=== 'YOU WON!') {
        document.querySelector('#wins').textContent++;
    }
    else if(result=== 'YOU LOST!') {
        document.querySelector("#lossses").textContent++;
    }
    else if(result=== 'YOU DREW!') {
        document.querySelector("#draws").textContent++;
    } 
    onetime = 2;

}



























