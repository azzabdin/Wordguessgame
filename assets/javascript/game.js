
var wins = 0
var loses = 0
var guessesleft = 10
var wrongletters = []
var alphabet = ["a", "b", "c", "f", "d", "g", "e", "h", "i", "v", "o", "j", "s", "u", "t"]
var computerguess = alphabet[Math.floor(Math.random() * alphabet.length)]
console.log(computerguess)

document.onkeyup = function (event) {
    
    var userchoice = event.key

    if (userchoice === computerguess) {
        wins++;
        alert("you are right the letter is " + computerguess);
        reset();
    }
    else {
        guessesleft--;
        document.querySelector("#left").innerHTML = guessesleft;
        wrongletters.push(userchoice);
        document.querySelector("#wrong").innerHTML = wrongletters.join(" ")
        if (guessesleft === 0) {
            loses++
            alert("you looose the letter is " + computerguess);
            reset()
        };
    };
};
function reset() {
   
    guessesleft = 10;
    wrongletters = [];
    computerguess = alphabet[Math.floor(Math.random() * alphabet.length)];
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#lose").innerHTML = loses;
    document.querySelector("#wrong").innerHTML = wrongletters;
    document.querySelector("#left").innerHTML = guessesleft
}



