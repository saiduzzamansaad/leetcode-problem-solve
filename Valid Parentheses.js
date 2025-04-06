function isValid(s) {
    const stack = [];
    const map = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    
    for (let char of s) {
        if (map[char]) {
            // It's an opening bracket, push to stack
            stack.push(char);
        } else {
            // It's a closing bracket
            const last = stack.pop();
            if (char !== map[last]) {
                return false;
            }
        }
    }
    
    // If stack is empty, all brackets matched
    return stack.length === 0;
}

// Test cases with console.log
console.log("Test Case 1:", isValid("()"));      // Output: true
console.log("Test Case 2:", isValid("()[]{}"));  // Output: true
console.log("Test Case 3:", isValid("(]"));      // Output: false
console.log("Test Case 4:", isValid("([])"));    // Output: true
console.log("Test Case 5:", isValid("{[()]}"));  // Output: true
console.log("Test Case 6:", isValid("{[}]"));    // Output: false
console.log("Test Case 7:", isValid("["));       // Output: false