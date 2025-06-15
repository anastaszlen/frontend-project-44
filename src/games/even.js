import readlineSync from 'readline-sync';

export default function playEvenGame(name) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i++) {
    const number = Math.floor(Math.random() * 100) + 1; // число от 1 до 100
    console.log(`Question: ${number}`);

    const answer = readlineSync.question('Your answer: ').toLowerCase();
    const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';

    // проверка, чтобы было именно число: правильное или неправильное
    if (answer !== 'yes' && answer !== 'no') {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return; // конец игры, если ответ неправильный
    }

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return; // конец игры, если ответ неправильный
    }
  }

  console.log(`Congratulations, ${name}!`);
}