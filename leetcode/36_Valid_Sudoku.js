const isValidSudoku = (board) => {
  const rows = {}
  const cols = {}
  const squares = {}
  for (let i=0 ; i < 9; i++){
    for (let c= 0 ; c<9; c++){
      if (board[i][c] === '.') continue
      const squareIndex = Math.floor(i/3) * 3 + Math.floor(c/3)
      if (rows[i]?.includes(board[i][c]) || cols[c]?.includes(board[i][c]) || squares[squareIndex]?.includes(board[i][c]) ) {
        return false
      }

      rows[i] = rows[i] ? [...rows[i], board[i][c]] : [board[i][c]]
      cols[c] = cols[c] ? [...cols[c], board[i][c]] : [board[i][c]]
      squares[squareIndex] = squares[squareIndex] ? [...squares[squareIndex], board[i][c]] : [board[i][c]]

    }
  }

  return true
}

console.log(isValidSudoku([  ["5","5",".",".","7",".",".",".","."],
  ["6",".",".","1","9","5",".",".","."],
  [".","9","8",".",".",".",".","6","."],
  ["8",".",".",".","6",".",".",".","3"],
  ["4",".",".","8",".","3",".",".","1"],
  ["7",".",".",".","2",".",".",".","6"],
  [".","6",".",".",".",".","2","8","."],
  [".",".",".","4","1","9",".",".","5"],
  [".",".",".",".","8",".",".","7","9"]
])) // should return true
