// DOM elements
const progressBar = document.querySelector(".progress-bar"),
    progressText = document.querySelector(".progress-text");

// Function to update progress bar
const progress = (value) => {
    const percentage = (value / time) * 100;
    progressBar.style.width = `${percentage}%`;
    progressText.innerHTML = `${value}`;
};
// Variables
let questions = [],
    time = 30,
    score = 0,
    currentQuestion,
    timer;

// Start button and input elements
const startBtn = document.querySelector(".start"),
    numQuestions = document.querySelector("#num-questions"),
    category = document.querySelector("#category"),
    difficulty = document.querySelector("#difficulty"),
    timePerQuestion = document.querySelector("#time"),
    quiz = document.querySelector(".quiz"),
    startscreen = document.querySelector(".start-screen");

// Function to start the quiz
const startQuiz = () => {
    const num = numQuestions.value;
    const cat = category.value;
    const diff = difficulty.value;
    // Get the name input value
    const name = document.getElementById("name-input").value;

    if (name.trim().length < 4 || /\d/.test(name)) {
        // Check if the name is less than 4 characters or contains a number
        alert("Please enter a valid name with at least 4 characters and numbers not allowed.");
        return; // Stop the function execution
    }

    // API URL for fetching questions
    const url = `https://opentdb.com/api.php?amount=${num}&category=${cat}&difficulty=${diff}&type=multiple`;

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            questions = data.results;
            startscreen.classList.add("hide");
            quiz.classList.remove("hide");
            currentQuestion = 1;
            showQuestion(questions[0]);
        });
};

startBtn.addEventListener("click", startQuiz);

// Submit and Next buttons
const submitBtn = document.querySelector(".submit"),
    nextBtn = document.querySelector(".next");

// Function to display a question
const showQuestion = (question) => {
    const questionText = document.querySelector(".question");
    const answersWrapper = document.querySelector(".answer-wrapper"),
        questionNumber = document.querySelector(".number");

    questionText.innerHTML = question.question;

    // Mixing correct answer with wrong answers
    const answers = [
        ...question.incorrect_answers,
        question.correct_answer.toString(),
    ];

    answers.sort(() => Math.random() - 0.5);
    answersWrapper.innerHTML = "";
    answers.forEach((answer) => {
        answersWrapper.innerHTML += `
        <div class="answer">
            <span class="text">${answer}</span>
            <span class="checkbox">
                <span class="icon">V</span>
            </span>
        </div>
        `;
    });

    questionNumber.innerHTML = `
    Question <span class="current">${questions.indexOf(question) + 1
        }</span><span class="total">/${questions.length}</span>
    `;

    const answersDiv = document.querySelectorAll(".answer");
    answersDiv.forEach((answer) => {
        answer.addEventListener("click", () => {
            if (!answer.classList.contains("checked")) {
                answersDiv.forEach((answer) => {
                    answer.classList.remove("selected");
                });
                answer.classList.add("selected");
                submitBtn.disabled = false;
            }
        });
    });

    time = timePerQuestion.value;
    startTimer(time);
};

// Function to start the timer
const startTimer = (time) => {
    timer = setInterval(() => {
        if (time >= 0) {
            // Move progress
            progress(time);
            time--;
        } else {
            // If time finishes (reaches 0)
            checkAnswer();
        }
    }, 1000);
};

submitBtn.addEventListener("click", () => {
    checkAnswer();
});

// Function to check the selected answer
const checkAnswer = () => {
    // Clear interval when answer checked
    clearInterval(timer);

    const selectedAnswer = document.querySelector(".answer.selected");
    // Check if any answer is selected
    if (selectedAnswer) {
        const answer = selectedAnswer.querySelector(".text");
        if (answer.innerHTML === questions[currentQuestion - 1].correct_answer) {
            // If answer matches the current question's correct answer
            // Increase score
            score++;
            // Add correct class to selected answer
            selectedAnswer.classList.add("correct");
        } else {
            // If wrong selected 
            // Add wrong class to selected answer and correct class to correct answer
            selectedAnswer.classList.add("wrong");
            const correctAnswer = document.querySelectorAll(".answer");
            correctAnswer.forEach((answer) => {
                if (answer.querySelector(".text").innerHTML === questions[currentQuestion - 1].
                    correct_answer) {
                    // Add correct class only to the correct answer
                    answer.classList.add("correct");
                }
            });
        }
    }
    // Answer will also be checked when time reaches 0
    // Add correct class to correct answer
    else {
        const correctAnswer = document.querySelectorAll(".answer");
        correctAnswer.forEach((answer) => {
            if (answer.querySelector(".text").innerHTML === questions[currentQuestion - 1].
                correct_answer) {
                // Add correct class onbly to the correct answer
                answer.classList.add("correct");
            }
        });
    }

    // Block user from selecting further answers
    const answerDivs = document.querySelectorAll(".answer");
    answerDivs.forEach((answer) => {
        answer.classList.add("checked");
    });

    // Show nextBtn after submission
    submitBtn.style.display = "none";
    nextBtn.style.display = "block";
};

nextBtn.addEventListener("click", () => {
    nextQuestion();
    // Show submit btn on next question
    nextBtn.style.display = "none";
    submitBtn.style.display = "block";
});

// Function to display the next question or show the score
const nextQuestion = () => {
    if (currentQuestion < questions.length) {
        currentQuestion++;
        showQuestion(questions[currentQuestion - 1]);
    } else {
        // If there are no more questions, show the score
        showScore();
    }
};

const endScreen = document.querySelector(".end-screen"),
    finalScore = document.querySelector(".final-score"),
    totalScore = document.querySelector(".total-score");

// Function to display the final score
const showScore = () => {
    endScreen.classList.remove("hide");
    quiz.classList.add("hide");
    const userNameInput = document.getElementById("name-input");
    const userName = userNameInput.value;
    finalScore.innerHTML = `${userName}, <br>your score is ${score}`;
    totalScore.innerHTML = `/${questions.length}`;
};
// Restart button
const restartBtn = document.querySelector(".restart");
restartBtn.addEventListener("click", () => {
    window.location.reload();
});


