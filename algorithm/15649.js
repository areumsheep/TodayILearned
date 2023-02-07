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
  const range = [];
  const isUsed = [];

  const dfs = (k) => {
    if (k === M) {
      const arr = [];
      for (let i = 0; i < M; i++) {
        arr.push(range[i]);
      }
      console.log(arr.join(' '));
    }
    for (let i = 1; i <= N; i++) {
      if (!isUsed[i]) {
        range[k] = i;
        isUsed[i] = true;
        dfs(k + 1);
        isUsed[i] = false;
      }
    }
  };

  dfs(0);
};
