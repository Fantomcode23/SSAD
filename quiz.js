const questions = [
    {
        question : "Over the past few weeks, have you experienced persistent feelings of sadness, hopelessness, or emptiness?",
        answers: [
            {text: "Yes",correct: true },
            {text: "No",correct: false },
        ]
    },
    {
        question : "Do you find it difficult to concentrate or focus on your studies?",
        answers: [
            {text: "Yes",correct: true },
            {text: "No",correct: false },
        ]
    },
    {
        question : "Have you lost interest or pleasure in activities that you used to enjoy, such as hobbies or socializing?",
        answers: [
            {text: "Yes",correct: true },
            {text: "No",correct: false },
        ]
    },
    {
        question : "Have you noticed changes in your sleep patterns, such as difficulty falling asleep or sleeping too much?",
        answers: [
            {text: "Yes",correct: true },
            {text: "No",correct: false },
        ]
    },
    {
        question : "Do you frequently experience anxiety or worry about your academic performance, relationships, or other aspects of your life?",
        answers: [
            {text: "Yes",correct: true },
            {text: "No",correct: false },
        ]
    },
    {
        question : "Have you experienced changes in your appetite or weight recently?",
        answers: [
            {text: "Yes",correct: true },
            {text: "No",correct: false },
        ]
    },
    {
        question : "Do you often feel fatigued or lacking in energy, even after getting enough sleep?",
        answers: [
            {text: "Yes",correct: true },
            {text: "No",correct: false },
        ]
    },
    {
        question : "Have you had thoughts of harming yourself or ending your life?",
        answers: [
            {text: "Yes",correct: true },
            {text: "No",correct: false },
        ]
    },
    {
        question : "Do you struggle with feelings of worthlessness or guilt?",
        answers: [
            {text: "Yes",correct: true },
            {text: "No",correct: false },
        ]
    },
    {
        question : " Do you frequently feel irritable or easily agitated?",
        answers: [
            {text: "Yes",correct: true },
            {text: "No",correct: false },
        ]
    },
    {
        question : " Have you experienced physical symptoms such as headaches, stomachaches, or muscle tension without a clear medical cause?",
        answers: [
            {text: "Yes",correct: true },
            {text: "No",correct: false },
        ]
    },
    {
        question : " Do you have trouble trusting others or forming close relationships?",
        answers: [
            {text: "Yes",correct: true },
            {text: "No",correct: false },
        ]
    },
    {
        question : " Have you had difficulty coping with stress or managing your emotions?",
        answers: [
            {text: "Yes",correct: true },
            {text: "No",correct: false },
        ]
    },
    {
        question : " Do you feel disconnected from your surroundings or yourself at times?",
        answers: [
            {text: "Yes",correct: true },
            {text: "No",correct: false },
        ]
    },
    {
        question : " Have you noticed changes in your ability to concentrate, remember things, or make decisions?",
        answers: [
            {text: "Yes",correct: true },
            {text: "No",correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex=0;
let score=0;
function startQuiz(){
    currentQuestionIndex=0;
    score =0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question
    
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }else{
            button.dataset.incorrect = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e){
    const selectedButton = e.target;
    const isCorrect = selectedButton.dataset.correct === "true";
    if(isCorrect){
        selectedButton.classList.add("correct");
        score++;
    }else{
        selectedButton.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `Thank You For Your Response. `
    nextButton.innerHTML = "Give Response Again"
    nextButton.style.display = "block";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length ){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();

