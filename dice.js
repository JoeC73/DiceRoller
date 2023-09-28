function diceRoll(num,num2,Name1) {
    console.log("this is how many side:", num, num2);
    document.getElementById(Name1).innerHTML = numberMinMax(num, num2);
}




function Dice6() {
    console.log("button clicked");
    console.log("This is the Dice6 dice");
    numberMinMax(1, 6);
    // document.getElementById("roll6").innerHTML=numberMinMax(1,7)
}

// function Dice10() {
//     console.log("button clicked")
//     console.log("This is the Dice10 dice")
//     numberMinMax(1, 10)
    // document.getElementById("roll6").innerHTML=numberMinMax(1,7)
// }

function numberMinMax(min, max) {
    const diceRoll = Math.floor(Math.random() * (max - min + 1)) + min;
    console.log(diceRoll);
    return (diceRoll);
}