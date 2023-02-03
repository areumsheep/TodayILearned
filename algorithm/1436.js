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

const DOOMSDAY_NUMBER = 666;
const solution = (data) => {
  let value = DOOMSDAY_NUMBER;

  while (data > 1) {
    value++;
    if (`${value}`.includes(DOOMSDAY_NUMBER)) {
      data--;
    }
  }

  return value;
};
