//Document Ready Function
$(document).ready(function () {

  //Variables 

  //Variable to Call Current Question
  var currentQuestion = 0;

  //Variable to log Correct Answers
  var correctAnswers = 0;

  //Variable to log Incorrect Answers
  var incorrectAnswers = 0;

  //Variable to log Unaswered Questions
  var unanswered = 0;

  //Variable to Log User's Selection
  var userChoice;

  //For 30 Second Countdown Used for Each Question
  var timer = 30;

  //Variable that holds all Trivia Questions as Nesting Objects within an Array
  var allQuestions = [{
    question: "Who was the World Series MVP for the Chicago Cubs in 2016?",
    choices: ["Ben Zobrist", "Kris Bryant", "Anthony Rizzo", "Javier Baez"],
    answer: 0
  }, {
    question: "When was the last time the Chicago Bears won the Super Bowl?",
    choices: ["1978", "1985", "1992", "2006"],
    answer: 1
  }, {
    question: "Which former Chicago Bull has met with the President of North Korea, Kim Jong-Un?",
    choices: ["Steve Kerr", "Scottie Pippen", "Dennis Rodman", "John Paxon"],
    answer: 2
  }, {
    question: "What former NBA lottery pick is the last Chicago Bull to win the league’s 6th man of the year award?",
    choices: ["Kirk Hinrich", "Ben Gordon", "Tyrus Thomas", "Elton Brand"],
    answer: 1
  }, {
    question: "Walter Payton is the Bears all-time leader in rushing yards. What former Bears RB ranks #2?",
    choices: ["Gale Sayers", "Neal Anderson", "Rick Casares", "Matt Forte"],
    answer: 3
  }, {
    question: "What 7-time All-Star reliever has the most saves in Chicago Cubs history?",
    choices: ["Lee Smith", "Bruce Sutter", "Carlos Marmol", "Randy Myers"],
    answer: 0
  }
];

  //Function to Use to Loop Through All Questions
  function triviaQuizQuestion(question, choices, answer){
    this.question = question;
    this.choices = choices;
    this.answer = answer;
  };




  //Function to Start Game once Start Button is Clicked
  //Show 1st Question & choices w/ a 30 Second Timer with ability for user to select their answer
  //After user submits answer show if the user selction is correct or incorrect along w/ corresponding image
  //if timer === 0 show message that time is up and show correct answer along w/corresponding image

  // Use jQuery to run "startTriviaQuiz" when user click the "start" button.
$("#start-button").on("click", function () {
  alert("Test");
  startTriviaQuiz();
});

startTriviaQuiz = function () {
  $("#question").html(triviaQuestions[0]);
}

function displayQuestion() {
  $("#question").html(questions[count])
};


  // $("#start-button").on("click", function () {
  //   $(".jumbotron").html("<div>");
  //   $(".jumbotron").

  //   // $(".timer-countdown").text("Time is up in " + secondsRemaining + " seconds");
  // });

//Function to Show Questions 2-6
//30 Second Timer, show if the user selction is correct or incorrect, 
//if timer runs out show message that time is up and show correct answer

//Function to show Final Results Page
//Show # of Correct Answers, Incorrect Answers & # of Questions Unanswered 

//Function to Reset Game: On Results page have a "Start Over" button that executes Reset function which resets back to 1st question





});
