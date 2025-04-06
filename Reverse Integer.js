function reverse(x) {
    const isNegative = x < 0;
    const absoluteX = Math.abs(x);
    const reversedStr = absoluteX.toString().split('').reverse().join('');
    let reversedNum = parseInt(reversedStr, 10);
    
    if (isNegative) {
        reversedNum *= -1;
    }
    
    const maxInt = Math.pow(2, 31) - 1;
    const minInt = -Math.pow(2, 31);
    
    if (reversedNum > maxInt || reversedNum < minInt) {
        return 0;
    }
    
    return reversedNum;
}

// Example usage:
console.log(reverse(123));    // Output: 321
console.log(reverse(-123));   // Output: -321
console.log(reverse(120));    // Output: 21