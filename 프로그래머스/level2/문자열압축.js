function solution(s) {
  const words = [];
  const counts = [];
  const totalCounts = [];
  let N = s.length;
  let lastWord = "";

  for (let i = 1; i < N; i++) {
    words.length = 0;
    let totalCount = 0;
    counts.length = 0;

    for (let j = 0; j <= N; j += i) {
      let word = s.slice(j, j + i);
      if (lastWord === word) {
        counts[words.lastIndexOf(word)] += 1;
      } else {
        words.push(word);
        counts.push(1);
      }
      lastWord = word;
    }

    counts.map((count) => {
      if (count !== 1 && count < 10) {
        totalCount += 1;
      }
      if (count > 9) {
        totalCount += 2;
      }
    });
    words.map((x) => {
      totalCount += x.length;
    });
    totalCounts.push(totalCount);
    // console.log(words);
    // console.log(counts, 3);
  }
  // console.log(totalCounts);
  console.log(Math.min.apply(null, totalCounts));
}

solution("xx xx xx xx xx yy y");
