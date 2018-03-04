const money = [5, 10, 20].reduce((total, amount) => total + amount);

console.log(money);
// 35


const doubled = [5, 10, 20].reduce((total, amount) => [...total, amount * 2], []);

console.log(doubled);
// [ 10, 20, 40 ]
