An example of a pathfinding algorithm using a recursive function in NodeJS.
Inspired by using the DFS pattern (depth first search) to search some words in a 2D array matrix of letters.

### Problem Explanation
Given  a matrix (2D, containing a string of letter)
```js
const board = [
  ['A', 'X', 'F', 'E'],
  ['F', 'E', 'C', 'S'],
  ['A', 'C', 'E', 'E'],
];
```
Assuming the matrix has the same length for every array inside.

Also, given a word to search from the matrix, for example:
```js
const targetWord = 'FECSE';
```

We want to find the word `FECSE` inside the matrix by traversing and finding the path
of our target word inside by iterating through adjacent cells of the array
(we can only check adjacent cells by moving up, left, right, and down. Not diagonally).

From the example we created, we found that `FECSE` can be found inside the matrix,
starting from the coordinate `[1,0]`, the first letter `F` from the array.

### Issues and Contributing
Please generate an issue or create a pull requests
if there are any bugs to solve or improvements to be made.
