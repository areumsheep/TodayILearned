const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let data;
rl.on('line', (line) => (data = line)).on('close', () => {
  console.log(solution(data));
  process.exit();
});

const factorial = (num, count) => {
  let result = 1;
  while (count > 0) {
    result = num * result;
    num--;
    count--;
  }
  return result;
};
const solution = (data) => {
  const [N, K] = data.split(' ').map(Number);
  return factorial(N, K) / factorial(K, K);
};
