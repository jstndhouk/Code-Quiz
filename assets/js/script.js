let startbuttonEl = document.querySelector('#beginbutton');
let timeleftEl = document.querySelector('#time-left');
let answerbuttonEl = document.querySelectorAll('.answerbutton');
let questionEl = document.querySelector('#question');
let timerCount = 30;
let thisquestion=0;
var score=0;

let questions = [
    {
        question: "What does DOM stand for?",
        answers: ["Dominent Obstacle Moon","Document Object Model","Doctorate Oval Matrix","Decorate Olivia's Mom",],
        correctanswer: "Document Object Model"
    },
    {
        question: "Which of the following allows you to declare a variable?",
        answers: ["int","const","float","var",],
        correctanswer: "var"
    },
    {
        question: "Which of these allows you to assign a variable to the contents of an id or class in your HTML file?",
        answers: [".setAttribute",".length",".querySelector",".setInterval",],
        correctanswer: ".querySelector"
    },
    {
        question: "Which of the following allows a function to run, periodically depending on a described interval?",
        answers: [".timer-set",".textContent",".addEventListener",".setInterval",],
        correctanswer: ".setInterval"
    }
]


//when the start button is pressed....
startbuttonEl.addEventListener("click", function () {
        timeleftEl.textContent = 'Time Left: ' + timerCount;
//start the timer 
        var timeInterval = setInterval(function () {
            timerCount--;
            timeleftEl.textContent = 'Time Left: ' + timerCount;
            if (timerCount < 1) {
                clearInterval(timeInterval);
                alert("You have run out of time!  Try again.")
                return;
            }
            else {
            }
        }, 1000);
//make the start button go away
        startbuttonEl.setAttribute("style", "display:none");
//one by one, looped, assign the first question's answers to the buttons and make them appear.  also start listening to the event of them being clicked.
        for (i = 0; i < answerbuttonEl.length; i++) {
            answerbuttonEl[i].textContent=questions[thisquestion].answers[i];
            answerbuttonEl[i].setAttribute("style", "display:block")
            answerbuttonEl[i].addEventListener("click", function (event)
             {
                
               
//when clicked, go to the next question
                thisquestion++;
            displayNextQuestion();  
//when clicked, if the answer was correct...  
            if (event.target.innerText==questions[thisquestion].correctanswer){
                
                score++;
                console.log(score);
            }
        })}
        //questionEl.textContent = questions[thisquestion].question;


    })
     
    function displayNextQuestion(){
        for (i = 0; i < answerbuttonEl.length; i++) 
        {
            answerbuttonEl[i].textContent=questions[thisquestion].answers[i];
        }
        questionEl.textContent = questions[thisquestion].question;
     }
