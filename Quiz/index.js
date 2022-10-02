let questions = [
  {
    q: "what is the sum of 2 + 2?",
    option: ["2", "3", "4", "5"],
    answer: "4",
  },
  {
    q: "what is the capital of India?",
    option: ["Delhi", "Mumbai", "Punjab", "Haryana"],
    answer: "Delhi",
  },
  {
    q: "What is the capital of Australia?",
    option: ["Melbourne", "Perth", "Canberra", "Sydney"],
    answer: "Canberra",
  },
  {
    q: "What is the multipy of 5*5?",
    option: ["25", "26", "27", "24"],
    answer: "25",
  },
  {
    q: "What is the capital of United States Of America?",
    option: ["Washington D.C", "Miami", "New York", "San Fransisco"],
    answer: "Washington D.C",
  },
  {
    q: "Who is tapu ke papa?",
    option: ["Jethalal", "Tarak Mehta", "Bhide", "Dr. Hathi"],
    answer: "Jethalal",
  },
  {
    q: "What is 20 - 10?",
    option: ["10", "9", "20", "11"],
    answer: "10",
  },
  {
    q: "What is 200 * 64?",
    option: ["12800", "12600", "12500", "12700"],
    answer: "12800",
  },
  {
    q: " Who is the current President of India?",
    option: [
      "Draupadi Murmu",
      "Amit Shah",
      "Bhagwant Maan",
      "Prakash Singh Badal",
    ],
    answer: "Draupadi Murmu",
  },
  {
    q: "Who was the last queen of england who died in september 2022?",
    option: [
      "Queen Elizabeth the second",
      "Queen Victoria",
      "Queen Aethelflaed",
      "Queen Aelswith",
    ],
    answer: "Queen Elizabeth the second",
  },
];

let question = document.getElementById("question");
let op1 = document.getElementById("op1");
let op2 = document.getElementById("op2");
let op3 = document.getElementById("op3");
let op4 = document.getElementById("op4");
let scoreDisplay = document.getElementById("score");
let score = 0;
let questionCount = 0;
let selectedAnswer = "";
let questionList;

op1.addEventListener("click", () => {
  selectedAnswer = op1.innerHTML;
  onBtnClick();
});

op2.addEventListener("click", () => {
  selectedAnswer = op2.innerHTML;
  onBtnClick();
});

op3.addEventListener("click", () => {
  selectedAnswer = op3.innerHTML;
  onBtnClick();
});

op4.addEventListener("click", () => {
  selectedAnswer = op4.innerHTML;
  onBtnClick();
});

let loadQuestion = () => {
  question.innerHTML = questions[questionCount].q;

  op1.innerHTML = questions[questionCount].option[0];
  op2.innerHTML = questions[questionCount].option[1];
  op3.innerHTML = questions[questionCount].option[2];
  op4.innerHTML = questions[questionCount].option[3];
};

function onBtnClick() {
  if (questionCount >= 11) {
    return;
  }

  if (selectedAnswer === questions[questionCount].answer) {
    score += 1;
  } else {
    score -= 1;
  }

  questionCount += 1;
  scoreDisplay.innerHTML = score;

  loadQuestion();
}

loadQuestion();

/*

- cookies and localStorage
*/
