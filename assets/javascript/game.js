
var wins = 0
var loses = 0
var guessesleft = 10
var wronletters = []
var alphabet = ["a", "b", "c","f","d","g","e","h","i"]
var computerguess = alphabet[Math.floor(Math.random() * alphabet.length)]
console.log(computerguess)

document.onkeyup = function (event) {

    var userchoice = event.key
    
    if (userchoice === computerguess) {
        wins++;
        alert("you are right the letter is " + computerguess);
        
        reset(); }
    else {
        guessesleft--;
        document.querySelector("#left").innerHTML = guessesleft;
        wronletters.push(userchoice);
        document.querySelector("#wrong").innerHTML = wronletters.join(" ")
        if (guessesleft === 0) {
            loses++
            alert("you looose"); reset()
        };
    };
};
function reset() {
    guessesleft = 10;
    wronletters = [];
    computerguess = alphabet[Math.floor(Math.random() * alphabet.length)];
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#lose").innerHTML = loses;
    document.querySelector("#wrong").innerHTML = wrongletters;
    document.querySelector("#left").innerHTML = guessesleft
}



