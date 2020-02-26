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
	// loop over string1
	for (let char in str1) {
		// intialize var to the index of char in str2
		indexOfChar = str2.indexOf(str1[char]);
		// return false if char does not exist in str2
		if (indexOfChar === -1) return false;
		// remove first index of str2
		str2.slice(indexOfChar, indexOfChar + 1);
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
