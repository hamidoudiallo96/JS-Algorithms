const { performance } = require("perf_hooks");

function addUpTo(num) {
	// first solution => O(n)
	// let sum = 0;
	// for (let i = 0; i <= num; i++) {
	// 	sum += i;
	// }
	// return sum;

	// second solution => O(1)
	return (num * (num + 1)) / 2;
}

let t1 = performance.now();
console.log(addUpTo(9));
let t2 = performance.now();
console.log(t2 - t1);

// console.log(addUpTo(3));
// console.log(addUpTo(5));
