function myAtoi(s) {
    let index = 0;
    let sign = 1;
    let result = 0;
    const n = s.length;
    const INT_MAX = Math.pow(2, 31) - 1;
    const INT_MIN = -Math.pow(2, 31);
    
    // Step 1: Ignore leading whitespace
    while (index < n && s[index] === ' ') {
        index++;
    }
    
    // Step 2: Determine the sign
    if (index < n && (s[index] === '+' || s[index] === '-')) {
        sign = s[index] === '-' ? -1 : 1;
        index++;
    }
    
    // Step 3: Read digits and convert to number
    while (index < n && s[index] >= '0' && s[index] <= '9') {
        const digit = s.charCodeAt(index) - '0'.charCodeAt(0);
        
        // Check for overflow
        if (result > Math.floor(INT_MAX / 10) || 
            (result === Math.floor(INT_MAX / 10) && digit > INT_MAX % 10)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }
        
        result = result * 10 + digit;
        index++;
    }
    
    // Apply sign
    result *= sign;
    
    // Clamp to 32-bit signed integer range
    if (result > INT_MAX) return INT_MAX;
    if (result < INT_MIN) return INT_MIN;
    
    return result;
}