function solution(s) {
    const obj = {};

    return s.split('').reduce((acc, ne, idx) => {
        if (obj[ne] !== undefined) {
            acc.push(idx - obj[ne]);
            obj[ne] = idx;
            return acc;
        }
        obj[ne] = idx;
        acc.push(-1);
        return acc;
    }, []);
}

console.log(solution('banana'));