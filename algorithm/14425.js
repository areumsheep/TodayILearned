const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const data = [];
rl.on('line', (line) => (data.push(line))).on('close', () => {
  console.log(solution(data));
  process.exit();
});

const solution = (data) => {
  const [N, M] = data.shift().split(' ').map(Number);
  const S = new Set(data.splice(0, N));

  return data.reduce((acc, cur) => {
    if (S.has(cur)) acc++;
    return acc;
  }, 0);
};