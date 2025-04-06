function isPalindrome(x) {
    // Negative numbers can't be palindromes
    if (x < 0) return false;
    
    // Single digit numbers are always palindromes
    if (x < 10) return true;
    
    // Reverse the number and compare with original
    let reversed = 0;
    let original = x;
    
    while (x > 0) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    
    return original === reversed;
}