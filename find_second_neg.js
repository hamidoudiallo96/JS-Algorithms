// In a given array find the second to last negative number in an array
// For example in [1,4,-5,9,-9] => -5

// inputs => array
// outputs => negative number, second to last

const findSecondLastNeg = arr => {
	// create a set to store negative numbers
	const negSet = new Set();
	let arrNum = [];
	// loop over array
	for (let num of arr) {
		let isNum = Math.sign(num);
		// if num is negative add it to the set
		if (isNum === -1) {
			negSet.add(num);
		}
	}
	for (let num of negSet.values()) {
		arrNum.push(num);
	}
	// return second to last negative number
	let secondToLastNum = arrNum[arrNum.length - 2];
	return secondToLastNum;
};

// test cases
console.log(findSecondLastNeg([4, -4, 2, 10, -16]));
console.log(findSecondLastNeg([9, 2, -8, 10, -9, -3]));
