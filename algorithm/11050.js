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

const EC = (N, K) => {
  if (N === K || K === 0) return 1;
  return EC(N - 1, K - 1) + EC(N - 1, K);
};
const solution = (data) => {
  const [N, K] = data.split(' ').map(Number);
  return EC(N, K);
};
