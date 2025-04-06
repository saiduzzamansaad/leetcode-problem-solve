function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b);
    let closestSum = nums[0] + nums[1] + nums[2];
    
    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            const currentSum = nums[i] + nums[left] + nums[right];
            
            if (Math.abs(currentSum - target) < Math.abs(closestSum - target)) {
                closestSum = currentSum;
            }
            
            if (currentSum < target) {
                left++;
            } else if (currentSum > target) {
                right--;
            } else {
                return currentSum; // exact match found
            }
        }
    }
    
    return closestSum;
}

// Test cases with console.log
console.log("Test Case 1:", threeSumClosest([-1,2,1,-4], 1)); // Output: 2
console.log("Test Case 2:", threeSumClosest([0,0,0], 1));      // Output: 0
console.log("Test Case 3:", threeSumClosest([1,1,1,1], 0));    // Output: 3
console.log("Test Case 4:", threeSumClosest([1,2,4,8,16], 20)); // Output: 22
console.log("Test Case 5:", threeSumClosest([-3,-2,-5,3,-4], -1)); // Output: -2