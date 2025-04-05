
var flat = function(arr, n) {
    if (n === 0) {
        return arr.slice(); // Return a shallow copy to avoid modifying the original array
    }
    let result = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            result.push(...flat(item, n - 1));
        } else {
            result.push(item);
        }
    }
    return result;
};

// Example usage:
const arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
const n = 0;
console.log(flat(arr, n)); // Output: [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]