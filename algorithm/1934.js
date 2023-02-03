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

const GCD = (a, b) => {
  if (b === 0) return a;
  return GCD(b, a % b);
};

const solution = (data) => {
  data.shift();
  const result = [];
  for (const item of data) {
    const [a, b] = item.split(' ').map(Number);
    const gcd = GCD(a, b);
    result.push((a * b) / gcd);
  }

  return result.join(' ');
};
