function solution(s) {
  const stack = [];

  for (const word of s) {
    if (word === "(") {
      stack.push(word);
    } else {
      if (!stack.length) return false;
      stack.pop();
    }
  }
  if (stack.length) return false;
  return true;
}
