const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getGcd = (a, b) => {
    while (b !== 0) {
[a, b] = [b, a % b];
}
return a;
}

export default function getGcdRound () {
const num1 = getRandomInt(1, 100);
const num2 = getRandomInt(1, 100);
const question = `${num1} ${num2}`;
const answer = String(getGcd(num1, num2));
return [question, answer];  
}   

