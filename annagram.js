// Given two strings, write a function to determine if
// second string is an anagram of the first.

// can I restate this in my own words? Yes
// inputs : string1 and string2
// output: boolean returning true or false
//  labeling: params: string1,string2, function name: isAnagram

function isAnagram(string1, string2) {
	// return false if str1 and str2 are not the same length
	if (string1.length !== string2.length) return false;
	// make str1 and str2 the same casing
	let str1 = string1.toLowerCase();
	let str2 = string2.toLowerCase();

	let strObj1 = {};
	let strObj2 = {};

	for (let char of str1) {
		strObj1[char] = (strObj1[char] || 0) + 1;
	}

	for (let char of str2) {
		strObj2[char] = (strObj2[char] || 0) + 1;
	}

	for (let key in strObj1) {
		if (!(key in strObj2)) {
			return false;
		}

		if (strObj2[key] !== strObj1[key]) {
			return false;
		}
	}

	// return true if loop is complete
	return true;
}

// Big O: O(n)

// test cases
console.log(isAnagram("rat", "tar"));
console.log(isAnagram("cinema", "Iceman"));
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("qwerty", "qeywrt"));
console.log(isAnagram("car", "rat"));
