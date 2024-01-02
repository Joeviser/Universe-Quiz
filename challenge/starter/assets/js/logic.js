//Create a code quiz that contains the following requirements:

//A start button that when clicked a timer starts and the first question appears.

//Questions contain buttons for each answer.
//When answer is clicked, the next question appears
//If the answer clicked was incorrect then subtract time from the clock
//The quiz should end when all questions are answered or the timer reaches 0.

//When the game ends, it should display their score and give the user the ability to save their initials and their score

//Sets of questions..->arrays of objects
//each question needs the following:
    //Question text
    //Sets of answers
    //Which answer is correct

//Landing page:
    //Explanation of the quiz
    //Start button

 //Click the start button:
    //Landing page goes away
    //Timer starts
    //The first question appears(with its answers)
    
    //For each question:
        //User clicks an answer..->buttons-->list of buttom?<ol>
        //Their choice is compared to the correct answer as stored in the question's object
        //If correct-->tell them
        //If not-->tell them and subtract time for the timer
        //Either way, the question disappears after a few seconds and the next question appears

//After the last question:
        //Timer stops
        //Question disappears
        //Form appears for user to enter their initials
        //Display their score

//User submit form
    //Initials and score get stored in the local storage
    //User is taken to the high scores page
    //High scores are listed, sorted highest to lowest
    //User has option to take the quiz again




// Selects elements by id

    const startButton= document.getElementById("start");
    const questionsDiv= document.getElementById("questions");
    const choicesUL= document.getElementById("choices");
    const startScreen=document.getElementById("start-screen");

   // const resultResponse = document.querySelector("#response");
    const resultResponse = document.querySelector("#response");
    const nextButton = document.getElementById("next");

    const endScreen= document.getElementById("end-screen");
    const finalScore= document.getElementById("final-score");
    const initialsInp= document.getElementById("initials");
    const submitButton= document.getElementById("submit");
    const timer= document.getElementById("time");
    const feedbackDiv= document.getElementById("feedback");

    const questions=[
        {
            question:"What Planet is closest to the sun?",
            choices:["1.Earth", "2.Mercury", "3.Jupiter"],
            correctAnswer:"2.Mercury"
        },
        {
            question:"There are_____Planets in The Solar System?",
            choices:["6", "10", "8"],
            correctAnswer:"8"
        },
        {
            question:"What is the biggest Measurement (distance) used for measuring galaxies",
            choices:["Kilometres", "Micrometers", "Yottameters"],
            correctAnswer:"Yottameters"
        },
    ];

let currentQuestionPosition=0;
let secondsLeft=60;
let numElements=3;

function setTime() {
    //let secondsLeft=60;
    // TODO: Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    const timerInterval = setInterval(function() {
      secondsLeft--;
      timer.textContent = secondsLeft;
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        //sendMessage();
      }
  
    }, 1000);
  }

    startButton.addEventListener("click",startQuiz);


    function startQuiz(){
        startButton.classList.add("hide");
        startScreen.classList.add("hide");
        questionsDiv.classList.remove("hide");
        setTime();
        
        displayQuestions(currentQuestionPosition);
        
    }
function showQuestions(index){
    startButton.classList.add("hide");
    startScreen.classList.add("hide");
    questionsDiv.classList.remove("hide");
  

   
    displayQuestions(index);
   
}

    function displayQuestions(index){
        var result;
        const currentQuestion=questions[index];
        document.getElementById("question-title").textContent=currentQuestion.question;



        for (let i=0; i< questions.length; i++){
            

            const listItemButton= document.createElement ("button");
            const choiceItem=currentQuestion.choices[i];
            listItemButton.textContent=choiceItem;
            choicesUL.appendChild(listItemButton);

            // Action to be performed on click-->show if the user chose the right/wrong answer
            listItemButton.addEventListener("click",function(event){
             // Prevent default action
                event.preventDefault();

                if (listItemButton.textContent=== currentQuestion.correctAnswer){
                     result= "Correct!";
                }else {
                     result= "Wrong!";
                     //If the answer clicked was incorrect then subtract 10sec from the clock
                     secondsLeft=secondsLeft-10;

                 }
                 //show the result
                resultResponse.textContent = result;
                index++;
                showQuestions(index);
                
                
            });
         }
        

     }



  