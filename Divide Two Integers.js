function divide(dividend, divisor) {
    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    // Edge case: overflow
    if (dividend === INT_MIN && divisor === -1) return INT_MAX;

    // Determine the sign of the result
    const negative = (dividend < 0) !== (divisor < 0);

    // Work with positive values
    let a = Math.abs(dividend);
    let b = Math.abs(divisor);
    let result = 0;

    while (a >= b) {
        let temp = b, multiple = 1;

        // Double temp and multiple until temp > a
        while ((temp << 1) <= a) {
            temp <<= 1;
            multiple <<= 1;
        }

        a -= temp;
        result += multiple;
    }

    return negative ? -result : result;
}
