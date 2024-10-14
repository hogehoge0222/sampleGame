const quiz = [
    {
        question: 'What is the most popular game machine?',
        answers: ['Super Famicom', 'PlayStation 2', 'Nintendo DS', 'Xbox 360'],
        correct: 'Nintendo DS'
    },
    {
        question: 'Which is the most famous Nintendo Game that Shigesato Itoi was involved in planning?',
        answers: ['MOTHER 2', 'Super Mario Bros. 3', 'Super Donkey Kong', 'Kirby\'s Dream Land'],
        correct: 'MOTHER 2'
    },
    {
        question: 'Who is the main character in Final Fantasy 4?',
        answers: ['Frioniel', 'Cloud', 'Tidus', 'Cecil'],
        correct: 'Cecil'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;
const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while(buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
};

setupQuiz();

const clickHandler = (e) => {
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('Correct!!');
        score++;
    } else {
        window.alert('Incorrect!!');
    }
    quizIndex++;
    if(quizIndex < quizLength){
        setupQuiz();
    } else {
        window.alert('Finish! Your correct answers are ' + score + ' out of ' + quizLength + '.');
    }
};

let handlerIndex = 0;
while(handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e) => {
        clickHandler(e);
    });
    handlerIndex++;
}
