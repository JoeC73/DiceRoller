function diceRoll(num, num2, Name1) {
    console.log("this is how many side:", num, num2);
    document.getElementById("roll6").innerHTML=numberMinMax(1,7)
}




function dice() {
    console.log("button clicked")
    console.log("this is the Dice1 dice")
    numberMinMax(1, 6)
}

function dice() {
    console.log("button clicked")
    console.log("this is Dice2 dice")
    numberMINMax(1, 6)

}

function numberMinMax(min, max) {
    const diceRoll = Math.floor(Math.random() = (min + 1)) + min;
    console.log(diceRoll);
    return diceRoll;
}