const questions = [
    {
        question: "What is the capital of France?", answers: ["Paris", "London",
            "Rome", "Berlin"], correct: 0
    },
    {
        question: "Which planet is known as the Red Planet?", answers: ["Earth",
            "Mars", "Jupiter", "Saturn"], correct: 1
    },
    {
        question: "Who wrote 'Hamlet'?", answers: ["Shakespeare", "Hemingway",
            "Tolkien", "Austen"], correct: 0
    },
    // Add 17 more questions here 
];

let shuffledQuestions, currentQuestionIndex, score, totalTime, timer;

const startButton = document.getElementById("start-button");
const quizContent = document.getElementById("quiz-content");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-button");
const scoreDisplay = document.getElementById("score-display");
const timerDisplay = document.getElementById("timer");

startButton.addEventListener("click", startGame);

function startGame() {
    startButton.style.display = "none";
    quizContent.style.display = "block";
    score = 0;
    totalTime = 0;
    shuffledQuestions = [...questions].sort(() => Math.random() - 0.5);
    currentQuestionIndex = 0;
    scoreDisplay.textContent = `Score: ${score}`;
    loadQuestion();
}

function startTimer() {
    let timeLeft = 20;
    timerDisplay.textContent = `Time Left: ${timeLeft}s`;
    timer = setInterval(() => {
        timeLeft--;
        totalTime++;
        timerDisplay.textContent = `Time Left: ${timeLeft}s`;
        if (timeLeft === 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function loadQuestion() {
    startTimer();
    let currentQuestion = shuffledQuestions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    answerButtons.innerHTML = "";
    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.addEventListener("click", () => selectAnswer(index,
            currentQuestion.correct, button));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(selectedIndex, correctIndex, button) {
    clearInterval(timer);
    if (selectedIndex === correctIndex) {
        button.classList.add("correct");
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
    } else {
        button.classList.add("wrong");
        answerButtons.children[correctIndex].classList.add("correct-answer");
    }
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", nextQuestion);

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < shuffledQuestions.length) {
        loadQuestion();
    } else {
        setTimeout(() => {
            alert(`Quiz Completed!\nScore: ${score}/20\nTotal Time: 
${totalTime}s`);
            location.reload();
        }, 500);
    }
}