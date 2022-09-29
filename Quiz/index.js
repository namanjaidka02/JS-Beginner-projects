
let Questions = [{
    
    question: "what is the sum of 2 + 2?",
    answers: [
        { option: 4, isCorrect: true},
        { option: 12, isCorrect: false},
        { option: 6, isCorrect: false},
        { option: 8, isCorrect: false}
    ]
},
{
    
    question: "what is the capital of India?",
    answers:[
        {option: "Delhi", isCorrect: true},
        {option: "Mumbai", isCorrect: false},
        {option: "Chennai", isCorrect: false},
        {option: "Punjab", isCorrect: false},
    ]
},
{
    
    question: "What is the capital of Australia?",
    answers:[
        {option: "Melbourne", isCorrect: false},
        {option: "Sydney", isCorrect: false},
        {option: "Perth", isCorrect: false},
        {option: "Canberra", isCorrect: true},
    ]

},
{
    
    question: "What is the multipy of 5*5?",
    answers: [
        {option: 25, isCorrect: true},
        {option: 5, isCorrect: false},
        {option: 10, isCorrect: false},
        {option: 2, isCorrect: false},
    ]
},
{
    
    question: "What is the capital of United States Of America?",
    answers:[
        {option: "Washington D.C", isCorrect: true},
        {option: "Las Vegas", isCorrect: false},
        {option: "New York", isCorrect: false},
        {option: "L.A", isCorrect: false},
    ]
},
{
    
    question: "Who is tapu ke papa?",
    answers: [
        {option: "Jethalal", isCorrect: true},
        {option: "Tarak Mehta", isCorrect: false},
        {option: "Iyer", isCorrect: false},
        {option: "Dr. Hathi", isCorrect: false}
    ]
},
{
    question: "What is 20 - 10?",
    answers:[
        {option: 20, isCorrect: false},
        {option: 10, isCorrect: true},
        {option:30, isCorrect:false},
        {option: 40, isCorrect:false},
    ]
},
{
    question: "What is 200 * 64?",
    answers: [
        {option: 12800, isCorrect: true},
        {option: 12500, isCorrect: false},
        {option: 12600, isCorrect: false},
        {option: 12700, isCorrect: false},
    ]
},
{
    question: " Who is the current President of India?",
    answers:[
        {option: "Bhagwant Maan", isCorrect:false},
        {option: "Amit Shah", isCorrect:false},
        {option: "Draupadi Murmu", isCorrect:true},
        {option: "Surkhbir Singh Badal", isCorrect:false},
    ]
},
{
    question: "Who was the last queen of england who died in september 2022?",
    answers:[
        {option:"Queen Victoria", isCorrect:false},
        {option:"Queen Aethalflaed", isCorrect:false},
        {option:"Queen Aelswith", isCorrect:false},
        {option:"Queen Elizabeth the second", isCorrect:true},
    ]
}


]


const question = document.getElementById("question");
const op1 = document.getElementById("op1");
const op2 = document.getElementById("op2");
const op3 = document.getElementById("op3");
const op4 = document.getElementById("op4");
const submit = document.getElementById("submit");
const scoreDisplay = document.getElementById("score");

let score = 0;
let questionCount = 0;
let selected = "";
let questionList;

let loadQuestion = () => {


    questionList = Questions[questionCount];
    question.innerText = questionList.question;

    op1.innerText = questionList.answers[0].option;
    op2.innerText = questionList.answers[1].option;
    op3.innerText = questionList.answers[2].option;
    op4.innerText = questionList.answers[3].option;

    op1.value = questionList.answers[0].isCorrect;
    op2.value = questionList.answers[1].isCorrect;
    op3.value = questionList.answers[2].isCorrect;
    op4.value = questionList.answers[3].isCorrect;



 op1.addEventListener("click", () => {
    selected = op1.value;
 })

 op2.addEventListener("click", () => {
    selected = op2.value;
 })

 op3.addEventListener("click", () => {
    selected = op3.value;
 })

 op4.addEventListener("click", () => {
    selected = op4.value;
 })
 
}

submit.addEventListener("click",  () =>{
    
    if (selected == "true"){
        score++
        window.alert("Correct")
    }else{
        score--
        alert("wrong");
    }
    
    if(questionCount <= 11){
        questionCount++;
        loadQuestion();   
    }
    

    scoreDisplay.innerHTML = score;

 })

loadQuestion();







