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
  const [M, N] = data[0].split(' ').map(Number);
  const range = [];
  let result = '';

  const dfs = (k, start) => {
    if (k === N) {
      result += `${range.join(' ')}\n`;
      return;
    }
    for (let i = start; i <= M; i++) {
      range.push(i);
      dfs(k + 1, i);
      range.pop(i);
    }
  };

  dfs(0, 1);
  return result;
};
