let startbuttonEl = document.querySelector('#beginbutton');
let timeleftEl = document.querySelector('#time-left');
let answerbuttonEl = document.querySelectorAll('.answerbutton');
let questionEl = document.querySelector('#question');
let timerCount = 300;
let thisquestion = 0;
let score = 0;
let titleEl=document.querySelector('#title');
let scoresEl=document.querySelector('#scores');
let highscores =JSON.parse(window.localStorage.getItem("highscores")) || [];
let questions = [
    {
        question: "What does DOM stand for?",
        answers: ["Dominent Obstacle Moon", "Document Object Model", "Doctorate Oval Matrix", "Decorate Olivia's Mom",],
        correctanswer: "Document Object Model"
    },
    {
        question: "Which of the following allows you to declare a variable?",
        answers: ["int", "const", "float", "var"],
        correctanswer: "var"
    },
    {
        question: "Which of these allows you to assign a variable to the contents of an HTML element?",
        answers: [".setAttribute", ".length", ".querySelector", ".setInterval",],
        correctanswer: ".querySelector"
    },
    {
        question: "Which of the following allows a function to run, periodically depending on a described interval?",
        answers: [".timer-set", ".textContent", ".addEventListener", ".setInterval",],
        correctanswer: ".setInterval"
    },
    {
        question: "Who is the queen of rap?",
        answers: ["Nikki Minaj", "Cardi B", "Megan Thee Stallion", "Lil' Kim",],
        correctanswer: "Nikki Minaj"
    }
    
]
startbuttonEl.addEventListener("click", function () {
    timeleftEl.textContent = 'Time Left: ' + timerCount;
    var timeInterval = setInterval(function () {
        timerCount--;
        timeleftEl.textContent = 'Time Left: ' + timerCount;
        if (timerCount < 1) {
            clearInterval(timeInterval);
            alert("You have run out of time!  Try again.")
            return;
        }
    }, 1000);
    startbuttonEl.setAttribute("style", "display:none");
    displayNextQuestion();
    for (i = 0; i < answerbuttonEl.length; i++) {
        answerbuttonEl[i].setAttribute("style", "display:block")
        answerbuttonEl[i].addEventListener("click", function (event) {
            if (event.target.innerText == questions[thisquestion-1].correctanswer) {
                score++;
                console.log("Current score:" +score)
            }
            else {
                timerCount = timerCount - 5;
                timeleftEl.setAttribute('style', "color:red");
                setTimeout(function () {
                    timeleftEl.setAttribute('style', "color:black")
                }, 250);
            }
            if (thisquestion == questions.length) {
                displayHighScores();
            }
            else {
                displayNextQuestion()
            }
        })
    }
})

function displayNextQuestion() {

    questionEl.textContent = questions[thisquestion].question;
    for (i = 0; i < answerbuttonEl.length; i++) {
        answerbuttonEl[i].textContent = questions[thisquestion].answers[i];
    }
    thisquestion++
}

function displayHighScores() {
    for (i = 0; i < answerbuttonEl.length-1; i++) {
        answerbuttonEl[i].setAttribute("style", "display:hidden")}
        questionEl.textContent = "";    
        titleEl.textContent="Highscores";
        let initials=prompt("Enter your initials to save your score.");
        let newscore={initials, score};
        highscores.push(newscore);
        for(i=0; i<highscores.length; i++){
            let eachscore=highscores[i]
            console.log(eachscore)
            questionEl.textContent=("high score" + eachscore.score);
        }
        localStorage.setItem('highscores',JSON.stringify(highscores)); 
        
        
        
}
