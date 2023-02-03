const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const data = [];
rl.on('line', (line) => data.push(line)).on('close', () => {
  console.log(solution(data));
  process.exit();
});

const solution = (data) => {
  data.shift();
  const A = data[0].split(' ').map(Number);
  const B = data[1].split(' ').map(Number);

  const union = [...new Set([...A, ...B])].length;
  const intersection = A.length + B.length - union;

  return union - intersection;
};
