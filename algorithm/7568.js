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
  data.shift();
  const rank = [];

  for (let i = 0; i < data.length; i++) {
    let count = 1;
    const [currentWeight, currentHeight] = data[i].split(' ').map(Number);

    for (let j = 0; j < data.length; j++) {
      if (i === j) continue;
      const [compareWeight, compareHeight] = data[j].split(' ').map(Number);

      if (currentWeight < compareWeight && currentHeight < compareHeight)
        count++;
    }

    rank.push(count);
  }

  return rank.join(' ');
};
