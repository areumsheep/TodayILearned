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

const solution = (data) => {
  const [N, M] = data[0].split(' ').map(Number);
  const output = [];
  const isUsed = [];

  const dfs = (k, start) => {
    if (k === M) {
      console.log(output.join(' '));
      return;
    }
    for (let i = start + 1; i <= N; i++) {
      if (isUsed[i]) continue;
      output.push(i);
      isUsed[i] = true;
      dfs(k + 1, i);
      output.pop();
      isUsed[i] = false;
    }
  };
  dfs(0, 0);
};
