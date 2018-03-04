// 20 length 10 iterations
const k = 10;

let a = [41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51];

for (let i = 0; i < k; i++)
    a.push(a.shift());

console.log(a.join(' '));

// Should be
// 77 97 58 1 86 58 26 10 86 51 41 73 89 7 10 1 59 58 84 77