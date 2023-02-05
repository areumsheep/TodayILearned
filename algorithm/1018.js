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

const [chessX, chessY] = [8, 8];

const solution = (data) => {
  let result = chessX * chessY;
  const [x, y] = data.shift().split(' ').map(Number);

  for (let i = 0; i <= x - chessX; i++) {
    for (let j = 0; j <= y - chessY; j++) {
      const temp = check(i, j, data);

      if (result > temp) result = temp;
    }
  }

  return result;
};
const check = (x, y, board) => {
  let whiteCount = 0;
  const whiteBoard = ['WBWBWBWB', 'BWBWBWBW'];

  for (let i = 0; i < chessX; i++) {
    const row = x + i;
    for (let j = 0; j < chessY; j++) {
      const col = y + j;
      if (board[row][col] !== whiteBoard[row % 2][j]) {
        whiteCount++;
      }
    }
  }

  return Math.min(whiteCount, chessX * chessY - whiteCount);
};
