function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";
    
    let prefix = strs[0];
    
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }
    
    return prefix;
}

// Test cases with console.log
console.log("Test Case 1:", longestCommonPrefix(["flower","flow","flight"])); // Output: "fl"
console.log("Test Case 2:", longestCommonPrefix(["dog","racecar","car"]));    // Output: ""
console.log("Test Case 3:", longestCommonPrefix(["apple","app","application"])); // Output: "app"
console.log("Test Case 4:", longestCommonPrefix(["same","same","same"]));      // Output: "same"
console.log("Test Case 5:", longestCommonPrefix([""]));                        // Output: ""