let randomNumber = giveRandomNumber()
let tentative = 1
const button = document.querySelector('button');
const h1 = document.querySelector('h1')
const body = document.querySelector('body')
const Moins = document.querySelector('#moins')
const Plus = document.querySelector('#plus')


function giveNumber(){
    return document.getElementById("in").value;
    // return prompt(`choisis un nombre compris entre 1 et 50`)
}

function giveRandomNumber(){
    let num = prompt(`Choisis un nombre a faire deviner compris entre 1 et 50`)
    while (num > 50 || num < 0 ){
        num = prompt(`Choisis un nombre a faire deviner compris entre 1 et 50`)
    }
    return parseInt(num)
}



function didIWin(givenNumber,randomNumber){
    if (givenNumber == randomNumber){
        body.innerHTML = '<h1>Bravo ! Vous avez deviné le nombre en seulement ' + tentative + ' tentative'
        // alert(`Bravo ! Vous avez deviné le nombre`)
        // return true
    }
    else if (givenNumber > randomNumber){
        h1.innerText = 'Le nombre est plus petit \n  tentative numéro :' + tentative
        let num = parseInt(Plus.innerText)
        if (givenNumber<num){
            Plus.innerText = givenNumber
        }
        tentative = tentative +1
        // alert(`Plus petit`)
        // return false
    }
    else if (givenNumber < randomNumber){
        h1.innerText = 'Le nombre est plus grand \n  tentative numéro :' + tentative
        var num1 = parseInt(Moins.innerText);
        if (givenNumber > num1){
            Moins.innerText = givenNumber
        }
        tentative = tentative +1
        // alert(`Plus grand`)
        // return false
    }
}

// function gamePlay(){
//     let randomNumber = giveRandomNumber()
//     // let randomNumber = 5
//     let givenNumber = parseInt(giveNumber())
//     while (didIWin(givenNumber,randomNumber) == false){
//         givenNumber = giveNumber()
//     }
// }



button.addEventListener('click', () => {
    let givenNumber = parseInt(giveNumber())
    didIWin(givenNumber,randomNumber)
})

