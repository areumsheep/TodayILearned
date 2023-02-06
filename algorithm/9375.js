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

const solution = (datas) => {
  const loopCount = datas.shift();
  let collection = {};

  for (let i = 0; i < loopCount; i++) {
    let count = Number(datas.shift());
    while (count > 0) {
      const [item, category] = datas.shift().split(' ');
      collection[category] = collection[category] || [];
      collection[category].push(item);
      count--;
    }

    console.log(
      Object.values(collection).reduce(
        (acc, item) => (acc *= item.length + 1),
        1
      ) - 1
    );
    collection = {};
  }
};
