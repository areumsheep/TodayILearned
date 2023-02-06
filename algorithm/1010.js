const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const data = [];
rl.on('line', (line) => data.push(line)).on('close', () => {
  solution(data);
  process.exit();
});

const memo = Array.from({ length: 30 }, () => new Array(30));
const BC = (N, M) => {
  if (memo[N][M]) return memo[N][M];
  if (N === M || M === 0) return (memo[N][M] = 1);
  return (memo[N][M] = BC(N - 1, M - 1) + BC(N - 1, M));
};
const solution = (data) => {
  data.shift();
  for (const item of data) {
    let [N, M] = item.split(' ').map(Number);
    console.log(BC(M, N));
  }
};
