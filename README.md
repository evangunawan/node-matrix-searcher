An example of pathfinding algorithm using recursive function in NodeJS.

Inspired by using DFS pattern (depth first search) to search some words in a 2D array matrix of letters.

### Problem Explanation
Given such matrix (2D, containing string of letters (1 character))
```js
const board = [
  ['A', 'X', 'F', 'E'],
  ['F', 'E', 'C', 'S'],
  ['A', 'C', 'E', 'E'],
];
```
Assuming the matrix have a same length children arrays.

Also, given a word to search from the matrix, for example:
```js
const targetWord = 'FECSE';
```

We want to find the word `FECSE` inside the matrix by traversing and finding the path
of our target word inside by iterating through adjacent cells of the array
(we can only move to up, left, right, and down. Not diagonally).

From the example we created, we found that `FECSE` can be found inside the matrix,
starting from the coordinate `[1,0]`, the first letter `F` from the array.

### Issues and Contributing
Please generate an issue or create a pull requests
if there is any bugs to solve or improvements to be made.