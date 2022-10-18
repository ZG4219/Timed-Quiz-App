var questionBank= [
    {
        question : 'What does HTML stand for?',
        option : ['Hyper Text Preprocessor',
                 'HyperText Markup Language',
                 'Hyper Text Multiple Language',
                 'Hyper Tool Multi Language'],
        answer : 'HyperText Markup Language'
    },
    {
        question : 'What does CSS stand for?',
        option : ['Common Style Sheet','Colorful Style Sheet','Computer Style Sheet','Cascading Style Sheet'],
        answer : 'Cascading Style Sheet'
    },
    {
        question : 'What does DOM stand for?',
        option : ['Document Object Model','Document Object Math','Document Observation Model','Documentary Object Model'],
        answer : 'Document Object Model'
    },
    {
        question : 'What is the Programming Language of the Web?',
        option : ['HTML','CSS','API','JavaScript'],
        answer : 'JavaScript'
    },
    {
        question : 'What does API stand for?',
        option : ['Application Programmer Interface','Application Programming Interface','Applicator Programming Interface',
                'Apps Programming Interface'],
        answer : 'Application Programming Interface'
    }
]

var timer= document.getElementById('timer');
var question= document.getElementById('question');
var quizContainer= document.getElementById('quiz-container');
var scorecard= document.getElementById('scorecard');
var option0= document.getElementById('option0');
var option1= document.getElementById('option1');
var option2= document.getElementById('option2');
var option3= document.getElementById('option3');
var next= document.querySelector('.next');
var points= document.getElementById('score');
var span= document.querySelectorAll('span');
var i=0;
var score= 0;

//function to display questions
function displayQuestion(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none';
    }
    question.innerHTML= 'Q.'+(i+1)+' '+questionBank[i].question;
    option0.innerHTML= questionBank[i].option[0];
    option1.innerHTML= questionBank[i].option[1];
    option2.innerHTML= questionBank[i].option[2];
    option3.innerHTML= questionBank[i].option[3];
    stat.innerHTML= "Question"+' '+(i+1)+' '+'of'+' '+questionBank.length;
}

//function to calculate scores
function calcScore(e){
    if(e.innerHTML===questionBank[i].answer && score<questionBank.length)
    {
        score= score+1;
        document.getElementById(e.id).style.background= 'limegreen';
    }
    else{
        document.getElementById(e.id).style.background= 'red';
    }
    setTimeout(nextQuestion,300);
}


var timer = 30;
var startBtn = document.querySelector('.start')
startBtn.addEventListener('click', function(){


var interval = setInterval(function(){
    document.getElementById('timer').innerHTML=timer;
    timer--;
    if (timer === 0){
      clearInterval(interval);
      document.getElementById('timer').innerHTML='Time is up!';
      
    }
   
  }, 1000);
})
//function to display next question
function nextQuestion(){
    if(i<questionBank.length-1)
    {
        i=i+1;
        displayQuestion();
    }
    else{
        points.innerHTML= score+ '/'+ questionBank.length;
        quizContainer.style.display= 'none';
        scoreboard.style.display= 'block'
    }

}

var nextBtn = document.querySelector('.next')
//click events to next button
nextBtn.addEventListener('click',nextQuestion,);

//Back to Quiz button event
function backToQuiz(){
    location.reload();
}

//function to check Answers
function checkAnswer(){
    var answerBank= document.getElementById('answerBank');
    var answers= document.getElementById('answers');
    answerBank.style.display= 'block';
    scoreboard.style.display= 'none';
    for(var a=0;a<questionBank.length;a++)
    {
        var list= document.createElement('li');
        list.innerHTML= questionBank[a].answer;
        answers.appendChild(list);
    }
}

displayQuestion();