var questions = [
  {
    question: "What is the budget?",
    answers: [
      {
        text: "A budget is a financial plan for a defined period of time",
        correct: true,
      },
      {
        text: "A budget is an economical plan for a defined period of time",
        correct: false,
      },
      {
        text: "A budget is an economical plan for an undefined period of time",
        correct: false,
      },
      {
        text: "A budget is a financial plan for an undefined period of time",
        correct: false,
      },
    ],
  },
  {
    question: "in which country The last specie white rhino dies?",
    answers: [
      { text: "Sudan", correct: true },
      { text: "Ethopia", correct: false },
      { text: "Somalia", correct: false },
      { text: "Africa", correct: false },
    ],
  },
  {
    question:
      "Border line which separates outer space from Earth atmosphere is known as___________?",
    answers: [
      { text: "Durand line", correct: false },
      { text: "Venus line", correct: false },
      { text: "Space line", correct: false },
      { text: "Karman line", correct: true },
    ],
  },
  {
    question: "White river is located in__________?",
    answers: [
      { text: "U.S", correct: true },
      { text: "China", correct: false },
      { text: "Austria", correct: false },
      { text: "Hilal", correct: false },
    ],
  },
];
const ques = document.querySelector("h2");
const list = document.querySelector(".list");
const btns = document.querySelectorAll(".btn");
const next = document.getElementById("next");
var currentquestionIndex = 0;
var score = 0;

function startQuiz() {
  currentquestionIndex = 0;
  score = 0;
  next.innerHTML = "Next";
  ShowQuestion();
}

function ShowQuestion() {
  removechilds();
  var questionTitle = questions[currentquestionIndex];
  var questionNumbering = currentquestionIndex + 1;
  ques.innerText = questionNumbering + ". " + questionTitle.question;
  questionTitle.answers.forEach((ans) => {
    var but = document.createElement("button");
    but.classList.add("btn");
    but.innerHTML = ans.text;

    list.appendChild(but);
    if (ans.correct) {
      but.dataset.correct = ans.correct;
    }
    but.addEventListener("click", checkbuttons);
  });
}

checkbuttons = (e) => {
  const selectbtn = e.target;
  const correctbtn = selectbtn.dataset.correct === "true";
  if (correctbtn) {
    selectbtn.classList.add("corr");
    score++;
  } else {
    selectbtn.classList.add("discorr");
  }
  Array.from(list.children).forEach((button) => {
    if (button.dataset.correct == "true") {
      button.classList.add("corr");
    }
    button.disabled = true;
  });
  next.style.display = "block";
};
handlenextquestion = () => {
  currentquestionIndex++;
  if (currentquestionIndex < questions.length) {
    ShowQuestion();
  } else {
    showScore();
  }
};
next.addEventListener("click", () => {
  if (currentquestionIndex < questions.length) {
    handlenextquestion();
  } else {
    startQuiz();
  }
});

showScore = () => {
  removechilds();
  ques.innerHTML = `Your Score is ${score} Out of ${questions.length}...`;
  next.innerHTML = "Play Game...";
  next.style.display = "block";
};
function removechilds() {
  next.style.display = "none";
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }
}
startQuiz();
