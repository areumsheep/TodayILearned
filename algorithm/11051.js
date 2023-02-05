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

let memo = [];
const EC = (N, K) => {
  if (memo[N][K] > 0) return memo[N][K];
  if (N === K || K === 0) return (memo[N][K] = 1);
  return (memo[N][K] = EC(N - 1, K - 1) + EC(N - 1, K));
};

const solution = (data) => {
  const [N, K] = data.split(' ').map(Number);
  memo = Array.from({ length: N + 1 }, () => new Array(K + 1));
  const result = EC(N, K);
  return result % 10007;
};
