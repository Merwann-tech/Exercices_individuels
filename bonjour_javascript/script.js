let firstname = prompt()
// let message = `Bonjour ${firstname} !`
let today = new Date()
console.log(today.getHours())

function sayHello(firstname,hour){
    if (hour < 18) {
        message = `Bonjour ${firstname} !`
    }
    else{
        message = `Bonsoir ${firstname} !`
    }
    console.log(message)
    // return message
}

sayHello(firstname,11)
sayHello(firstname,18)
sayHello(firstname,17)

document.querySelector('h1').innerText = sayHello(firstname,today.getHours());