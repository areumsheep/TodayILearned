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

const BC = (M, N) => {
  if (memo[M][N]) return memo[M][N];
  if (M === N || N === 0) return (memo[M][N] = 1);
  return (memo[M][N] = BC(M - 1, N - 1) + BC(M - 1, N));
};
const solution = (data) => {
  data.shift();
  for (const item of data) {
    const [N, M] = item.split(' ').map(Number);
    console.log(BC(M, N));
  }
};
