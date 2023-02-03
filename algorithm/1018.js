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
  // N 세로, M 가로
  const [N, M] = data.shift().split(' ').map(Number);

  let result = chessX * chessY;

  for (let i = 0; i <= N - chessY; i++) {
    for (let j = 0; j <= M - chessX; j++) {
      const currentResult = check(i, j, data);
      if (result > currentResult) result = currentResult;
    }
  }

  return result;
};

const check = (startRow, startCol, board) => {
  let whiteCount = 0;
  const whiteBoard = ['WBWBWBWB', 'BWBWBWBW'];

  for (let i = 0; i < chessX; i++) {
    const row = i + startRow;

    for (let j = 0; j < chessY; j++) {
      const col = j + startCol;
      if (board[row][col] !== whiteBoard[row % 2][j]) {
        whiteCount++;
      }
    }
  }

  return Math.min(whiteCount, chessX * chessY - whiteCount);
};
