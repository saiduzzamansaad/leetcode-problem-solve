
function minRemoveToMakeValid(s) {
    const stack = [];
    const toRemove = new Set();
    const result = [];
    
    // First pass: identify invalid parentheses
    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === '(') {
            stack.push(i);
        } else if (char === ')') {
            if (stack.length === 0) {
                toRemove.add(i); // Unmatched ')'
            } else {
                stack.pop(); // Matched pair
            }
        }
    }
    
    // Any remaining '(' in stack are unmatched
    stack.forEach(index => toRemove.add(index));
    
    // Second pass: build the result string
    for (let i = 0; i < s.length; i++) {
        if (!toRemove.has(i)) {
            result.push(s[i]);
        }
    }
    
    return result.join('');
}