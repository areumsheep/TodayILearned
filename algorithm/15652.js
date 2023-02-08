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

  const dfs = (k, start) => {
    if (k === M) {
      result += `${output.join(' ')}\n`;
      return;
    }
    for (let i = start; i <= N; i++) {
      output.push(i);
      dfs(k + 1, i);
      output.pop();
    }
  };

  dfs(0, 1);
  return result;
};
