function solution(food) {
    const first = food.reduce((acc, cur, idx) => {
        let result = acc;
        if (acc === 1) {
            result = '';
        }

        if (cur % 2) {
            let num = (cur - 1) / 2;
            while (num) {
                result = result + idx.toString();
                num--;
            }
            return result;
        }
        let num = cur / 2;
        while (num) {
            result = result + idx.toString();
            num--;
        }
        return result;
    });

    const second = [...first].reverse().join('');

    return first + '0' + second;
}

console.log(solution([1, 3, 4, 6]));

// [1, 3, 4, 6]


// 다른 사람 풀이
function solution(food) {
    let res = '';
    for (let i = 1; i < food.length; i++) {
        res += String(i).repeat(Math.floor(food[i]/2));
    }

    return res + '0' + [...res].reverse().join('');
}