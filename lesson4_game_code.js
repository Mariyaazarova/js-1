let event;
let ok = false;
let answerCorrect = 0;
let questions = [];

questions[0] = {
  question:
    "Кем был мужчина, послуживший моделью для известной картины «Американская готика» Гранта Вуда?",
  answer_1: " 1. Местным шерифом",
  answer_2: " 2. Его зубным врачом",

  correct: 2,
};

questions[1] = {
  question: "Из каких плодов можно получить копру?",
  answer_1: "1. Ананас",
  answer_2: "2. Кокос",

  correct: 2,
};

questions[2] = {
  question: "Под каким названием известна единица с последующими ста нулями?",
  answer_1: "1. Гугол",
  answer_2: "2. Гигабит",

  correct: 1,
};

function startGame() {}
for (let i = 0; i < questions.length; i++) {
  do {
    event = prompt(
      `${questions[i].question} \n ${questions[i].answer_1} \n ${questions[i].answer_2} \n -1-Выход из игры`
    );
    if (event === -1) {
      break;
    } else {
      ok = isAnswer(event);
    }
  } while (!ok);
  if (event === questions[i].correct) {
    answerCorrect++;
  } else {
    break;
  }

  alert("Кол-во правильных ответов: " + answerCorrect);
}

function isAnswer(event) {
  if (isNaN(event) || !isFinite(event)) {
    alert("Вы ввели недопустимый символ");
    return false;
  } else if (event < 1 || event > 2) {
    alert("Ваше число выходит из допустимого диапозона");
    return false;
  }
  return true;
}
