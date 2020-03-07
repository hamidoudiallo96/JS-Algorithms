// Write a function called sumZero which accepts a sorted array of integers.
// The function should find the first pair, where the sum is 0. Return  an array
// that includes both values that sum to zero or undefined if a pair does not exist.

function sumZero(arr) {
	// initialize variables for left and right
	let left = 0;
	let right = arr.length - 1;
	// loop over array
	while (right > left) {
		let sum = arr[left] + arr[right];
		// check if sum is 0
		if (sum === 0) {
			// return pair
			return [arr[left], arr[right]];
		}
		//  if sum is greater than 0, increase the right by 1
		if (sum > 0) {
			right--;
		}
		//  else increase the left by 1
		else {
			left++;
		}
	}
}

console.log(sumZero([-3, 2, 0, 3, 4]));
console.log(sumZero([9, 10, 4, 3, -10, 81]));
