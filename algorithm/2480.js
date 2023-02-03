const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let data = [];
rl.on('line', (line) => (data = formatData(line))).on('close', () => {
  console.log(solution(data));
  process.exit();
});

const formatData = (data) => {
  const splitted = data.split(' ');
  return splitted.map(Number);
};
const solution = (data) => {
  const countObj = [...data].reduce((acc, cur) => {
    acc[cur] = acc[cur] || [];
    acc[cur]++;
    return acc;
  }, {});

  switch (Object.keys(countObj).length) {
    case 1:
      return countObj[0] * 1000 + 10000;
    case 2:
      return (
        +Object.entries(countObj).find((_n) => _n[1] === 2)[0] * 100 + 1000
      );
    default:
      return Math.max(...data) * 100;
  }
};
