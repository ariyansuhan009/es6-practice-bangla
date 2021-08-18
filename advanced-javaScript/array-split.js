const num = [1, 2, 3, 4, 5, 6, 7, 8];
const part = num.slice(2, 5);

const removed = num.splice(2, 5, 10);
console.log(part);
console.log(num);
console.log(removed);

const together = num.join(" ");
console.log(together);