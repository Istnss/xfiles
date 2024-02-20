document.addEventListener('DOMContentLoaded', function(){
    var h1text = document.getElementById('h1Text');
    var linkThere = document.getElementById('linkThere');
    var imgBg = document.getElementById('imgBg');
    var begin = document.getElementById('begin');

    linkThere.addEventListener("mouseover", function() {
        setOpacity(h1text, 0);
        setOpacity(imgBg, 0.3);
    });
    linkThere.addEventListener("mouseout", function() {
        setOpacity(h1text, 1);
        setOpacity(imgBg, 0);
    });
    function setOpacity(element, opacityValue) {
        element.style.opacity = opacityValue;
    }
});
document.addEventListener('DOMContentLoaded', function () {
    showSlide(currentSlide);

    var prevButton = document.querySelector('.carousel-projects .button-carousel:nth-child(1)');
    var nextButton = document.querySelector('.carousel-projects .button-carousel:nth-child(2)');

    prevButton.addEventListener('click', function () {
        prevSlide();
    });

    nextButton.addEventListener('click', function () {
        nextSlide();
    });
});
var currentQuestion = 0;
var score = 0;
var questions = [
    {
        question: "What is the name of the pilot episode of the series The X-Files?",
        options: ["The Truth", "Pilot", "The Beginning", "The X-Files"],
        correctAnswer: "Pilot"
    },
    {
        question: "What is the motto that is often associated with the series The X-Files?",
        options: ["The Truth Is Out There", "Trust No One", "I Want to Believe", "Deny Everything"],
        correctAnswer: "The Truth Is Out There"
    },
    {
        question: "What is the government agency for which the main characters work in the series?",
        options: ["FBI", "CIA", "NSA", "DHS"],
        correctAnswer: "FBI"
    },
    {
        question: "What is Fox Mulder's explanation for the paranormal and unexplained cases he investigates?",
        options: ["Elaborate hoaxe", "Natural phenomena", "Extraterrestrial activities", "Government manipulation"],
        correctAnswer: "Extraterrestrial activities"
    },
    {
        question: "What is the name of the movie released in 1998, which is a continuation of the series The X-Files?",
        options: ["The X-Files: Fight the Future", "The X-Files: I Want to Believe", "The X-Files: Conspiracy", "The X-Files: Resurgence"],
        correctAnswer: "The X-Files: Fight the Future"
    }
];

function displayQuestion() {
    var questionElement = document.getElementById("question");
    var optionsElement = document.getElementById("options");
    var current = questions[currentQuestion];

    questionElement.textContent = current.question;

    optionsElement.innerHTML = "";
    current.options.forEach(function(option) {
        var button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option");
        button.onclick = function() {
            checkAnswer(option);
        };
        optionsElement.appendChild(button);
    });
}

function checkAnswer(answer) {
    var resultElement = document.getElementById("result");
    var current = questions[currentQuestion];

    if (answer === current.correctAnswer) {
        resultElement.textContent = "Correct answer!";
        score++;
    } else {
        resultElement.textContent = "Incorrect answer.The correct answer is: " + current.correctAnswer;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        resultElement.textContent = "";
        resultElement.textContent += "\n Your final result is: " + score + " of " + questions.length;
        var restartButton = document.getElementById("restartButton");
        restartButton.style.display = "block";
    }
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    displayQuestion();
    document.getElementById("result").textContent = "";
    document.getElementById("restartButton").style.display = "none";
}

displayQuestion();
