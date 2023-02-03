const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const data = [];
rl.on('line', (line) => data.push(line)).on('close', () => {
  console.log(solution(data[0]));
  process.exit();
});

const solution = (data) => {
  const [x, y, w, h] = data.split(' ').map(Number);
  return Math.min(x, y, w - x, h - y);
};