export default function getEvenRound() {
  const number = Math.floor(Math.random() * 100) + 1;
  const question = String(number);
  const correctAnswer = (number % 2 === 0) ? 'yes' : 'no';
  return [question, correctAnswer];
}