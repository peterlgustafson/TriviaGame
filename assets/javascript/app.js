function check () {
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unanswered = 0;

        if (question1 === "") {
          unanswered++;
        } else if (question1 === "Ben Zobrist") {
            correctAnswers++;
        } else incorrectAnswers++;
      
        if (question2 === "") {
          unanswered++;  
        } else if (question2 === "1985") {
            correctAnswers++;
        } else incorrectAnswers++;

        if (question3 === "") {
            unanswered++;
        } else if (question3 === "6") {
            correctAnswers++;
        } else incorrectAnswers++;

        if (question4 === "") {
            unanswered++;
        } else if (question4 === "Ben Gordon") {
            correctAnswers++;
        } else incorrectAnswers++;

        if (question5 === "") {
            unanswered++;
        } else if (question5 === "Matt Forte") {
            correctAnswers++;
        } else incorrectAnswers++;

        if (question6 === "") {
            unanswered++;
        } else if (question6 === "Lee Smith") {
            correctAnswers++;
        } else incorrectAnswers++;

        var messages = ["Awesome job!", "That's just okay...", "Do you even watch sports?"];
        var gifs = ["assets/images/success.gif", "assets/images/george-meh.gif", "assets/images/penguin-fail.gif"];

        var range;

            if (correctAnswers > 3) {
                range = 0;
            }
            if (correctAnswers > 1 && correctAnswers < 4) {
                range = 1;
            }
            if (correctAnswers < 2) {
                range = 2;
            }
    
    document.getElementById("after-submit").style.visibility = "visible";

    document.getElementById("message").innerHTML = messages[range];       
    document.getElementById("number-correct").innerHTML = "Correct Answers: " + correctAnswers;
    document.getElementById("number-incorrect").innerHTML = "Incorrect Answers: " + incorrectAnswers;
    document.getElementById("unanswered").innerHTML = "Unanswered Questions: " + unanswered;
    document.getElementById("gifs").src = gifs[range];

    clearTimeout(timerId);
};


//Timer Function that begins once User Starts Game and lands on Questions.html page
var timeLeft = 5;
var elem = document.getElementById("#timer");
var timerId = setInterval(countdown, 1000);

function countdown() {
if (timeLeft === 0) {
clearTimeout(timerId);
document.getElementById("timer").innerHTML = "Time is up!";
check();
} else {
$("#timer").text(timeLeft + " seconds remaining");
timeLeft--;
}
};