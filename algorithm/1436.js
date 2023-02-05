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

const solution = (data) => {
  const TARGET_NUMBER = 666;
  let result = TARGET_NUMBER;

  while (data > 1) {
    result++;
    if (`${result}`.includes(TARGET_NUMBER)) {
      data--;
    }
  }
  return result;
};
