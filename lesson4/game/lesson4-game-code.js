let answerCorrect = 0;
const questions = [
  {
    question:
      "Кем был мужчина, послуживший моделью для известной картины «Американская готика» Гранта Вуда?",
    answer_1: " 1. Местным шерифом",
    answer_2: " 2. Его зубным врачом",
    correct: 2,
  },
  {
    question: "Из каких плодов можно получить копру?",
    answer_1: "1. Ананас",
    answer_2: "2. Кокос",
    correct: 2,
  },
  {
    question: "Под каким названием известна единица с последующими ста нулями?",
    answer_1: "1. Гугол",
    answer_2: "2. Гигабит",
    correct: 1,
  },
];

const isAnswer = (answer) => answer === 1 || answer === 2 || answer === -1;

for (let i = 0; i < questions.length; i++) {
  let userAnswer;

  while (true) {
    const userInput = prompt(
      `${questions[i].question}
    ${questions[i].answer_1}
    ${questions[i].answer_2}
    -1-Выход из игры 1234`
    );

    userAnswer = userInput !== null ? parseInt(userInput) : -1;

    if (isAnswer(userAnswer)) break;
  }

  if (userAnswer === -1) {
    alert("Вы выбрали выход из игры");
    break;
  } else if (userAnswer === questions[i].correct) {
    answerCorrect++;
  }
}

alert(`Игра окончена, кол-во правильных ответов: ${answerCorrect}`);

// функция принимает на вход ответ пользователя (строка)
// функция возвращает true, если ответ корректный (1, 2, -1), и false в противном случае

// function isAnswer(event) {
//   if (event === -1) {
//     return false;
//   } else if (isNaN(event) || !isFinite(event)) {
//     alert("Вы ввели недопустимый символ");
//     return false;
//   } else if (event < 1 || event > 2) {
//     alert("Ваше число выходит из допустимого диапозона");
//     return false;
//   }
//   return true;
// }

// function isAnswer(answer) {
//   if (answer === 1 || answer === 2 || answer === -1) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function isAnswer(answer) {
//   return answer === 1 || answer === 2 || answer === -1;
// }
