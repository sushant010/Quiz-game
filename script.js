const quizData = [{
    question: "What does PHP stand for?",
      a: "Hypertext Preprocessor",
      b: "Hypertext Programming",
      c: "Hypertext Preprogramming",
      d: "Hometext Preprocessor",
      correct:"d",
  },
    {
    question: "What does SQL stand for?",
    a: "Stylish Question Language",
    b: "Stylesheet Query Language",
    c: "Statement Question Language",
    d: "Structured Query Language",
    correct:"d",

  },
    {
    question: "What does XML stand for?",
    a: "eXtensible Markup Language",
    b:  "eXecutable Multiple Language",
    c:  "eXTra Multi-Program Language",
    d: "eXamine Multiple Language",
    correct: "a",
  },
    {
        question: "Which of the following is a client site language?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does HTML stand for?",
        a: "Hyper Text Preprocessor",
        b: "Hyper Text Markup Language",
        c: "Hyper Text Multiple Language",
        d: "Hyper Tool Multi Language",
        correct: "b",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
    {
        question: "What does CSS stands for?",
        a: "Common Style Sheet",
        b: "Colorful Style Sheet",
        c: "Computer Style Sheet",
        d: "Cascading Style Sheet",
        correct: "d",
    }
];
let index = 0;
let correct = 0,
    incorrect = 0,
    total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
    if (total === index) {
        return quizEnd()
    }
    reset()
    const data = quizData[index]
    questionBox.innerHTML = `${index + 1}) ${data.question}`
    allInputs[0].nextElementSibling.innerText = data.a
    allInputs[1].nextElementSibling.innerText = data.b
    allInputs[2].nextElementSibling.innerText = data.c
    allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
    "click",
    function() {
        const data = quizData[index]
        const ans = getAnswer()
        if (ans === data.correct) {
            correct++;
        } else {
            incorrect++;
        }
        index++;
        loadQuestion()
    }
)

const getAnswer = () => {
    let ans;
    allInputs.forEach(
        (inputEl) => {
            if (inputEl.checked) {
                ans = inputEl.value;
            }
        }
    )
    return ans;
}

const reset = () => {
    allInputs.forEach(
        (inputEl) => {
            inputEl.checked = false;
        }
    )
}

const quizEnd = () => {

    document.getElementsByClassName("container")[0].innerHTML = `
        <div class="col">
            <h3 class="w-100"> You've answered ${correct} / ${total} questions correctly.
            Thank you...We'll see you shortly.  </h3>
        </div>
    `
}
loadQuestion(index);
