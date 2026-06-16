let currentQuestion = 0;
let score = 0;
let answered = false;
let playerName = "";
let selectedChapter = "";
let questions = [];

const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answers");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const progressBar = document.getElementById("progressBar");
const questionNumber = document.getElementById("questionNumber");

document
  .getElementById("startBtn")
  .addEventListener("click", startQuiz);

async function startQuiz() {

    playerName =
        document.getElementById("playerName").value.trim();

    selectedChapter =
        document.getElementById("chapterSelect").value;

    if (!playerName) {
        alert("Digite seu nome.");
        return;
    }

    if (!selectedChapter) {
        alert("Selecione um capítulo.");
        return;
    }

    try {

        const response = await fetch(
            `data/efesios-${selectedChapter}.json`
        );

        if (!response.ok) {
            throw new Error("Capítulo não encontrado.");
        }

        questions = await response.json();

        if (!questions.length) {
            alert("Este capítulo ainda não possui perguntas.");
            return;
        }

        localStorage.setItem(
            "playerName",
            playerName
        );

        currentQuestion = 0;
        score = 0;
        answered = false;

        document.getElementById("startArea").style.display = "none";
        document.getElementById("quizArea").style.display = "block";
        document.getElementById("playerDisplay").textContent = playerName;
        document.getElementById("chapterDisplay").textContent = `Efésios ${selectedChapter}`;

        loadQuestion();

    } catch (error) {

        console.error(error);

        alert(
            "Não foi possível carregar as perguntas deste capítulo."
        );
    }
}
const savedName = localStorage.getItem("playerName");

if (savedName) {
    document.getElementById("playerName").value =
        savedName;
}

function loadQuestion() {
    if (!questions.length) {
        return;
    }

    answered = false;

    const q = questions[currentQuestion];

    questionNumber.textContent =
        `Pergunta ${currentQuestion + 1} de ${questions.length}`;

    questionText.textContent = q.question;

    answersContainer.innerHTML = "";

    feedback.className = "feedback";
    feedback.innerHTML = "";

    nextBtn.disabled = true;

    q.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.classList.add("answer-btn");
        button.textContent = answer;

        button.addEventListener("click", () => selectAnswer(index));

        answersContainer.appendChild(button);
    });

    progressBar.style.width =
    `${((currentQuestion + 1) / questions.length) * 100}%`;

    document.getElementById("questionContainer")
        .classList.remove("fade");

    void document.getElementById("questionContainer").offsetWidth;

    document.getElementById("questionContainer")
        .classList.add("fade");
}

function selectAnswer(selectedIndex) {

    if(answered) return;

    answered = true;

    const q = questions[currentQuestion];
    const buttons = document.querySelectorAll(".answer-btn");

    buttons.forEach(btn => btn.disabled = true);

    buttons[q.correct].classList.add("correct");

    if(selectedIndex === q.correct){

        score++;

        feedback.className = "feedback correct show";
        feedback.innerHTML = `
            <h3>✅ Resposta Correta!</h3>
            <p>${q.explanation}</p>
        `;

    } else {

        buttons[selectedIndex].classList.add("incorrect");

        feedback.className = "feedback incorrect show";
        feedback.innerHTML = `
            <h3>❌ Resposta Incorreta</h3>
            <p>${q.explanation}</p>
        `;
    }

    nextBtn.disabled = false;
}

nextBtn.addEventListener("click", () => {

    currentQuestion++;

    if(currentQuestion < questions.length){
        loadQuestion();
    } else {
        showResults();
    }

});

function showResults(){

    document.getElementById("quizArea").style.display = "none";
    document.getElementById("resultArea").style.display = "block";
    document.getElementById("resultPlayer").textContent = `Participante: ${playerName}`;

    const total = questions.length;
    const percentage = Math.round((score / total) * 100);

    document.getElementById("finalScore").textContent =
        `Acertos: ${score} de ${total}`;

    document.getElementById("finalPercentage").textContent =
        `Aproveitamento: ${percentage}%`;

    let message = "";

    if (percentage >= 90) {
    message =
        "Excelente! Você conhece muito bem este capítulo.";
    } else if (percentage >= 70) {
        message =
            "Muito bom! Continue estudando a Palavra.";
    } else if (percentage >= 50) {
        message =
            "Bom trabalho! Há espaço para crescer.";
    } else {
        message =
            "Continue estudando Efésios e tente novamente.";
    }

    document.getElementById("finalMessage").textContent =
    `${playerName}, ${message}`;
}

function restartQuiz(){

    currentQuestion = 0;
    score = 0;
    answered = false;
    questions = [];

    progressBar.style.width = "0%";

    document.getElementById("resultArea").style.display = "none";
    document.getElementById("quizArea").style.display = "none";
    document.getElementById("startArea").style.display = "block";
}