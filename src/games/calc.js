const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const operators = ['+', '-', '*'];

const calculate = (a, b, operator) => {
  switch (operator) {
    case '+': return a + b;
    case '-': return a - b;
    case '*': return a * b;
    default: throw new Error(`Unknown operator: ${operator}`);
  }
};

export default function getCalcRound() {
  const num1 = getRandomInt(1, 20);
  const num2 = getRandomInt(1, 20);
  const operator = operators[getRandomInt(0, operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  const answer = calculate(num1, num2, operator);
  return [question, answer];
}