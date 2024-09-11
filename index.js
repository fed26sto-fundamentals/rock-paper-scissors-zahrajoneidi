var userPaper = document.getElementById('userPaper')
var userRock = document.getElementById('userRock')
var userScissor = document.getElementById('userScissor')
var comPaper = document.getElementById('comPaper')
var comRock = document.getElementById('comRock')
var comScissor = document.getElementById('comScissor')
var start = document.getElementById('start')
var comScore = document.getElementById('comScore')
var userScore = document.getElementById('userScore')

var options = ['Rock','Paper','Scissor']

var userOption

userPaper.addEventListener('click',()=>selectUserOption(userPaper,options[1]))
userRock.addEventListener('click',()=>selectUserOption(userRock, options[0]))
userScissor.addEventListener('click',()=>selectUserOption(userScissor, options[2]))

start.addEventListener('click',runGame)



function selectUserOption(element,option){
    userPaper.style=null
    userRock.style=null
    userScissor.style=null
    comPaper.style=null
    comRock.style=null
    comScissor.style=null
    element.style.borderWidth=1;
    element.style.borderColor='green';
    element.style.borderStyle='solid';
    userOption = option
}

function generateCompOption(){
    const randomNumber = Math.floor(Math.random()*3)
    return options[randomNumber]
}

function checkWinner(user,computer){
    if(user===computer) return null;

    if(user===options[0] && computer===options[1]){
        return computer
    }
    if(user===options[1] && computer===options[2]){
        return computer
    }
    if(user===options[2] && computer===options[0]){
        return computer
    }

    return user

}

function runGame(){
    var compOption = generateCompOption()
    var winner = checkWinner(userOption,compOption);
    var isUserWinner = winner === userOption
    var element = document.getElementById('com'+compOption)
    element.style.borderWidth=1;
    element.style.borderColor='green';
    element.style.borderStyle='solid';
    if(winner===null){
        userScore.innerText = ''
        comScore.innerText = ''    
    } else if (isUserWinner){
        userScore.style.color='green'
        comScore.style.color='red'
        userScore.innerText = 'Winner'
        comScore.innerText = 'Loser'
    } else {
        comScore.style.color='green'
        userScore.style.color='red'
        comScore.innerText = 'Winner'
        userScore.innerText = 'Loser'
    }
}



