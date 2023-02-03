const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let data;
rl.on('line', (line) => data = line).on('close', () => {
  console.log(solution(data));
  process.exit();
});

const solution = (data = '') => {
  const set = new Set();
  const len = data.length;

  for (let i = 0; i < len; i++) {
    for (let j = i; j < len; j++) {
      set.add(data.substring(i, j + 1));
    }
  }

  return set.size;
};