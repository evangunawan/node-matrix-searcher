function main(board, targetWord) {
  const startingLetter = targetWord.charAt(0);

  const startingPos = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === startingLetter) {
        startingPos.push([i, j]);
      }
    }
  }

  let res = [];
  const found = startingPos.some((start) => {
    const result = processCoord(board, start[0], start[1], targetWord);
    if (result && result.join('') === targetWord) {
      res = result;
      return true;
    }
  });
  console.log('RESULT', found, res);
}

function processCoord(board, startY, startX, search, visited = [], visitedCoords = []) {
  const searchArr = search.split('');
  visited.push(searchArr[0]);

  if (visitedCoords.some((coord) => coord[0] === startY && coord[1] === startX)) {
    return null;
  }
  visitedCoords.push([startY, startX]);

  searchArr.shift();
  if (searchArr[0] === undefined) return visited;

  console.log(`at [${startY}, ${startX}] searching ${searchArr[0]} `);
  const adjacents = getCoordinateAdjacentByLetter(board, startY, startX, searchArr[0]);
  if (adjacents && adjacents.length > 0) {
    const adjacentValid = adjacents.some((adj) => {
      const found = processCoord(board, adj[0], adj[1], searchArr.join(''), visited, visitedCoords);
      return found !== null;
    });
    if (!adjacentValid) return null;
    return visited;
  }
  visited.pop();
  return null;
}

function getCoordinateAdjacentByLetter(board, y, x, targetLetter) {
  if (targetLetter === null || targetLetter === undefined) return null;

  const res = [];
  const abv = board[y - 1] ? board[y - 1][x] : null;
  const btm = board[y + 1] ? board[y + 1][x] : null;
  const left = board[y][x - 1] || null;
  const right = board[y][x + 1] || null;

  if (abv === targetLetter) res.push([y - 1, x]);
  if (btm === targetLetter) res.push([y + 1, x]);
  if (left === targetLetter) res.push([y, x - 1]);
  if (right === targetLetter) res.push([y, x + 1]);

  return res.length > 0 ? res : null;
}

const board = [
  ['A', 'X', 'F', 'E'],
  ['F', 'E', 'C', 'S'],
  ['A', 'C', 'E', 'E'],
];

const targetWord = 'FECSEFX';
main(board, targetWord);
