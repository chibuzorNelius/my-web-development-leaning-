// FUNCTIONS
//  -----TIMMIMG FUNCTION
function timming(timeVariable, displayVariable) {
    const intervalId = setInterval(function () {
        if (timeVariable <= 0) {
            displayVariable.textContent = '00:00';
            clearInterval(intervalId);
            return;
        }

        timeVariable = timeVariable - 1;
        let minutes = Math.floor(timeVariable / 60);
        let seconds = timeVariable % 60;

        let displayMinutes = minutes.toString().padStart(2, '0');
        let displaySeconds = seconds.toString().padStart(2, '0');

        displayVariable.textContent = displayMinutes + ':' + displaySeconds;
    }, 1000);

    return intervalId;
};

const PASSWORD = 'Nelius';
const TOTAL_QUESTIONS = 10;
const quizDurationSeconds = 5 * 60;

const questions = [
    {
        question: 'who is our web teacher?',
        options: [' mrs Stela', 'mr keny', 'mr Ade', 'mr isrel'],
        answer: 'CSS'
    },
    {
        question: 'Which HTML tag is used for the largest heading?',
        options: ['<h1>', '<head>', '<header>', '<title>'],
        answer: '<h1>'
    },
    {
        question: 'Which property changes text color in CSS?',
        options: ['color', 'background', 'font-size', 'margin'],
        answer: 'color'
    },
    {
        question: 'How do you write a comment in JavaScript?',
        options: ['/* comment */', '<!-- comment -->', '// comment', '# comment'],
        answer: '// comment'
    },
    {
        question: 'Which HTML attribute sets an image source?',
        options: ['href', 'src', 'alt', 'title'],
        answer: 'src'
    },
    {
        question: 'Which CSS property controls element spacing inside its border?',
        options: ['margin', 'padding', 'border', 'width'],
        answer: 'padding'
    },
    {
        question: 'What is the correct JavaScript syntax to output "Hello" in the console?',
        options: ['console.show("Hello")', 'console.log("Hello")', 'print("Hello")', 'document.write("Hello")'],
        answer: 'console.log("Hello")'
    },
    {
        question: 'Which HTML element is used to create a link?',
        options: ['<link>', '<a>', '<nav>', '<button>'],
        answer: '<a>'
    },
    {
        question: 'Which CSS value makes an element disappear but still occupy space?',
        options: ['display: none', 'visibility: hidden', 'opacity: 0', 'position: absolute'],
        answer: 'visibility: hidden'
    },
    {
        question: 'How do you declare a variable in JavaScript?',
        options: ['let name = "Nelius";', 'var name = "Nelius";', 'const name = "Nelius";', 'All of the above'],
        answer: 'All of the above'
    },
    {
        question: 'Which tag contains metadata about an HTML document?',
        options: ['<body>', '<meta>', '<head>', '<section>'],
        answer: '<head>'
    },
    {
        question: 'Which CSS selector targets an element with a class named "card"?',
        options: ['#card', '.card', 'card', '*card'],
        answer: '.card'
    }
];

const loginScreen = document.getElementById('login-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const loginBtn = document.getElementById('login-btn');
const restartBtn = document.getElementById('restart-btn');
const nextBtn = document.getElementById('next-btn');
const loginMessage = document.getElementById('login-message');
const userNameInput = document.getElementById('user-name');
const userPasswordInput = document.getElementById('user-password');
const userLabel = document.getElementById('user-label');
const timerLabel = document.getElementById('timer');
const questionNumber = document.getElementById('question-number');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const resultName = document.getElementById('result-name');
const resultScore = document.getElementById('result-score');
const resultTime = document.getElementById('result-time');

let selectedQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let currentAnswer = null;
let userName = '';
let timerInterval = null;
let quizStartTime = null;

function showScreen(screenId) {
    [loginScreen, quizScreen, resultScreen].forEach((section) => {
        section.classList.toggle('active', section.id === screenId);
    });
}

function shuffleArray(array) {
    const cloned = array.slice();
    for (let i = cloned.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
    }
    return cloned;
}

function startQuiz() {
    userName = userNameInput.value.trim();
    if (!userName) {
        loginMessage.textContent = 'Please enter your name to continue.';
        return;
    }

    if (userPasswordInput.value !== PASSWORD) {
        loginMessage.textContent = 'Incorrect password. Try again.';
        return;
    }

    loginMessage.textContent = '';
    selectedQuestions = shuffleArray(questions).slice(0, TOTAL_QUESTIONS);
    currentQuestionIndex = 0;
    score = 0;
    userLabel.textContent = userName;
    quizStartTime = new Date();

    if (timerInterval) {
        clearInterval(timerInterval);
    }
    timerInterval = timming(quizDurationSeconds, timerLabel);

    showQuestion();
    showScreen('quiz-screen');
}

function showQuestion() {
    const currentQuestion = selectedQuestions[currentQuestionIndex];
    currentAnswer = null;
    nextBtn.disabled = true;
    nextBtn.textContent = currentQuestionIndex === selectedQuestions.length - 1 ? 'Submit' : 'Next';

    questionNumber.textContent = `Question ${currentQuestionIndex + 1} of ${selectedQuestions.length}`;
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = '';

    currentQuestion.options.forEach((optionText) => {
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'option-btn';
        button.textContent = optionText;
        button.addEventListener('click', () => selectOption(button, currentQuestion.answer));
        optionsContainer.appendChild(button);
    });
}

function selectOption(button, correctAnswer) {
    if (currentAnswer !== null) {
        return;
    }

    currentAnswer = button.textContent;
    const buttons = optionsContainer.querySelectorAll('button');
    buttons.forEach((btn) => {
        btn.disabled = true;
        if (btn.textContent === correctAnswer) {
            btn.classList.add('correct');
        }
    });

    if (currentAnswer === correctAnswer) {
        button.classList.add('selected');
        score += 1;
    } else {
        button.classList.add('wrong');
    }

    nextBtn.disabled = false;
}

function showResults() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }

    const percentage = Math.round((score / selectedQuestions.length) * 100);
    resultName.textContent = `Student: ${userName}`;
    resultScore.textContent = `Score: ${score} / ${selectedQuestions.length} (${percentage}%)`;
    resultTime.textContent = `Submitted at: ${new Date().toLocaleString()}`;
    showScreen('result-screen');
}

function handleNext() {
    if (currentQuestionIndex < selectedQuestions.length - 1) {
        currentQuestionIndex += 1;
        showQuestion();
    } else {
        showResults();
    }
}

function restartQuiz() {
    userNameInput.value = '';
    userPasswordInput.value = '';
    timerLabel.textContent = '00:00';
    showScreen('login-screen');
}

loginBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', handleNext);
restartBtn.addEventListener('click', restartQuiz);
