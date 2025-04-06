function lengthOfLongestSubstring(s) {
    let charMap = {};
    let maxLength = 0;
    let left = 0;

    for (let right = 0; right < s.length; right++) {
        const currentChar = s[right];
        if (charMap[currentChar] !== undefined && charMap[currentChar] >= left) {
            left = charMap[currentChar] + 1;
        }
        charMap[currentChar] = right;
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example usage:
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3
