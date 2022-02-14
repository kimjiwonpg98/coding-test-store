function solution(board) {
  let answer = 0;

  if (board.length < 2 && board[0].length < 2) return 1;

  for (let i = 1; i < board.length; i++) {
    for (let j = 1; j < board[i].length; j++) {
      if (board[i][j]) {
        const up = board[i - 1][j];
        const left = board[i][j - 1];
        const cross = board[i - 1][j - 1];
        board[i][j] = Math.min(up, left, cross) + 1;
        answer = Math.max(answer, board[i][j]);
      }
    }
  }
  return answer * answer;
}
