const progressBar = document.querySelector(".progress-bar"), 
      progressText = document.querySelector(".progress-bar")

const progress = (value) => {
    const percentage = (value / time) * 100;
    progressBar.style.width = `${percentage}%`;
    progressText.innerHTML = `${value}`;
};

let question = [],
    time = 30,
    score = 0,
    currentQuestion, 
    timer;

    const startBtn = document.querySelector(".start"),
    numQuestions = document.querySelector("#num-questions");
    category = document.querySelector("#category");
    level = document.querySelector("#level");
    time = document.querySelector("#time");
    quiz = document.querySelector(".quiz");
    startscreen = document.querySelector(".start-screen");
