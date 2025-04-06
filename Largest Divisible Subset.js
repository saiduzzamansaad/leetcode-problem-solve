function largestDivisibleSubset(nums) {
    if (nums.length === 0) return [];
    
    // Sort the array
    nums.sort((a, b) => a - b);
    
    const n = nums.length;
    const dp = new Array(n).fill(1); // dp[i] = size of largest subset ending at nums[i]
    const parent = new Array(n).fill(-1); // parent[i] = index of previous element in the subset
    
    let maxSize = 1;
    let maxIndex = 0;
    
    for (let i = 1; i < n; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0) {
                if (dp[i] < dp[j] + 1) {
                    dp[i] = dp[j] + 1;
                    parent[i] = j;
                }
            }
        }
        if (dp[i] > maxSize) {
            maxSize = dp[i];
            maxIndex = i;
        }
    }
    
    // Reconstruct the subset
    const result = [];
    let current = maxIndex;
    while (current !== -1) {
        result.unshift(nums[current]);
        current = parent[current];
    }
    
    return result;
}

// Example usage:
const nums = [1, 2, 3];
console.log(largestDivisibleSubset(nums)); // Output: [1, 2] or [1, 3]