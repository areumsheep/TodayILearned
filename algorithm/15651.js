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
  const [N, M] = data[0].split(' ').map(Number);
  const output = [];
  let result = '';

  const dfs = (k) => {
    if (k === M) {
      result += `${output.join(' ')}\n`;
      return;
    }
    for (let i = 1; i <= N; i++) {
      output.push(i);
      dfs(k + 1);
      output.pop();
    }
  };

  dfs(0);
  return result;
};
