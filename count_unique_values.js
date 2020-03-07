// Implement a function called countUniqueValues,
// which accepts a sorted array, and counts the number of
// unique values in the array. There can be negative
// numbers in the array, but it will always be sorted.

// frequency counter method
// function countUniqueValues(arr) {
// 	// create set to store unique values
// 	let uniqueNumSet = new Set();
// 	// loop over arr
// 	for (let num of arr) {
// 		// if set doesn't have number, add it to the set
// 		if (!uniqueNumSet.has(num)) {
// 			uniqueNumSet.add(num);
// 		}
// 	}

// 	// return number of unique numbers

//   return uniqueNumSet.size;

// }

// multiple pointer method
function countUniqueValues(arr) {
	// check if array is empty
	if (arr.length === 0) return 0;
	// set counter , used to count number of unique values
	let i = 0;
	// loop over array beginning at index 1
	for (let j = 1; j < arr.length; j++) {
		// places unique values at the beginning of the array
		if (arr[i] !== arr[j]) {
			i++;
			arr[i] = arr[j];
		}
	}
	// return number of unique values
	return i + 1;
}

console.log(countUniqueValues([1, 2, 2, 3, 3, 4, 5, 6, 6, 7]));
