let textDisplay = document.getElementById("display");

function play(str) {
    if (str === "Q") {
        textDisplay.innerText = "Heater 1"
    } else if (str === "W") {
        textDisplay.innerText = "Heater 2"
    } else if (str === "E") {
        textDisplay.innerText = "Heater 3"
    } else if (str === "A") {
        textDisplay.innerText = "Heater 4"
    } else if (str === "S") {
        textDisplay.innerText = "Clap"
    } else if (str === "D") {
        textDisplay.innerText = "Open HH"
    } else if (str === "Z") {
        textDisplay.innerText = "Kick n' Hat"
    } else if (str === "X") {
        textDisplay.innerText = "Kick"
    } else if (str === "C") {
        textDisplay.innerText = "Closed HH"
    }
    let audio = document.getElementById(str);
    audio.play()
}

window.document.onkeyup = function(event) {
    let keyPressed = event.key
    if (keyPressed === "q" || keyPressed === "Q") {
        textDisplay.innerText = "Heater 1"
        play("Q")
    } else if (keyPressed === "w" || keyPressed === "W") {
        textDisplay.innerText = "Heater 2"
        play("W")
    } else if (keyPressed === "e" || keyPressed === "E") {
        textDisplay.innerText = "Heater 3"
        play("E")
    } else if (keyPressed === "a" || keyPressed === "A") {
        textDisplay.innerText = "Heater 4"
        play("A")
    } else if (keyPressed === "s" || keyPressed === "S") {
        textDisplay.innerText = "Clap"
        play("S")
    } else if (keyPressed === "d" || keyPressed === "D") {
        textDisplay.innerText = "Open HH"
        play("D")
    } else if (keyPressed === "z" || keyPressed === "Z") {
        textDisplay.innerText = "Kick n' Hat"
        play("Z")
    } else if (keyPressed === "x" || keyPressed === "X") {
        textDisplay.innerText = "Kick"
        play("X")
    } else if (keyPressed === "c" || keyPressed === "C") {
        textDisplay.innerText = "Closed HH"
        play("C")
    }
}