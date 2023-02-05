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
  if (a === 0) return b;
  return GCD(b % a, a);
};
const solution = (data) => {
  data.shift();
  const result = data.reduce((acc, item) => {
    const [a, b] = item.split(' ').map(Number);
    const gcd = GCD(a, b);

    acc.push((a * b) / gcd);
    return acc;
  }, []);

  return result.join(' ');
};
