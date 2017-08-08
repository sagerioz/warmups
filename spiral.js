// Given a number, create a grid which starts with 1 and ends with n squared


function spiralGrid(n){
  let grid = Array(n).fill().map(() => Array(n));

let number = 1;
let row = 0;
let col = 0;
let dRow = 0;
let dCol = 1;

while (number <= n * n){
  grid[row][col]= number++;
  if( col + dCol === n || row + dRow === n || col + dCol === -1 || grid[row + dRow][col + dCol]){
    const temp = dRow;
    dRow = dCol;
    dCol = -temp
  }
  row += dRow;
  col += dCol;
}


  return grid;
}
console.log(spiralGrid(6));
