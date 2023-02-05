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

const GCD = (a, b) => {
  if (a === 0) return b;
  return GCD(b % a, a);
};

const solution = (data) => {
  const [targetCircle, ...circles] = data[1].split(' ').map(Number);

  for (const circle of circles) {
    const gcd = GCD(circle, targetCircle);
    console.log(`${targetCircle / gcd}/${circle / gcd}`);
  }
};
