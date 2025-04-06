function letterCombinations(digits) {
    if (digits.length === 0) return [];
    
    const digitToLetters = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };
    
    const result = [];
    
    function backtrack(index, currentCombination) {
        if (index === digits.length) {
            result.push(currentCombination);
            return;
        }
        
        const currentDigit = digits[index];
        const letters = digitToLetters[currentDigit];
        
        for (let i = 0; i < letters.length; i++) {
            backtrack(index + 1, currentCombination + letters[i]);
        }
    }
    
    backtrack(0, '');
    return result;
}

// Test cases with console.log
console.log("Test Case 1:", letterCombinations("23")); 
// Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log("Test Case 2:", letterCombinations(""));    
// Output: []
console.log("Test Case 3:", letterCombinations("2"));   
// Output: ["a","b","c"]
console.log("Test Case 4:", letterCombinations("79"));  
// Output: ["pw","px","py","pz","qw","qx","qy","qz","rw","rx","ry","rz","sw","sx","sy","sz"]
console.log("Test Case 5:", letterCombinations("234")); 
// Multiple combinations for 3 digits